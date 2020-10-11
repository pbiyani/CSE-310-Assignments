/* eslint-disable no-use-before-define */
/* global $, ENV, asu_ga */
let asuInactiveHidden;

function setCookie(cName, cValue, expireInDays) {
  const d = new Date();
  d.setTime(d.getTime() + expireInDays * 24 * 60 * 60 * 1000);
  const expires = `expires=${d.toUTCString()}`;
  document.cookie = `${cName}=${cValue};${expires}; path=/`;
}

function getCookie(cName) {
  const name = `${cName}=`;
  const ca = document.cookie.split(';');
  let i;
  let c;
  for (i = 0; i < ca.length; i++) {
    c = ca[i];
    while (c.charAt(0) === ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) === 0) {
      return c.substring(name.length, c.length);
    }
  }
  return '';
}

function asuParseUrlForCurrentCourseId() {
  let start;
  let end;
  const currentURL = window.location.href;
  if (currentURL.indexOf('courses') !== -1) {
    start = currentURL.indexOf('courses') + 8; // 8 characters in "courses/"
    end = currentURL.indexOf('/', start + 1);
    if (end === -1) {
      // If there is no next slash, the courseId goes to the end of the string
      end = currentURL.length;
    }
    return currentURL.substring(start, end);
  }
  return null;
}

function asuParseUrlForCurrentAccountId() {
  let start;
  let end;
  const currentURL = window.location.href;
  if (currentURL.indexOf('accounts') !== -1) {
    start = currentURL.indexOf('accounts') + 9; // 9 characters in "accounts/"
    end = currentURL.indexOf('/', start + 1);
    if (end === -1) {
      // If there is no next slash, the accountId goes to the end of the string
      end = currentURL.length;
    }
    return currentURL.substring(start, end);
  }
  return null;
}

// Usage: first time paginateAPI( url, processCallback, endingCallback )
// second time paginateAPI( "", processCallback, endingCallback, count, requestObject )
function paginateAPI(
  targetURL = '',
  processCallback,
  endingCallback,
  count = 0,
  requestObject
) {
  if (targetURL !== '') {
    $.ajax({
      url: targetURL,
      type: 'GET',
    }).done((data, status, request) => {
      const newCount = data.length;
      processCallback(data, newCount);
      paginateAPI('', processCallback, endingCallback, data.length, request);
    });
  } else if (requestObject.getResponseHeader('link').indexOf('next') > 0) {
    const linkArray = requestObject.getResponseHeader('link').split(',');
    linkArray.forEach((link) => {
      if (link.indexOf('next') > 0) {
        const nextUrl = link.substring(
          link.indexOf('<') + 1,
          link.indexOf('>')
        );
        $.ajax({
          url: nextUrl,
          type: 'GET',
        }).done((data, status, innerRequest) => {
          const newCount = count + data.length;
          processCallback(data, newCount);
          paginateAPI('', processCallback, endingCallback, count, innerRequest);
        });
      }
    });
  } else if (endingCallback !== '') {
    endingCallback(count);
  }
}

// The following code can be used to identify when user content has finished loading into Canvas.
// Similar code is used as part of USU design tools (designtools.usu.edu) hence the 2 at the end of the functions
// You are free to use this however you would like - Kenneth Larsen, Utah State University
// If any of these elements exist, we will watch for page content in them to load
const klContentWrappersArray2 = [
  '#course_home_content', // Course Front Page
  '#wiki_page_show', // Content page
  '#discussion_topic', // Discussions page
  '#course_syllabus', // Syllabus page
  '#assignment_show', // Assignments page
  '#wiki_page_revisions',
  '#people-options', // People page
];

// Check to see if the page content has loaded yet
function klPageContentCheck2(klContentWrapperElement2, checkCount) {
  let contentLoaded = false;
  // Content Pages
  if (
    $('.show-content').length > 0 &&
    $('.show-content').children().length > 0
  ) {
    contentLoaded = true;
    // Discussions
  } else if (
    $('#discussion_topic').length > 0 &&
    $('.user_content').text().length > 0
  ) {
    contentLoaded = true;
    // Assignment (Teacher View)
  } else if ($('#assignment_show .teacher-version').length > 0) {
    contentLoaded = true;
  } else if ($('#assignment_show .student-version').length > 0) {
    contentLoaded = true;
  } else if ($('#course_syllabus').length > 0) {
    contentLoaded = true;
  } else if (
    $('div[data-view="users"]').length > 0 &&
    document.querySelector('tbody.collectionViewItems') !== null
  ) {
    // people page
    contentLoaded = true;
  }

  if (contentLoaded) {
    klAfterContentLoaded2();
  } else if (checkCount < 50) {
    const newCheckCount = checkCount + 1;
    setTimeout(() => {
      klPageContentCheck2(klContentWrapperElement2, newCheckCount);
    }, 100);
  }
}

function klAfterContentLoaded2() {
  $(
    "a[href='https://www.asu.edu/it/acadtech/certificate/certificate.html#course=Community%20of%20Care%3A%20Coming%20to%20Campus']"
  ).attr(
    'href',
    `https://www.asu.edu/it/acadtech/certificate/certificate.html#course=Community%20of%20Care%3A%20Coming%20to%20Campus&name=${ENV.current_user.display_name}`
  );
  $(
    "a[href='https://www.asu.edu/it/acadtech/certificate/certificate.html']"
  ).attr(
    'href',
    `https://www.asu.edu/it/acadtech/certificate/certificate.html#name=${ENV.current_user.display_name}`
  );
  $(
    "a[href='https://www.asu.edu/it/acadtech/certificate-sustainability/certificate.html']"
  ).attr(
    'href',
    `https://www.asu.edu/it/acadtech/certificate-sustainability/certificate.html#name=${ENV.current_user.display_name}`
  );

  if ($('p#asuAdrianTermPage').length === 1) {
    asuTermUtility();
  }

  // Check if we're on the People page and handle inactive enrollments
  if (
    document.querySelector('tbody.collectionViewItems') !== null &&
    window.location.toString().indexOf('users') > 0
  ) {
    asuInactivePeoplePage();
  }
}

function asuTermUtility() {
  $('#asuAdrianTermPage').html(
    'Move courses that are in the default term <input type="button" id="asuMigrateTerms" value="Migrate Courses" /><br><br>Rows returned: <span id="numResults"></span><br>Courses moved: <span id="numMovedCourses"></span><br>Number of errors: <span id="numErrors"></span><table id="tableResults"></table>'
  );
  $('#asuMigrateTerms').click(() => {
    const termUrl = '/api/v1/accounts/1/terms?per_page=100';
    const termArray = [];
    // var rawData = [];
    const resultsArray = [];
    let coursesMoved = 0;
    let courseErrors = 0;
    let coursesUrl;
    let courseInfo;
    let tempTerm;
    let tempUrl;
    let tempData;
    let tblResultsTR;
    let i;
    let resultsLength;
    const processStartTime = new Date();
    // Reset display
    $('#tableResults').html(
      '<tr><th>Course Code</th><th>New Term</th><th>Status</th></tr>'
    );
    $('#numResults').html('0');
    $('#numErrors').html('0');
    $('#numMovedCourses').html('0');
    $('#asuResultsComplete').remove();

    const asuBuildTermList = (data) => {
      // Parse data to store relevant term details in an array
      data.enrollment_terms.forEach((term) => {
        termArray[term.id] = term.sis_term_id;
      });
    };

    const asuFetchProcessCourses = () => {
      coursesUrl =
        '/api/v1/accounts/1/courses?per_page=100&enrollment_term_id=1';

      const asuBuildCourseTermList = (data, count) => {
        console.log('Data received, loop through the courses and map them');
        $('#numResults').html(count);

        for (i = 0, resultsLength = data.length; i < resultsLength; i++) {
          courseInfo = data[i].sis_course_id.slice(
            0,
            data[i].sis_course_id.indexOf('-')
          );
          console.log(`courseInfo for [${i}] = ${courseInfo}`);

          if (courseInfo.indexOf('DUPL') === 0) {
            // snip "DUPL" to find the correct term
            courseInfo = courseInfo.substr(4);
          }

          switch (courseInfo) {
            case 'DEV':
              tempTerm = termArray.indexOf('2020DEV');
              break;
            case 'ORG':
              tempTerm = termArray.indexOf('2020ORG');
              break;
            case 'TRN':
              tempTerm = termArray.indexOf('2020TRN');
              break;
            default:
              if (termArray.indexOf(courseInfo) > 0) {
                tempTerm = termArray.indexOf(courseInfo);
              } else if (termArray.indexOf(`${courseInfo}C`) > 0) {
                tempTerm = termArray.indexOf(`${courseInfo}C`);
              } else {
                tempTerm = -1;
                console.log('Term not found?');
              }
          }
          console.log(
            `Course [${data[i].sis_course_id}] should be in term [${termArray[tempTerm]}]`
          );

          if (tempTerm === -1) {
            // This course failed for some reason, note it on the page
            tblResultsTR = `<tr style='color: red;'><td>${data[i].sis_course_id}</td><td>Term not found</td><td>Failed</td></tr>`;
            $('#tableResults').append(tblResultsTR);
            courseErrors += 1;
          } else {
            resultsArray.push([
              data[i].id,
              data[i].sis_course_id,
              termArray[tempTerm],
            ]);
          }
        }

        $('#numErrors').html(courseErrors);
      };

      const asuCheckResults = () => {
        console.log(
          'Data collection complete, confirm data exists and move courses'
        );

        // Make sure we actually got results
        if (resultsArray.length === 0) {
          const processEndTime = new Date();
          const processTotalTime =
            (processEndTime.getTime() - processStartTime.getTime()) / 1000;
          $('#numResults').after(
            `<span id='asuResultsComplete' style='color: red'> - done - Complete in ${processTotalTime} seconds</span>`
          );
        } else {
          asuMoveCoursesToTerms();
        }
      };

      const asuMoveCoursesToTerms = () => {
        // Actually move the courses
        tempUrl = `/api/v1/courses/${resultsArray[0][0]}`;
        tempData = `course[term_id]=${termArray.indexOf(resultsArray[0][2])}`;
        $.ajax({
          url: tempUrl,
          type: 'PUT',
          data: tempData,
        }).done((data, status) => {
          tblResultsTR = `<tr><td>${resultsArray[0][1]}</td><td>${resultsArray[0][2]}</td><td>${status}</td></tr>`;
          $('#tableResults').append(tblResultsTR);
          coursesMoved += 1;
          $('#numMovedCourses').html(coursesMoved);

          resultsArray.shift();
          if (resultsArray.length > 0) {
            asuMoveCoursesToTerms();
          } else {
            const processEndTime = new Date();
            const processTotalTime =
              (processEndTime.getTime() - processStartTime.getTime()) / 1000;
            $('#numResults').after(
              `<span id='asuResultsComplete' style='color: red'> - done - Complete in ${processTotalTime} seconds</span>`
            );
          }
        });
      };

      paginateAPI(coursesUrl, asuBuildCourseTermList, asuCheckResults);
    };

    paginateAPI(termUrl, asuBuildTermList, asuFetchProcessCourses);
  });
}

function asuInactivePeoplePage() {
  // Check if an "asuInactiveHidden" cookie exists, if not set it to false (visible)
  asuCheckInactiveCookie();

  // Create a mutationObserver that will hide inactive users when the roster list changes (if that is the current user's preference)
  const mutationObserver = new MutationObserver((mutations) => {
    mutations.forEach(() => {
      if (asuInactiveHidden) {
        asuToggleInactiveUsers();
      }
    });

    // Add click event to deactivateUser to catch new rows added to the table
    let i;
    for (
      i = 0;
      i <
      $("td.right div.admin-links ul li a[data-event='deactivateUser']").length;
      i++
    ) {
      if (
        !$("td.right div.admin-links ul li a[data-event='deactivateUser']")[
          i
        ].getAttribute('hasASUClickEvent')
      ) {
        $("td.right div.admin-links ul li a[data-event='deactivateUser']")[
          i
        ].setAttribute('hasASUClickEvent', true);
        $("td.right div.admin-links ul li a[data-event='deactivateUser']")[
          i
        ].addEventListener('click', () => {
          asuCheckForNewlyDeactivatedUsers(0);
        });
      }
    }
  });

  const tableBody = document.querySelector('tbody.collectionViewItems');

  const config = { attributes: true, childList: true, characterData: true };

  mutationObserver.observe(tableBody, config);

  asuInjectHideShowButtonSelectorPosition(
    "a[aria-label='Add People']",
    'before'
  );
  asuToggleInactiveUsers();
  asuFixAlternatingRowStyling();
  asuAttachInactiveClickHandler();

  $("td.right div.admin-links ul li a[data-event='deactivateUser']").click(
    () => {
      asuCheckForNewlyDeactivatedUsers(0);
    }
  );
}

function asuInactiveModerateQuizzes() {
  const currentCourse = asuParseUrlForCurrentCourseId();
  const inactiveEnrollmentsApiUrl = `/api/v1/courses/${currentCourse}/enrollments?state[]=inactive&per_page=100`;
  const inactiveStudentList = new Set();

  // Check if an asuInactiveHidden cookie exists, if not set it to false (visible)
  asuCheckInactiveCookie();

  const buildStudentList = (data) => {
    data.forEach((student) => {
      inactiveStudentList.add(student.user_id);
    });
  };

  const flagStudents = () => {
    inactiveStudentList.forEach((student) => {
      $(`tr#student_${student} td.name`).append(
        '<span class="label" title="This user is currently not able to access the course">inactive</span>'
      );
    });

    asuInjectHideShowButtonSelectorPosition('div.moderate_header', 'after');
    asuToggleInactiveUsers();
    asuFixAlternatingRowStyling();
    asuAttachInactiveClickHandler();
  };

  paginateAPI(inactiveEnrollmentsApiUrl, buildStudentList, flagStudents);
}

function asuCheckInactiveCookie() {
  asuInactiveHidden = getCookie('asuInactiveHidden');
  if (asuInactiveHidden === '') {
    // Default to false
    asuInactiveHidden = false;
    setCookie('asuInactiveHidden', asuInactiveHidden, 365);
  } else {
    // Convert from string to boolean
    asuInactiveHidden = asuInactiveHidden === 'true';
  }
}

function asuCheckForNewlyDeactivatedUsers(checkCount) {
  if (!asuInactiveHidden) {
    console.log('Inactive users should be visible, exiting.');
    return;
  }

  let newlyDeactivated = false;

  if (
    $("span[title='This user is currently not able to access the course']")
      .parent()
      .parent()
      .has(':visible').length > 0
  ) {
    newlyDeactivated = true;
  }

  if (newlyDeactivated) {
    asuToggleInactiveUsers();
    asuFixAlternatingRowStyling();
  } else if (checkCount < 50) {
    const newCheckCount = checkCount + 1;
    setTimeout(() => {
      asuCheckForNewlyDeactivatedUsers(newCheckCount);
    }, 100);
  }
}

function asuInjectHideShowButtonSelectorPosition(selector, position) {
  const showHtml =
    "<a href='#' class='btn btn-primary pull-right' id='asuToggleInactiveButton' role='button' title='Show Inactive' aria-label='Show Inactive' asuStatus='hidden' style='margin-left: 5px; z-index: 1;'>Show Inactive</a>";
  const hideHtml =
    "<a href='#' class='btn btn-primary pull-right' id='asuToggleInactiveButton' role='button' title='Hide Inactive' aria-label='Hide Inactive' asuStatus='visible' style='margin-left: 5px; z-index: 1;'>Hide Inactive</a>";

  if (asuInactiveHidden) {
    if (position === 'before') {
      $(selector).before(showHtml);
    } else {
      $(selector).after(showHtml);
    }
  } else if (position === 'before') {
    $(selector).before(hideHtml);
  } else {
    $(selector).after(hideHtml);
  }
}

function asuToggleInactiveUsers() {
  if (asuInactiveHidden) {
    $("span[title='This user is currently not able to access the course']")
      .parent()
      .parent()
      .hide();
  } else {
    $("span[title='This user is currently not able to access the course']")
      .parent()
      .parent()
      .show();
  }
}

function asuFixAlternatingRowStyling() {
  $('.ic-Table.ic-Table--striped tbody tr').css('background', 'inherit');
  $('.ic-Table.ic-Table--striped tbody tr:visible:odd').css(
    'background',
    '#F5F5F5'
  );
  $('.ic-Table.ic-Table--striped tbody tr').hover(
    function asuTableEvenHoverHandler(e) {
      $(this).css(
        'background-color',
        e.type === 'mouseenter' ? '#E5F2F8' : 'inherit'
      );
    }
  );
  $('.ic-Table.ic-Table--striped tbody tr:visible:odd').hover(
    function asuTableOddHoverHandler(e) {
      $(this).css(
        'background-color',
        e.type === 'mouseenter' ? '#E5F2F8' : '#F5F5F5'
      );
    }
  );
}

function asuAttachInactiveClickHandler() {
  $('#asuToggleInactiveButton').click(function asuToggleInactiveHandler() {
    if ($(this).attr('asuStatus') === 'visible') {
      $(this)
        .attr('asuStatus', 'hidden')
        .html('Show Inactive')
        .attr('aria-label', 'Show Inactive')
        .attr('title', 'Show Inactive');
      asuInactiveHidden = true;
    } else {
      $(this)
        .attr('asuStatus', 'visible')
        .html('Hide Inactive')
        .attr('aria-label', 'Hide Inactive')
        .attr('title', 'Hide Inactive');
      asuInactiveHidden = false;
    }
    asuToggleInactiveUsers();
    asuFixAlternatingRowStyling();

    setCookie('asuInactiveHidden', asuInactiveHidden, 365);
  });
}

// GA snippet
function asuGA(i, s, o, g, r, a, m) {
  // eslint-disable-next-line no-param-reassign
  i.GoogleAnalyticsObject = r;
  // eslint-disable-next-line no-param-reassign, no-unused-expressions
  (i[r] =
    i[r] ||
    // eslint-disable-next-line func-names
    function () {
      // eslint-disable-next-line prefer-rest-params, no-param-reassign
      (i[r].q = i[r].q || []).push(arguments);
      // eslint-disable-next-line no-sequences
    }),
    // eslint-disable-next-line no-param-reassign
    (i[r].l = 1 * new Date());
  // eslint-disable-next-line no-unused-expressions, prefer-destructuring, no-sequences, no-param-reassign
  (a = s.createElement(o)), (m = s.getElementsByTagName(o)[0]);
  // eslint-disable-next-line no-param-reassign
  a.async = 1;
  // eslint-disable-next-line no-param-reassign
  a.src = g;
  m.parentNode.insertBefore(a, m);
}

// <!-- Google Tag Manager -->
((w, d, s, l, i) => {
  // eslint-disable-next-line no-param-reassign
  w[l] = w[l] || [];
  w[l].push({
    'gtm.start': new Date().getTime(),
    event: 'gtm.js',
  });
  const f = d.getElementsByTagName(s)[0];
  const j = d.createElement(s);
  const dl = l !== 'dataLayer' ? `&l=${l}` : '';
  j.async = true;
  j.src = `https://www.googletagmanager.com/gtm.js?id=${i}${dl}`;
  f.parentNode.insertBefore(j, f);
})(window, document, 'script', 'dataLayer', 'GTM-PQVJ7SL');
// <!-- End Google Tag Manager -->

function asuFilterTermsBasedOnLocation() {
  let asuCurrentAccountId;
  let asuSubAccount = 'ASU'; // default to ASU because that is most likely
  const auSubAccounts = [184, 186, 187, 188, 189, 190, 191, 192, 193, 194];

  if (/accounts\/\d+($|\/$|\/?\?)/.test(window.location.href)) {
    asuDisableTermFilter();
  }

  // Decide whether we want ASU or AU terms
  const asuWhatAccountAreWeIn = new Promise((resolve) => {
    if (/courses\/\d+\/settings/.test(window.location.href)) {
      // Make API call for course and pull account id
      const currentCourseId = asuParseUrlForCurrentCourseId();
      $.get(`/api/v1/courses/${currentCourseId}`, (data) => {
        resolve(data.account_id);
      });
    } else if (/accounts\/\d+/.test(window.location.href)) {
      // just pull account ID # from URL
      resolve(asuParseUrlForCurrentAccountId());
    }
  });

  asuWhatAccountAreWeIn.then(
    (result) => {
      asuCurrentAccountId = result;
      if (auSubAccounts.indexOf(parseInt(asuCurrentAccountId, 10)) > -1) {
        asuSubAccount = 'AU';
      }
      const termUrl = '/api/v1/accounts/1/terms?per_page=10';
      const termArray = [];

      const asuBuildTermFilteringList = (data) => {
        // Parse data to store relevant term details in an array
        data.enrollment_terms.forEach((term) => {
          if (term.name.indexOf('AU') === -1) {
            termArray[term.id] = 'ASU';
          } else {
            termArray[term.id] = 'AU';
          }
        });
      };

      const asuCleanTermsOnPage = () => {
        if (/accounts\/\d+($|\/$|\/?\?)/.test(window.location.href)) {
          // For accounts > Courses, catch with mutation observer and destroy/hide unwanted spans when they're created
          // -----------------Accounts > Courses----------------- //
          const mutationObserver = new MutationObserver((mutations) => {
            mutations.forEach((mutation) => {
              let currentSpanVal;
              if (
                mutation.target.dir === 'ltr' ||
                mutation.target.localName === 'ul'
              ) {
                if (mutation.addedNodes.length !== 0) {
                  $(
                    "span[dir='ltr'] > span > span > span > div > ul > li > span > div > ul > li > span"
                  ).each(function asuShowHideTermAccountHandler() {
                    const spanItem = $(this);
                    const termHeading =
                      spanItem[0].parentNode.parentNode.parentNode.firstChild
                        .innerText;

                    // lets make sure we are only modifing the correct term list (added since we can no longer rely on list selection path above)
                    if (
                      termHeading === 'Show courses from' ||
                      termHeading === 'Active Terms' ||
                      termHeading === 'Future Terms' ||
                      termHeading === 'Past Terms'
                    ) {
                      currentSpanVal = $(this).attr('value');
                      if (
                        asuSubAccount === termArray[currentSpanVal] ||
                        currentSpanVal === '1'
                      ) {
                        $(this).show();
                      } else {
                        $(this).hide();
                      }
                    }
                  });
                }
              }
            });
          });

          mutationObserver.observe(document.body, {
            attributes: false,
            characterData: false,
            childList: true,
            subtree: true,
            attributeOldValue: false,
            characterDataOldValue: false,
          });

          asuEnableTermFilter();
          // -------------end Accounts > Courses----------------- //
        } else if (/courses\/\d+\/settings/.test(window.location.href)) {
          // -------------Course > Settings----------------- //
          let currentOptVal;
          $('select#course_enrollment_term_id option').each(
            function asuShowHideTermCourseHandler() {
              currentOptVal = $(this).attr('value');
              if (
                asuSubAccount === termArray[currentOptVal] ||
                currentOptVal === '1'
              ) {
                $(this).show();
              } else {
                $(this).hide();
              }
            }
          );
          // ---------end Course > Settings----------------- //
        } else {
          // -------------Accounts > Analytics----------------- //
          let currentOptVal;
          $('select.ic-Input option').each(
            function asuShowHideTermAnalyticsHandler() {
              currentOptVal = $(this).attr('value');
              if (
                asuSubAccount === termArray[currentOptVal] ||
                currentOptVal === '1'
              ) {
                $(this).show();
              } else {
                $(this).hide();
              }
            }
          );
          // ---------end Accounts > Analytics----------------- //
        }
      };

      paginateAPI(termUrl, asuBuildTermFilteringList, asuCleanTermsOnPage);
    },
    (error) => {
      asuCurrentAccountId = error;
    }
  );
}

function asuDisableTermFilter() {
  const filterBox = {};
  filterBox.obj = $('#termFilter')
    .parent()
    .parent()
    .parent()
    .parent()
    .parent()
    .parent()
    .parent()
    .parent()
    .parent()
    .parent()
    .parent();
  filterBox.top = filterBox.obj.offset().top;
  filterBox.left = filterBox.obj.offset().left;
  filterBox.width = filterBox.obj.css('width');
  filterBox.height = filterBox.obj.css('height');
  filterBox.paddingLeft = filterBox.obj.css('padding-left');

  $("<div id='loadingFilterBlocker'></div>").prependTo('#wrapper');
  $('#loadingFilterBlocker')
    .css('position', 'absolute')
    .css('background', 'rgba(0, 0, 0, 0.05)')
    .css('top', filterBox.top)
    .css('left', filterBox.left)
    .css('width', filterBox.width)
    .css('height', filterBox.height)
    .css('margin-left', filterBox.paddingLeft)
    .css('border-radius', 'var(--qBMHb-borderRadius)')
    .css('z-index', 11);
}

function asuEnableTermFilter() {
  $('#loadingFilterBlocker').remove();
}

window.addEventListener('load', () => {
  // Check if we're on the moderate quiz page
  if (/courses\/\d+\/quizzes\/\d+\/moderate/.test(window.location.href)) {
    asuInactiveModerateQuizzes();
  }

  // Check if we're on a course page
  if (window.location.pathname.substring(1, 8) === 'courses') {
    // Add hidden eye icon to course navigation link
    // Ally Dashboard
    const allyCourseNavLink = document.querySelector(
      '[title="Ally Dashboard"]'
    );
    if (allyCourseNavLink) {
      allyCourseNavLink.innerHTML = `${allyCourseNavLink.innerHTML}<i class="nav-icon icon-off" aria-hidden="true" role="presentation"></i>`;
    }
    // Rubrics
    const rubricsCourseNavLink = document.querySelector('[title="Rubrics"]');
    if (rubricsCourseNavLink) {
      rubricsCourseNavLink.innerHTML = `${rubricsCourseNavLink.innerHTML}<i class="nav-icon icon-off" aria-hidden="true" role="presentation"></i>`;
    }
  }

  // Check if we're on a page with term selection
  if (
    /accounts\/\d+($|\/$|\/?\?)/.test(window.location.href) ||
    /courses\/\d+\/settings/.test(window.location.href) ||
    /accounts\/\d+\/analytics/.test(window.location.href)
  ) {
    asuFilterTermsBasedOnLocation();
  }

  // Add header links to every page except speed grader and students' view of their assignment submissions or quiz submissions
  if (
    window.location.href.indexOf('submissions') === -1 &&
    window.location.href.indexOf('speed_grader') === -1 &&
    $('#speedgrader_iframe').length === 0 &&
    window.location.href.indexOf('headless') === -1
  ) {
    $(
      '<div class="asuHeaderPadding"></div><div id="custom-asu-header-links"><ul id="custom-asu-header-ul" class="closed"><li><a class="Button" href="http://www.asu.edu/">ASU Home</a></li><li><a class="Button" href="https://my.asu.edu/">My ASU</a></li><li><a class="Button" href="http://www.asu.edu/colleges/">Colleges &amp; Schools</a></li><li><a class="Button" href="http://www.asu.edu/map/">Map &amp; Locations</a></li><li><a class="Button" href="http://www.asu.edu/contactasu/">Contact Us</a></li></ul></div>'
    ).prependTo('#wrapper');
    $('button.mobile-header-hamburger:first').after(
      '<button id="mobile-custom-asu-header-links" class="Button Button--icon-action-rev Button--large  mobile-header-hamburger"><i class="icon-solid icon-hamburger"></i><span class="screenreader-only">ASU Header Links</span></button>'
    );
  }

  // Add event handler to open/close the header link menu on mobile/small browsers
  $('#mobile-custom-asu-header-links').click(() => {
    if ($('#mobile-custom-asu-header-links > i').hasClass('icon-hamburger')) {
      // Currently closed, open the menu, #custom-asu-header-ul
      $('#mobile-custom-asu-header-links > i')
        .removeClass('icon-hamburger')
        .addClass('icon-x');
      $('#custom-asu-header-ul').removeClass('closed').addClass('opened');
    } else {
      // Currently open, close the menu, #custom-asu-header-ul
      $('#mobile-custom-asu-header-links > i')
        .removeClass('icon-x')
        .addClass('icon-hamburger');
      $('#custom-asu-header-ul').removeClass('opened').addClass('closed');
    }
  });

  // Remove harmful things
  // $("#right-side > div > a.Button[href*='conclude'], #right-side > div > a.Button[href*='delete']").hide();
  $('select#course_course_visibility option[value=public]').remove();

  // Update 404 pages to refer students to the Help Center
  $('a.submit_error_link').before(
    `If you reached this page through a link in your course, please reach out to your instructor and include this URL ( ${window.location} ), as well as what you were attempting to do when you encountered the error.<br><br>If this link was not in a course, or you need assistance with other issues, please reach out to the ASU Help Center at 1-855-278-5080.`
  );
  $('a.submit_error_link, #submit_error_form').remove();

  // Initialize GA
  asuGA(
    window,
    document,
    'script',
    'https://www.google-analytics.com/analytics.js',
    'asu_ga'
  );

  // Fetch Canvas userId and pass with pageiew to GA
  const USER_ID = ENV.current_user_id;
  asu_ga('create', 'UA-42798992-21', 'auto', {
    userId: USER_ID,
  });
  asu_ga('send', 'pageview');

  // check for Community of Care link, append name
  let i;

  // Identify which page we are on and when the content has loaded
  for (i = 0; i <= klContentWrappersArray2.length; i++) {
    if ($(klContentWrappersArray2[i]).length > 0) {
      // console.log(klContentWrappersArray2[i] + ' Found');
      klPageContentCheck2(klContentWrappersArray2[i], 0);
      break;
    }
  }

  // Check if we are on a redirect page
  if ($('#custom_url').length > 0 && $('#custom_new_tab').length === 0) {
    // Check if the redirect link is pointing to a Canvas domain
    if (
      $('#custom_url')
        .val()
        .substring(0, $('#custom_url').val().indexOf('/', 9)) ===
        'https://asu.instructure.com' ||
      $('#custom_url')
        .val()
        .substring(0, $('#custom_url').val().indexOf('/', 9)) ===
        'https://canvas.asu.edu'
    ) {
      // Compare custom_url against current domain
      if (
        window.location
          .toString()
          .substring(0, window.location.toString().indexOf('/', 9)) !==
        $('#custom_url')
          .val()
          .substring(0, $('#custom_url').val().indexOf('/', 9))
      ) {
        // Domains do not match, update custom_url to reflect current domain and set window.location to redirect
        window.location =
          window.location
            .toString()
            .substring(0, window.location.toString().indexOf('/', 9)) +
          $('#custom_url')
            .val()
            .substring($('#custom_url').val().indexOf('/', 9));
      }
    }
  }
});

window.ALLY_CFG = {
  baseUrl: 'https://prod.ally.ac',
  clientId: 5430,
};

// eslint-disable-next-line no-undef
$.getScript(`${ALLY_CFG.baseUrl}/integration/canvas/ally.js`);
