
// Copyright 2012 Google Inc. All rights reserved.
(function(w,g){w[g]=w[g]||{};w[g].e=function(s){return eval(s);};})(window,'google_tag_manager');(function(){

var data = {
"resource": {
  "version":"18",
  
  "macros":[{
      "function":"__e"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return window.ENV.current_user_id})();"]
    },{
      "function":"__d",
      "vtp_elementSelector":"#breadcrumbs \u003E ul \u003E li:nth-child(2) \u003E a \u003E span",
      "vtp_selectorType":"CSS"
    },{
      "function":"__remm",
      "vtp_setDefaultValue":true,
      "vtp_input":["macro",2],
      "vtp_fullMatch":false,
      "vtp_replaceAfterMatch":true,
      "vtp_defaultValue":"Not Assigned",
      "vtp_ignoreCase":true,
      "vtp_map":["list",["map","key",".*-T-.*","value","Tempe"],["map","key",".*-P-.*","value","Poly"],["map","key",".*-W-.*","value","West"],["map","key",".*-D-.*","value","Downtown"],["map","key",".*-X-.*","value","Online"]]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=",["escape",["macro",2],8,16],".split(\"-\");return a[3]})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=",["escape",["macro",2],8,16],".split(\"-\");return a[2]})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=",["escape",["macro",2],8,16],".split(\"-\");return a[1]})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=",["escape",["macro",2],8,16],".split(\"-\");return a[0]})();"]
    },{
      "function":"__d",
      "vtp_elementSelector":"#submission_final-grade \u003E td.assignment_score \u003E div \u003E span.tooltip \u003E span",
      "vtp_selectorType":"CSS"
    },{
      "function":"__gas",
      "vtp_cookieDomain":"auto",
      "vtp_doubleClick":false,
      "vtp_setTrackerName":false,
      "vtp_useDebugVersion":false,
      "vtp_fieldsToSet":["list",["map","fieldName","allowLinker","value","true"]],
      "vtp_useHashAutoLink":false,
      "vtp_autoLinkDomains":"asu.edu,instructure.com,canvas.com",
      "vtp_decorateFormsAutoLink":false,
      "vtp_enableLinkId":false,
      "vtp_dimension":["list",["map","index","46","dimension",["macro",1]],["map","index","47","dimension",["macro",1]],["map","index","51","dimension",["macro",3]],["map","index","52","dimension",["macro",2]],["map","index","64","dimension",["macro",4]],["map","index","63","dimension",["macro",5]],["map","index","62","dimension",["macro",6]],["map","index","61","dimension",["macro",7]],["map","index","65","dimension",["macro",8]]],
      "vtp_enableEcommerce":false,
      "vtp_trackingId":"UA-42798992-4",
      "vtp_enableRecaptchaOption":false,
      "vtp_enableTransportUrl":true,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false
    },{
      "function":"__v",
      "vtp_name":"gtm.elementId",
      "vtp_dataLayerVersion":1
    },{
      "function":"__v",
      "vtp_name":"gtm.triggers",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":true,
      "vtp_defaultValue":""
    },{
      "function":"__aev",
      "vtp_varType":"TEXT"
    },{
      "function":"__v",
      "vtp_name":"gtm.element",
      "vtp_dataLayerVersion":1
    },{
      "function":"__aev",
      "vtp_varType":"TEXT"
    },{
      "function":"__v",
      "vtp_name":"gtm.elementClasses",
      "vtp_dataLayerVersion":1
    },{
      "function":"__u",
      "vtp_component":"URL",
      "vtp_enableMultiQueryKeys":false,
      "vtp_enableIgnoreEmptyQueryParam":false
    },{
      "function":"__u",
      "vtp_component":"PATH",
      "vtp_enableMultiQueryKeys":false,
      "vtp_enableIgnoreEmptyQueryParam":false
    },{
      "function":"__v",
      "vtp_name":"gtm.elementUrl",
      "vtp_dataLayerVersion":1
    },{
      "function":"__d",
      "vtp_elementSelector":"#quiz-submission-version-table \u003E div \u003E h3",
      "vtp_selectorType":"CSS"
    },{
      "function":"__d",
      "convert_null_to":"graded",
      "vtp_elementSelector":"#quiz-submission-version-table \u003E p",
      "vtp_selectorType":"CSS"
    },{
      "function":"__d",
      "vtp_elementId":"quiz_title",
      "vtp_selectorType":"ID"
    },{
      "function":"__d",
      "vtp_elementSelector":"#quiz-submission-version-table \u003E table \u003E tbody \u003E tr \u003E td:nth-child(4)",
      "vtp_selectorType":"CSS"
    },{
      "function":"__v",
      "vtp_setDefaultValue":false,
      "vtp_dataLayerVersion":2,
      "vtp_name":"attributes.videoAction"
    },{
      "function":"__v",
      "vtp_setDefaultValue":false,
      "vtp_dataLayerVersion":2,
      "vtp_name":"attributes.videoName"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return window.ENV.DISCUSSION.TOPIC.TITLE})();"]
    },{
      "function":"__gas",
      "vtp_cookieDomain":"auto",
      "vtp_doubleClick":false,
      "vtp_setTrackerName":false,
      "vtp_useDebugVersion":false,
      "vtp_fieldsToSet":["list",["map","fieldName","allowLinker","value","true"]],
      "vtp_useHashAutoLink":false,
      "vtp_autoLinkDomains":"asu.edu,instructure.com",
      "vtp_decorateFormsAutoLink":false,
      "vtp_enableLinkId":false,
      "vtp_enableEcommerce":false,
      "vtp_trackingId":"UA-42798992-21",
      "vtp_enableRecaptchaOption":false,
      "vtp_enableTransportUrl":true,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=document.getElementById(\"course_select_menu\");return a.options[a.selectedIndex].text})();"]
    },{
      "function":"__d",
      "vtp_elementSelector":"div.student_assignment.final_grade",
      "vtp_selectorType":"CSS"
    },{
      "function":"__d",
      "vtp_elementSelector":"h1.discussion-title",
      "vtp_selectorType":"CSS"
    },{
      "function":"__j",
      "vtp_name":"QUIZ.title"
    },{
      "function":"__smm",
      "vtp_setDefaultValue":false,
      "vtp_input":["macro",14],
      "vtp_map":["list",["map","key","Post Reply","value","submit post"],["map","key","Reply","value","reply to other post"]]
    },{
      "function":"__d",
      "vtp_elementSelector":"#entry-8260178 \u003E article \u003E div.discussion-entry-reply-area.hide-if-collapsed.show-if-replying \u003E form \u003E div.discussion-top-right-header.pull-right \u003E div \u003E a:nth-child(1)",
      "vtp_selectorType":"CSS"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return window.ENV.current_user.display_name})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return window.ENV.USER_EMAIL})();"]
    },{
      "function":"__u",
      "vtp_component":"HOST",
      "vtp_enableMultiQueryKeys":false,
      "vtp_enableIgnoreEmptyQueryParam":false
    },{
      "function":"__f",
      "vtp_component":"URL"
    },{
      "function":"__e"
    },{
      "function":"__v",
      "vtp_name":"gtm.elementTarget",
      "vtp_dataLayerVersion":1
    },{
      "function":"__v",
      "vtp_name":"gtm.elementUrl",
      "vtp_dataLayerVersion":1
    },{
      "function":"__dbg"
    },{
      "function":"__v",
      "vtp_name":"gtm.videoProvider",
      "vtp_dataLayerVersion":1
    },{
      "function":"__v",
      "vtp_name":"gtm.videoUrl",
      "vtp_dataLayerVersion":1
    },{
      "function":"__v",
      "vtp_name":"gtm.videoTitle",
      "vtp_dataLayerVersion":1
    },{
      "function":"__v",
      "vtp_name":"gtm.videoDuration",
      "vtp_dataLayerVersion":1
    },{
      "function":"__v",
      "vtp_name":"gtm.videoPercent",
      "vtp_dataLayerVersion":1
    },{
      "function":"__v",
      "vtp_name":"gtm.videoVisible",
      "vtp_dataLayerVersion":1
    },{
      "function":"__v",
      "vtp_name":"gtm.videoStatus",
      "vtp_dataLayerVersion":1
    },{
      "function":"__v",
      "vtp_name":"gtm.videoCurrentTime",
      "vtp_dataLayerVersion":1
    }],
  "tags":[{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_overrideGaSettings":false,
      "vtp_trackType":"TRACK_PAGEVIEW",
      "vtp_gaSettings":["macro",9],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableTransportUrl":true,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "tag_id":1
    },{
      "function":"__paused",
      "vtp_originalTagType":"ua",
      "tag_id":4
    },{
      "function":"__paused",
      "vtp_originalTagType":"ua",
      "tag_id":6
    },{
      "function":"__paused",
      "vtp_originalTagType":"ua",
      "tag_id":8
    },{
      "function":"__paused",
      "vtp_originalTagType":"ua",
      "tag_id":10
    },{
      "function":"__paused",
      "vtp_originalTagType":"ua",
      "tag_id":12
    },{
      "function":"__paused",
      "vtp_originalTagType":"ua",
      "tag_id":14
    },{
      "function":"__paused",
      "vtp_originalTagType":"ua",
      "tag_id":16
    },{
      "function":"__paused",
      "vtp_originalTagType":"ua",
      "tag_id":17
    },{
      "function":"__paused",
      "vtp_originalTagType":"ua",
      "tag_id":20
    },{
      "function":"__paused",
      "vtp_originalTagType":"ua",
      "tag_id":22
    },{
      "function":"__paused",
      "vtp_originalTagType":"ua",
      "tag_id":24
    },{
      "function":"__paused",
      "vtp_originalTagType":"ua",
      "tag_id":26
    },{
      "function":"__paused",
      "vtp_originalTagType":"ua",
      "tag_id":28
    },{
      "function":"__paused",
      "vtp_originalTagType":"ua",
      "tag_id":30
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"canvas - main content",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",9],
      "vtp_eventAction":"lms ^ click",
      "vtp_eventLabel":["template","link ^ canvas external link ^ ",["macro",14]," ^ ",["macro",18]],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableTransportUrl":true,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":35
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":true,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"Canvas - Quiz",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",9],
      "vtp_eventAction":["template",["macro",21]," ^ attempt"],
      "vtp_eventLabel":["macro",22],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableTransportUrl":true,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":39
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"canvas - main content",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",9],
      "vtp_eventAction":["template","wistia videos ^ ",["macro",23]],
      "vtp_eventLabel":["macro",24],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableTransportUrl":true,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":52
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"canvas - main content",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",9],
      "vtp_eventAction":"lms ^ click",
      "vtp_eventLabel":["template","link ^ canvas internal link ^ ",["macro",14]," ^ ",["macro",18]],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableTransportUrl":true,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":61
    },{
      "function":"__paused",
      "vtp_originalTagType":"ua",
      "tag_id":64
    },{
      "function":"__gaawc",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_sendPageView":true,
      "vtp_measurementId":"G-TEHJR60KD9",
      "vtp_enableUserProperties":true,
      "vtp_enableGA4Name":false,
      "tag_id":88
    },{
      "function":"__lcl",
      "vtp_waitForTags":false,
      "vtp_checkValidation":false,
      "vtp_waitForTagsTimeout":"2000",
      "vtp_uniqueTriggerId":"12400358_9",
      "tag_id":89
    },{
      "function":"__cl",
      "tag_id":90
    },{
      "function":"__lcl",
      "vtp_waitForTags":false,
      "vtp_checkValidation":false,
      "vtp_waitForTagsTimeout":"2000",
      "vtp_uniqueTriggerId":"12400358_11",
      "tag_id":91
    },{
      "function":"__cl",
      "tag_id":92
    },{
      "function":"__cl",
      "tag_id":93
    },{
      "function":"__lcl",
      "vtp_waitForTags":false,
      "vtp_checkValidation":false,
      "vtp_waitForTagsTimeout":"2000",
      "vtp_uniqueTriggerId":"12400358_14",
      "tag_id":94
    },{
      "function":"__cl",
      "tag_id":95
    },{
      "function":"__lcl",
      "vtp_waitForTags":false,
      "vtp_checkValidation":false,
      "vtp_waitForTagsTimeout":"2000",
      "vtp_uniqueTriggerId":"12400358_17",
      "tag_id":96
    },{
      "function":"__lcl",
      "vtp_waitForTags":false,
      "vtp_checkValidation":false,
      "vtp_waitForTagsTimeout":"2000",
      "vtp_uniqueTriggerId":"12400358_18",
      "tag_id":97
    },{
      "function":"__cl",
      "tag_id":98
    },{
      "function":"__cl",
      "tag_id":99
    },{
      "function":"__cl",
      "tag_id":100
    },{
      "function":"__cl",
      "tag_id":101
    },{
      "function":"__cl",
      "tag_id":102
    },{
      "function":"__cl",
      "tag_id":103
    },{
      "function":"__ytl",
      "vtp_progressThresholdsPercent":"10,20,30,40,50,60,70,80,90",
      "vtp_captureComplete":true,
      "vtp_captureStart":true,
      "vtp_fixMissingApi":true,
      "vtp_triggerStartOption":"WINDOW_LOAD",
      "vtp_radioButtonGroup1":"PERCENTAGE",
      "vtp_capturePause":true,
      "vtp_captureProgress":true,
      "vtp_uniqueTriggerId":"12400358_25",
      "vtp_enableTriggerStartOption":true,
      "tag_id":104
    },{
      "function":"__lcl",
      "vtp_waitForTags":false,
      "vtp_checkValidation":false,
      "vtp_waitForTagsTimeout":"2000",
      "vtp_uniqueTriggerId":"12400358_26",
      "tag_id":105
    },{
      "function":"__lcl",
      "vtp_waitForTags":false,
      "vtp_checkValidation":false,
      "vtp_waitForTagsTimeout":"2000",
      "vtp_uniqueTriggerId":"12400358_34",
      "tag_id":106
    },{
      "function":"__lcl",
      "vtp_waitForTags":false,
      "vtp_checkValidation":false,
      "vtp_waitForTagsTimeout":"2000",
      "vtp_uniqueTriggerId":"12400358_60",
      "tag_id":107
    },{
      "function":"__cl",
      "tag_id":108
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\" id=\"gtm-wistia-tracking\"\u003E(function(f,c,g){function p(a){var e=g._track.percentages,b={Play:\"play\",Pause:\"pause\",\"Watch to End\":\"end\"},d={};k([\"Play\",\"Watch to End\"],function(d){g.events[d]\u0026\u0026a.bind(b[d],function(){n(d,a)})});g.events.Pause\u0026\u0026a.bind(\"pause\",function(){1!==a.percentWatched()\u0026\u0026n(\"Pause\",a)});e\u0026\u0026a.bind(\"secondchange\",function(b){b=a.percentWatched();for(var c in e)b\u003E=e[c]\u0026\u0026!d[c]\u0026\u0026(d[c]=!0,n(c,a))})}function q(a){a=r({},{events:{Play:!0,Pause:!0,\"Watch to End\":!0},percentages:{each:[],every:[]}},a);k([\"each\",\"every\"],\nfunction(d){var b=a.percentages[d];var c=b;c=Array.isArray_?Array.isArray_(c):\"[object Array]\"===Object.prototype.toString.call(c);c||(b=[b]);b\u0026\u0026(a.percentages[d]=t(b,Number))});var c=[].concat(a.percentages.each);a.percentages.every\u0026\u0026k(a.percentages.every,function(a){var b=100\/a,d=[],e;for(e=1;e\u003Cb;e++)d.push(a*e);c=c.concat(u(d,function(a){return 0\u003Ca\u0026\u0026100\u003Ea}))});var b=v(c,function(a,b){a[b+\"%\"]=b\/100;return a},{});a._track={percentages:b};return a}function w(a){a=a||{};var e=a.name||\"dataLayer\",\nb=a.name||c.GoogleAnalyticsObject||\"ga\",d=\"_gaq\",h={gtm:function(a,b){f.push({event:\"wistiaTrack\",attributes:{videoAction:a,videoName:b.name()}})},cl:function(a,b){c[d].push([\"_trackEvent\",\"Videos\",a,b.name()])},ua:function(a,d){c[b](\"send\",\"event\",\"Videos\",a,d.name())}};switch(a.type){case \"gtm\":var f=c[e]=c[e]||[];break;case \"ua\":c[b]=c[b]||function(){(c[b].q=c[b].q||[]).push(arguments)};c[b].l=+new Date;break;case \"cl\":c[d]=c[d]||[];break;default:l(c[e])?b\u0026\u0026!l(c[b])?a.type=\"ua\":l(c[d])||l(c[d].push)||\n(a.type=\"cl\"):(a.type=\"gtm\",f=c[e]=c[e]||[])}return h[a.type]}function r(){var a=[].slice.call(arguments),c=a.shift(),b,d;for(d=0;d\u003Ca.length;d++){var h=a[d];for(b in h)c[b]=h[b]}return c}function k(a,e){if(Array.prototype.forEach_)return a.forEach.call(a,e);var b;for(b=0;b\u003Ca.length;b++)e.call(c,a[b],b,a)}function t(a,e){if(Array.prototype.map_)return a.map.call(a,e);var b=[];k(a,function(a,h,f){b.push(e.call(c,a,h,f))});return b}function u(a,e){if(Array.prototype.filter)return a.filter.call(a,e);\nvar b=[];k(a,function(a,f,g){e.call(c,a,f,g)\u0026\u0026b.push(a)});return b}function v(a,e,b){if(Array.prototype.reduce)return a.reduce.call(a,e,b);var d;for(d=0;d\u003Ca.length;d++){var f=a[d];b=e.call(c,b,f,a,d)}return b}function l(a){return\"undefined\"===typeof a}g=q(g);var m=c._wq=c._wq||[],n=w(g.syntax);m.push({id:\"_all\",onReady:p});l(c.Wistia)\u0026\u0026(m=f.getElementsByTagName(\"script\")[0],f=f.createElement(\"script\"),f.src=\"\/\/fast.wistia.net\/assets\/external\/E-v1.js\",f.async=!0,m.parentNode.insertBefore(f,m))})(document,\nwindow,{events:{Play:!0,Pause:!0,\"Watch to End\":!0},percentages:{every:25,each:[10,90]}});\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":50
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003E(function(a,d,c,b){a=\"\/\/tags.tiqcdn.com\/utag\/arizonastateuniversity\/mainasucanvas\/prod\/utag.js\";d=document;c=\"script\";b=d.createElement(c);b.src=a;b.type=\"text\/java\"+c;b.async=!0;a=d.getElementsByTagName(c)[0];a.parentNode.insertBefore(b,a)})();\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":76
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003E(function(){var b=document.querySelectorAll('a[href*\\x3d\"asu.edu\"]'),c=\"?tiq\\x3dt\\x26c\\x3d",["escape",["macro",1],7],"\";b.forEach(function(a){var d=a.getAttribute(\"href\");a.setAttribute(\"href\",d+c)})})();\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":78
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003E(function(){var b=document.querySelectorAll('a[href*\\x3d\"asu.edu\"]'),c=\"\\x26tiq\\x3dt\\x26c\\x3d",["escape",["macro",1],7],"\";b.forEach(function(a){var d=a.getAttribute(\"href\");a.setAttribute(\"href\",d+c)})})();\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":82
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003Evar cookieName=\"tiq\",cookieValue=\"t\",cookieDomain=\"asu.edu\",cookiePath=\"\/\",expirationTime=2628E3;expirationTime*=1E3;var date=new Date,dateTimeNow=date.getTime();date.setTime(dateTimeNow+expirationTime);expirationTime=date.toUTCString();document.cookie=cookieName+\"\\x3d\"+cookieValue+\"; expires\\x3d\"+expirationTime+\"; path\\x3d\"+cookiePath+\"; domain\\x3d\"+cookieDomain+\";\";\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":85
    }],
  "predicates":[{
      "function":"_eq",
      "arg0":["macro",0],
      "arg1":"gtm.js"
    },{
      "function":"_re",
      "arg0":["macro",10],
      "arg1":"global_nav_",
      "ignore_case":true
    },{
      "function":"_eq",
      "arg0":["macro",0],
      "arg1":"gtm.linkClick"
    },{
      "function":"_re",
      "arg0":["macro",11],
      "arg1":"(^$|((^|,)12400358_11($|,)))"
    },{
      "function":"_re",
      "arg0":["macro",12],
      "arg1":"settings|files|notifications|logout",
      "ignore_case":true
    },{
      "function":"_cn",
      "arg0":["macro",12],
      "arg1":"Profiles"
    },{
      "function":"_re",
      "arg0":["macro",12],
      "arg1":"skip to content",
      "ignore_case":true
    },{
      "function":"_eq",
      "arg0":["macro",0],
      "arg1":"gtm.click"
    },{
      "function":"_re",
      "arg0":["macro",13],
      "arg1":"\/courses",
      "ignore_case":true
    },{
      "function":"_re",
      "arg0":["macro",14],
      "arg1":"asu live chat|tutoring|ask your instructor a question|asu help|digital portfolio help|search the canvas guides",
      "ignore_case":true
    },{
      "function":"_re",
      "arg0":["macro",11],
      "arg1":"(^$|((^|,)12400358_14($|,)))"
    },{
      "function":"_cn",
      "arg0":["macro",15],
      "arg1":"DashboardCard"
    },{
      "function":"_cn",
      "arg0":["macro",12],
      "arg1":"Module"
    },{
      "function":"_cn",
      "arg0":["macro",16],
      "arg1":"\/syllabus"
    },{
      "function":"_re",
      "arg0":["macro",11],
      "arg1":"(^$|((^|,)12400358_17($|,)))"
    },{
      "function":"_re",
      "arg0":["macro",11],
      "arg1":"(^$|((^|,)12400358_18($|,)))"
    },{
      "function":"_cn",
      "arg0":["macro",15],
      "arg1":"ui-button"
    },{
      "function":"_re",
      "arg0":["macro",14],
      "arg1":"publish|unpublished",
      "ignore_case":true
    },{
      "function":"_eq",
      "arg0":["macro",10],
      "arg1":"discussion_attachment_uploaded_data"
    },{
      "function":"_re",
      "arg0":["macro",17],
      "arg1":"discussion",
      "ignore_case":true
    },{
      "function":"_eq",
      "arg0":["macro",15],
      "arg1":"bgKsu_ccod"
    },{
      "function":"_cn",
      "arg0":["macro",17],
      "arg1":"discussion"
    },{
      "function":"_cn",
      "arg0":["macro",15],
      "arg1":"eZsEe"
    },{
      "function":"_re",
      "arg0":["macro",15],
      "arg1":"btn cancel_button|btn btn-primary|btn btn-default save_and_publish",
      "ignore_case":true
    },{
      "function":"_re",
      "arg0":["macro",14],
      "arg1":"save|cancel|publish",
      "ignore_case":true
    },{
      "function":"_cn",
      "arg0":["macro",15],
      "arg1":"btn btn-primary new-quiz-link"
    },{
      "function":"_eq",
      "arg0":["macro",10],
      "arg1":"take_quiz_link"
    },{
      "function":"_re",
      "arg0":["macro",11],
      "arg1":"(^$|((^|,)12400358_26($|,)))"
    },{
      "function":"_cn",
      "arg0":["macro",18],
      "arg1":"asu.instructure.com"
    },{
      "function":"_re",
      "arg0":["macro",11],
      "arg1":"(^$|((^|,)12400358_34($|,)))"
    },{
      "function":"_cn",
      "arg0":["macro",19],
      "arg1":"Attempt History"
    },{
      "function":"_eq",
      "arg0":["macro",20],
      "arg1":"null"
    },{
      "function":"_eq",
      "arg0":["macro",0],
      "arg1":"gtm.load"
    },{
      "function":"_eq",
      "arg0":["macro",0],
      "arg1":"wistiaTrack"
    },{
      "function":"_re",
      "arg0":["macro",11],
      "arg1":"(^$|((^|,)12400358_60($|,)))"
    },{
      "function":"_eq",
      "arg0":["macro",25],
      "arg1":"undefined"
    },{
      "function":"_re",
      "arg0":["macro",12],
      "arg1":"reply",
      "ignore_case":true
    },{
      "function":"_re",
      "arg0":["macro",3],
      "arg1":"online",
      "ignore_case":true
    },{
      "function":"_cn",
      "arg0":["macro",18],
      "arg1":"?"
    },{
      "function":"_cn",
      "arg0":["macro",16],
      "arg1":"asu.instructure.com"
    },{
      "function":"_cn",
      "arg0":["macro",16],
      "arg1":"canvas.asu.edu"
    }],
  "rules":[
    [["if",0],["add",0,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,37,38,39,40]],
    [["if",1,2,3],["add",1]],
    [["if",4,7],["unless",5,6],["add",2]],
    [["if",7,8],["add",3]],
    [["if",2,9,10],["add",4]],
    [["if",7,11],["add",5]],
    [["if",2,12,13,14],["add",6]],
    [["if",2,13,15],["unless",12],["add",7]],
    [["if",7,16,17],["add",8]],
    [["if",7,18,19],["add",9]],
    [["if",7,20,21],["add",10]],
    [["if",7,21,22],["add",11]],
    [["if",7,23,24],["add",12]],
    [["if",7,25],["add",13]],
    [["if",2,26,27],["add",14]],
    [["if",2,29],["unless",28],["add",15]],
    [["if",30,31,32],["add",16]],
    [["if",33],["add",17]],
    [["if",2,28,34],["add",18]],
    [["if",7,36],["unless",35],["add",19]],
    [["if",32],["add",36,41]],
    [["if",0,37],["add",42]],
    [["if",32,37,39],["unless",38],["add",43]],
    [["if",32,37,38,39],["add",44]],
    [["if",32,37,40],["add",45]]]
},
"runtime":[]




};
/*

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
var aa,ba="function"==typeof Object.create?Object.create:function(a){var b=function(){};b.prototype=a;return new b},da;if("function"==typeof Object.setPrototypeOf)da=Object.setPrototypeOf;else{var ea;a:{var fa={Wf:!0},ha={};try{ha.__proto__=fa;ea=ha.Wf;break a}catch(a){}ea=!1}da=ea?function(a,b){a.__proto__=b;if(a.__proto__!==b)throw new TypeError(a+" is not extensible");return a}:null}
var ja=da,la=function(a,b){a.prototype=ba(b.prototype);a.prototype.constructor=a;if(ja)ja(a,b);else for(var c in b)if("prototype"!=c)if(Object.defineProperties){var d=Object.getOwnPropertyDescriptor(b,c);d&&Object.defineProperty(a,c,d)}else a[c]=b[c];a.Ch=b.prototype},na=this||self,pa=/^[\w+/_-]+[=]{0,2}$/,qa=null,ra=function(a,b){function c(){}c.prototype=b.prototype;a.Ch=b.prototype;a.prototype=new c;a.prototype.constructor=a;a.Th=function(d,e,f){for(var h=Array(arguments.length-2),k=2;k<arguments.length;k++)h[k-
2]=arguments[k];return b.prototype[e].apply(d,h)}},sa=function(a){return a};var ta=function(){},ua=function(a){return"function"==typeof a},g=function(a){return"string"==typeof a},va=function(a){return"number"==typeof a&&!isNaN(a)},wa=function(a){return"[object Array]"==Object.prototype.toString.call(Object(a))},xa=function(a,b){if(Array.prototype.indexOf){var c=a.indexOf(b);return"number"==typeof c?c:-1}for(var d=0;d<a.length;d++)if(a[d]===b)return d;return-1},ya=function(a,b){if(a&&wa(a))for(var c=0;c<a.length;c++)if(a[c]&&b(a[c]))return a[c]},za=function(a,b){if(!va(a)||
!va(b)||a>b)a=0,b=2147483647;return Math.floor(Math.random()*(b-a+1)+a)},Ba=function(a,b){for(var c=new Aa,d=0;d<a.length;d++)c.set(a[d],!0);for(var e=0;e<b.length;e++)if(c.get(b[e]))return!0;return!1},Ca=function(a,b){for(var c in a)Object.prototype.hasOwnProperty.call(a,c)&&b(c,a[c])},Da=function(a){return Math.round(Number(a))||0},Ea=function(a){return"false"==String(a).toLowerCase()?!1:!!a},Fa=function(a){var b=[];if(wa(a))for(var c=0;c<a.length;c++)b.push(String(a[c]));return b},Ga=function(a){return a?
a.replace(/^\s+|\s+$/g,""):""},Ha=function(){return(new Date).getTime()},Aa=function(){this.prefix="gtm.";this.values={}};Aa.prototype.set=function(a,b){this.values[this.prefix+a]=b};Aa.prototype.get=function(a){return this.values[this.prefix+a]};
var Ia=function(a,b,c){return a&&a.hasOwnProperty(b)?a[b]:c},Ja=function(a){var b=!1;return function(){if(!b)try{a()}catch(c){}b=!0}},Ka=function(a,b){for(var c in b)b.hasOwnProperty(c)&&(a[c]=b[c])},La=function(a){for(var b in a)if(a.hasOwnProperty(b))return!0;return!1},Ma=function(a,b){for(var c=[],d=0;d<a.length;d++)c.push(a[d]),c.push.apply(c,b[a[d]]||[]);return c},Na=function(a,b){for(var c={},d=c,e=a.split("."),f=0;f<e.length-1;f++)d=d[e[f]]={};d[e[e.length-1]]=b;return c},Pa=function(a){var b=
[];Ca(a,function(c,d){10>c.length&&d&&b.push(c)});return b.join(",")};/*
 jQuery v1.9.1 (c) 2005, 2012 jQuery Foundation, Inc. jquery.org/license. */
var Qa=/\[object (Boolean|Number|String|Function|Array|Date|RegExp)\]/,Sa=function(a){if(null==a)return String(a);var b=Qa.exec(Object.prototype.toString.call(Object(a)));return b?b[1].toLowerCase():"object"},Ta=function(a,b){return Object.prototype.hasOwnProperty.call(Object(a),b)},Ua=function(a){if(!a||"object"!=Sa(a)||a.nodeType||a==a.window)return!1;try{if(a.constructor&&!Ta(a,"constructor")&&!Ta(a.constructor.prototype,"isPrototypeOf"))return!1}catch(c){return!1}for(var b in a);return void 0===
b||Ta(a,b)},n=function(a,b){var c=b||("array"==Sa(a)?[]:{}),d;for(d in a)if(Ta(a,d)){var e=a[d];"array"==Sa(e)?("array"!=Sa(c[d])&&(c[d]=[]),c[d]=n(e,c[d])):Ua(e)?(Ua(c[d])||(c[d]={}),c[d]=n(e,c[d])):c[d]=e}return c};var Va=function(a){if(void 0==a||wa(a)||Ua(a))return!0;switch(typeof a){case "boolean":case "number":case "string":case "function":return!0}return!1};
var Wa=[],Xa={"\x00":"&#0;",'"':"&quot;","&":"&amp;","'":"&#39;","<":"&lt;",">":"&gt;","\t":"&#9;","\n":"&#10;","\x0B":"&#11;","\f":"&#12;","\r":"&#13;"," ":"&#32;","-":"&#45;","/":"&#47;","=":"&#61;","`":"&#96;","\u0085":"&#133;","\u00a0":"&#160;","\u2028":"&#8232;","\u2029":"&#8233;"},Za=function(a){return Xa[a]},ab=/[\x00\x22\x26\x27\x3c\x3e]/g;var eb=/[\x00\x08-\x0d\x22\x26\x27\/\x3c-\x3e\\\x85\u2028\u2029]/g,fb={"\x00":"\\x00","\b":"\\x08","\t":"\\t","\n":"\\n","\x0B":"\\x0b",
"\f":"\\f","\r":"\\r",'"':"\\x22","&":"\\x26","'":"\\x27","/":"\\/","<":"\\x3c","=":"\\x3d",">":"\\x3e","\\":"\\\\","\u0085":"\\x85","\u2028":"\\u2028","\u2029":"\\u2029",$:"\\x24","(":"\\x28",")":"\\x29","*":"\\x2a","+":"\\x2b",",":"\\x2c","-":"\\x2d",".":"\\x2e",":":"\\x3a","?":"\\x3f","[":"\\x5b","]":"\\x5d","^":"\\x5e","{":"\\x7b","|":"\\x7c","}":"\\x7d"},gb=function(a){return fb[a]};Wa[7]=function(a){return String(a).replace(eb,gb)};
Wa[8]=function(a){if(null==a)return" null ";switch(typeof a){case "boolean":case "number":return" "+a+" ";default:return"'"+String(String(a)).replace(eb,gb)+"'"}};var sb=/[\x00- \x22\x27-\x29\x3c\x3e\\\x7b\x7d\x7f\x85\xa0\u2028\u2029\uff01\uff03\uff04\uff06-\uff0c\uff0f\uff1a\uff1b\uff1d\uff1f\uff20\uff3b\uff3d]/g,tb={"\x00":"%00","\u0001":"%01","\u0002":"%02","\u0003":"%03","\u0004":"%04","\u0005":"%05","\u0006":"%06","\u0007":"%07","\b":"%08","\t":"%09","\n":"%0A","\x0B":"%0B","\f":"%0C","\r":"%0D","\u000e":"%0E","\u000f":"%0F","\u0010":"%10",
"\u0011":"%11","\u0012":"%12","\u0013":"%13","\u0014":"%14","\u0015":"%15","\u0016":"%16","\u0017":"%17","\u0018":"%18","\u0019":"%19","\u001a":"%1A","\u001b":"%1B","\u001c":"%1C","\u001d":"%1D","\u001e":"%1E","\u001f":"%1F"," ":"%20",'"':"%22","'":"%27","(":"%28",")":"%29","<":"%3C",">":"%3E","\\":"%5C","{":"%7B","}":"%7D","\u007f":"%7F","\u0085":"%C2%85","\u00a0":"%C2%A0","\u2028":"%E2%80%A8","\u2029":"%E2%80%A9","\uff01":"%EF%BC%81","\uff03":"%EF%BC%83","\uff04":"%EF%BC%84","\uff06":"%EF%BC%86",
"\uff07":"%EF%BC%87","\uff08":"%EF%BC%88","\uff09":"%EF%BC%89","\uff0a":"%EF%BC%8A","\uff0b":"%EF%BC%8B","\uff0c":"%EF%BC%8C","\uff0f":"%EF%BC%8F","\uff1a":"%EF%BC%9A","\uff1b":"%EF%BC%9B","\uff1d":"%EF%BC%9D","\uff1f":"%EF%BC%9F","\uff20":"%EF%BC%A0","\uff3b":"%EF%BC%BB","\uff3d":"%EF%BC%BD"},ub=function(a){return tb[a]};Wa[16]=function(a){return a};var wb;
var xb=[],yb=[],zb=[],Ab=[],Bb=[],Cb={},Db,Eb,Fb,Hb=function(a,b){var c=a["function"];if(!c)throw Error("Error: No function name given for function call.");var d=Cb[c],e={},f;for(f in a)a.hasOwnProperty(f)&&0===f.indexOf("vtp_")&&(d&&b&&b.Be&&b.Be(a[f]),e[void 0!==d?f:f.substr(4)]=a[f]);return void 0!==d?d(e):wb(c,e,b)},Jb=function(a,b,c){c=c||[];var d={},e;for(e in a)a.hasOwnProperty(e)&&(d[e]=Ib(a[e],b,c));return d},Kb=function(a){var b=a["function"];if(!b)throw"Error: No function name given for function call.";
var c=Cb[b];return c?c.priorityOverride||0:0},Ib=function(a,b,c){if(wa(a)){var d;switch(a[0]){case "function_id":return a[1];case "list":d=[];for(var e=1;e<a.length;e++)d.push(Ib(a[e],b,c));return d;case "macro":var f=a[1];if(c[f])return;var h=xb[f];if(!h||b.hd(h))return;c[f]=!0;try{var k=Jb(h,b,c);k.vtp_gtmEventId=b.id;d=Hb(k,b);Fb&&(d=Fb.ug(d,k))}catch(y){b.Ne&&b.Ne(y,Number(f)),d=!1}c[f]=!1;return d;case "map":d={};for(var l=1;l<a.length;l+=2)d[Ib(a[l],b,c)]=Ib(a[l+1],b,c);return d;case "template":d=
[];for(var m=!1,p=1;p<a.length;p++){var r=Ib(a[p],b,c);Eb&&(m=m||r===Eb.Ub);d.push(r)}return Eb&&m?Eb.xg(d):d.join("");case "escape":d=Ib(a[1],b,c);if(Eb&&wa(a[1])&&"macro"===a[1][0]&&Eb.Vg(a))return Eb.nh(d);d=String(d);for(var t=2;t<a.length;t++)Wa[a[t]]&&(d=Wa[a[t]](d));return d;case "tag":var q=a[1];if(!Ab[q])throw Error("Unable to resolve tag reference "+q+".");return d={Ge:a[2],index:q};case "zb":var v={arg0:a[2],arg1:a[3],ignore_case:a[5]};v["function"]=a[1];var u=Lb(v,b,c),w=!!a[4];return w||
2!==u?w!==(1===u):null;default:throw Error("Attempting to expand unknown Value type: "+a[0]+".");}}return a},Lb=function(a,b,c){try{return Db(Jb(a,b,c))}catch(d){JSON.stringify(a)}return 2};var Mb=function(){var a=function(b){return{toString:function(){return b}}};return{$e:a("consent"),Hd:a("convert_case_to"),Id:a("convert_false_to"),Jd:a("convert_null_to"),Kd:a("convert_true_to"),Ld:a("convert_undefined_to"),Lh:a("debug_mode_metadata"),Ea:a("function"),Nf:a("instance_name"),Pf:a("live_only"),Qf:a("malware_disabled"),Rf:a("metadata"),Oh:a("original_vendor_template_id"),Tf:a("once_per_event"),qe:a("once_per_load"),ve:a("setup_tags"),we:a("tag_id"),xe:a("teardown_tags")}}();var Nb=null,Rb=function(a){function b(r){for(var t=0;t<r.length;t++)d[r[t]]=!0}var c=[],d=[];Nb=Ob(a);for(var e=0;e<yb.length;e++){var f=yb[e],h=Pb(f);if(h){for(var k=f.add||[],l=0;l<k.length;l++)c[k[l]]=!0;b(f.block||[])}else null===h&&b(f.block||[])}for(var m=[],p=0;p<Ab.length;p++)c[p]&&!d[p]&&(m[p]=!0);return m},Pb=function(a){for(var b=a["if"]||[],c=0;c<b.length;c++){var d=Nb(b[c]);if(0===d)return!1;if(2===d)return null}for(var e=a.unless||[],f=0;f<e.length;f++){var h=Nb(e[f]);if(2===h)return null;
if(1===h)return!1}return!0},Ob=function(a){var b=[];return function(c){void 0===b[c]&&(b[c]=Lb(zb[c],a));return b[c]}};var Sb={ug:function(a,b){b[Mb.Hd]&&"string"===typeof a&&(a=1==b[Mb.Hd]?a.toLowerCase():a.toUpperCase());b.hasOwnProperty(Mb.Jd)&&null===a&&(a=b[Mb.Jd]);b.hasOwnProperty(Mb.Ld)&&void 0===a&&(a=b[Mb.Ld]);b.hasOwnProperty(Mb.Kd)&&!0===a&&(a=b[Mb.Kd]);b.hasOwnProperty(Mb.Id)&&!1===a&&(a=b[Mb.Id]);return a}};/*
 Copyright (c) 2014 Derek Brans, MIT license https://github.com/krux/postscribe/blob/master/LICENSE. Portions derived from simplehtmlparser, which is licensed under the Apache License, Version 2.0 */
var C={qb:"_ee",Tc:"_syn",Rh:"_uei",Ph:"_pci",Fc:"event_callback",Qb:"event_timeout",ia:"gtag.config"};C.ba="allow_ad_personalization_signals";C.Mc="restricted_data_processing";C.ab="allow_google_signals";C.ca="cookie_expires";C.Pb="cookie_update";C.mb="session_duration";C.la="user_properties";C.Da="transport_url";C.M="ads_data_redaction";C.o="ad_storage";
C.J="analytics_storage";C.af="region";C.bf="wait_for_update";C.ie=[C.ba,C.ab,C.Pb];C.je=[C.ca,C.Qb,C.mb];var nc={},oc=function(a,b){nc[a]=nc[a]||[];nc[a][b]=!0},pc=function(a){for(var b=[],c=nc[a]||[],d=0;d<c.length;d++)c[d]&&(b[Math.floor(d/6)]^=1<<d%6);for(var e=0;e<b.length;e++)b[e]="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_".charAt(b[e]||0);return b.join("")};var E=function(a){oc("GTM",a)};function qc(a){if(Error.captureStackTrace)Error.captureStackTrace(this,qc);else{var b=Error().stack;b&&(this.stack=b)}a&&(this.message=String(a))}ra(qc,Error);qc.prototype.name="CustomError";var rc=function(a,b){for(var c=a.split("%s"),d="",e=c.length-1,f=0;f<e;f++)d+=c[f]+(f<b.length?b[f]:"%s");qc.call(this,d+c[e])};ra(rc,qc);rc.prototype.name="AssertionError";var sc=function(a,b){throw new rc("Failure"+(a?": "+a:""),Array.prototype.slice.call(arguments,1));};var tc=function(a,b){var c=function(){};c.prototype=a.prototype;var d=new c;a.apply(d,Array.prototype.slice.call(arguments,1));return d},uc=function(a){var b=a;return function(){if(b){var c=b;b=null;c()}}};var vc;var wc=/^(?:(?:https?|mailto|ftp):|[^:/?#]*(?:[/?#]|$))/i;var xc;a:{var yc=na.navigator;if(yc){var zc=yc.userAgent;if(zc){xc=zc;break a}}xc=""}var Ac=function(a){return-1!=xc.indexOf(a)};var Cc=function(a,b,c){this.h=c===Bc?a:""};Cc.prototype.toString=function(){return"SafeHtml{"+this.h+"}"};var Dc=function(a){if(a instanceof Cc&&a.constructor===Cc)return a.h;var b=typeof a;sc("expected object of type SafeHtml, got '"+a+"' of type "+("object"!=b?b:a?Array.isArray(a)?"array":b:"null"));return"type_error:SafeHtml"},Bc={},Ec=new Cc(na.trustedTypes&&na.trustedTypes.emptyHTML||"",0,Bc);var Fc={MATH:!0,SCRIPT:!0,STYLE:!0,SVG:!0,TEMPLATE:!0},Ic=function(a){var b=!1,c;return function(){b||(c=a(),b=!0);return c}}(function(){if("undefined"===typeof document)return!1;var a=document.createElement("div"),b=document.createElement("div");b.appendChild(document.createElement("div"));a.appendChild(b);if(!a.firstChild)return!1;var c=a.firstChild.firstChild;a.innerHTML=Dc(Ec);return!c.parentElement}),Jc=function(a,b){if(a.tagName&&Fc[a.tagName.toUpperCase()])throw Error("goog.dom.safe.setInnerHtml cannot be used to set content of "+
a.tagName+".");if(Ic())for(;a.lastChild;)a.removeChild(a.lastChild);a.innerHTML=Dc(b)};var Kc=function(a){var b;if(void 0===vc){var c=null,d=na.trustedTypes;if(d&&d.createPolicy){try{c=d.createPolicy("goog#html",{createHTML:sa,createScript:sa,createScriptURL:sa})}catch(f){na.console&&na.console.error(f.message)}vc=c}else vc=c}var e=(b=vc)?b.createHTML(a):a;return new Cc(e,null,Bc)};var F=window,H=document,Lc=navigator,Mc=H.currentScript&&H.currentScript.src,Nc=function(a,b){var c=F[a];F[a]=void 0===c?b:c;return F[a]},Oc=function(a,b){b&&(a.addEventListener?a.onload=b:a.onreadystatechange=function(){a.readyState in{loaded:1,complete:1}&&(a.onreadystatechange=null,b())})},Pc=function(a,b,c){var d=H.createElement("script");d.type="text/javascript";d.async=!0;d.src=a;Oc(d,b);c&&(d.onerror=c);var e;if(null===qa)b:{var f=na.document,h=f.querySelector&&f.querySelector("script[nonce]");
if(h){var k=h.nonce||h.getAttribute("nonce");if(k&&pa.test(k)){qa=k;break b}}qa=""}e=qa;e&&d.setAttribute("nonce",e);var l=H.getElementsByTagName("script")[0]||H.body||H.head;l.parentNode.insertBefore(d,l);return d},Qc=function(){if(Mc){var a=Mc.toLowerCase();if(0===a.indexOf("https://"))return 2;if(0===a.indexOf("http://"))return 3}return 1},Rc=function(a,b){var c=H.createElement("iframe");c.height="0";c.width="0";c.style.display="none";c.style.visibility="hidden";var d=H.body&&H.body.lastChild||
H.body||H.head;d.parentNode.insertBefore(c,d);Oc(c,b);void 0!==a&&(c.src=a);return c},Sc=function(a,b,c){var d=new Image(1,1);d.onload=function(){d.onload=null;b&&b()};d.onerror=function(){d.onerror=null;c&&c()};d.src=a;return d},Tc=function(a,b,c,d){a.addEventListener?a.addEventListener(b,c,!!d):a.attachEvent&&a.attachEvent("on"+b,c)},Uc=function(a,b,c){a.removeEventListener?a.removeEventListener(b,c,!1):a.detachEvent&&a.detachEvent("on"+b,c)},J=function(a){F.setTimeout(a,0)},Vc=function(a,b){return a&&
b&&a.attributes&&a.attributes[b]?a.attributes[b].value:null},Wc=function(a){var b=a.innerText||a.textContent||"";b&&" "!=b&&(b=b.replace(/^[\s\xa0]+|[\s\xa0]+$/g,""));b&&(b=b.replace(/(\xa0+|\s{2,}|\n|\r\t)/g," "));return b},Xc=function(a){var b=H.createElement("div");Jc(b,Kc("A<div>"+a+"</div>"));b=b.lastChild;for(var c=[];b.firstChild;)c.push(b.removeChild(b.firstChild));return c},Yc=function(a,b,c){c=c||100;for(var d={},e=0;e<b.length;e++)d[b[e]]=!0;for(var f=a,h=0;f&&h<=c;h++){if(d[String(f.tagName).toLowerCase()])return f;
f=f.parentElement}return null},Zc=function(a){Lc.sendBeacon&&Lc.sendBeacon(a)||Sc(a)},$c=function(a,b){var c=a[b];c&&"string"===typeof c.animVal&&(c=c.animVal);return c};var ad={},bd=function(a){return void 0==ad[a]?!1:ad[a]};var cd=[];function dd(){var a=Nc("google_tag_data",{});a.ics||(a.ics={entries:{},set:ed,update:fd,addListener:gd,notifyListeners:hd,active:!1});return a.ics}
function ed(a,b,c,d,e,f){var h=dd();h.active=!0;if(void 0!=b){var k=h.entries,l=k[a]||{},m=l.region,p=c&&g(c)?c.toUpperCase():void 0;d=d.toUpperCase();e=e.toUpperCase();if(p===e||(p===d?m!==e:!p&&!m)){var r=!!(f&&0<f&&void 0===l.update),t={region:p,initial:"granted"===b,update:l.update,quiet:r};k[a]=t;r&&F.setTimeout(function(){k[a]===t&&t.quiet&&(t.quiet=!1,id(a),hd(),oc("TAGGING",2))},f)}}}
function fd(a,b){var c=dd();c.active=!0;if(void 0!=b){var d=jd(a),e=c.entries,f=e[a]=e[a]||{};f.update="granted"===b;var h=jd(a);f.quiet?(f.quiet=!1,id(a)):h!==d&&id(a)}}function gd(a,b){cd.push({De:a,Gg:b})}function id(a){for(var b=0;b<cd.length;++b){var c=cd[b];wa(c.De)&&-1!==c.De.indexOf(a)&&(c.Re=!0)}}function hd(a){for(var b=0;b<cd.length;++b){var c=cd[b];if(c.Re){c.Re=!1;try{c.Gg({Ce:a})}catch(d){}}}}
var jd=function(a){var b=dd().entries[a]||{};return void 0!==b.update?b.update:void 0!==b.initial?b.initial:void 0},kd=function(a){return!(dd().entries[a]||{}).quiet},ld=function(){return bd("gtag_cs_api")?dd().active:!1},md=function(a,b){dd().addListener(a,b)},nd=function(a,b){function c(){for(var e=0;e<b.length;e++)if(!kd(b[e]))return!0;return!1}if(c()){var d=!1;md(b,function(e){d||c()||(d=!0,a(e))})}else a({})},od=function(a,b){if(!1===jd(b)){var c=!1;md([b],function(d){!c&&jd(b)&&(a(d),c=!0)})}};var pd=[C.o,C.J],qd=function(a){var b=a[C.af];b&&E(40);var c=a[C.bf];c&&E(41);for(var d=wa(b)?b:[b],e=0;e<d.length;++e)for(var f=0;f<pd.length;f++){var h=pd[f],k=a[pd[f]],l=d[e];dd().set(h,k,l,"US","US-AZ",c)}},rd=function(a,b){for(var c=0;c<pd.length;c++){var d=pd[c],e=a[pd[c]];dd().update(d,e)}dd().notifyListeners(b)},sd=function(a){var b=jd(a);return void 0!=b?b:!0},td=function(){for(var a=[],b=0;b<pd.length;b++){var c=jd(pd[b]);a[b]=!0===c?"1":!1===c?"0":"-"}return"G1"+
a.join("")},ud=function(a,b){nd(a,b)};var wd=function(a){return vd?H.querySelectorAll(a):null},xd=function(a,b){if(!vd)return null;if(Element.prototype.closest)try{return a.closest(b)}catch(e){return null}var c=Element.prototype.matches||Element.prototype.webkitMatchesSelector||Element.prototype.mozMatchesSelector||Element.prototype.msMatchesSelector||Element.prototype.oMatchesSelector,d=a;if(!H.documentElement.contains(d))return null;do{try{if(c.call(d,b))return d}catch(e){break}d=d.parentElement||d.parentNode}while(null!==d&&1===d.nodeType);
return null},yd=!1;if(H.querySelectorAll)try{var zd=H.querySelectorAll(":root");zd&&1==zd.length&&zd[0]==H.documentElement&&(yd=!0)}catch(a){}var vd=yd;var Od={},M=null,Pd=Math.random();Od.B="GTM-PQVJ7SL";Od.Yb="9n1";Od.Nh="";var Qd={__cl:!0,__ecl:!0,__ehl:!0,__evl:!0,__fal:!0,__fil:!0,__fsl:!0,__hl:!0,__jel:!0,__lcl:!0,__sdl:!0,__tl:!0,__ytl:!0},Rd={__paused:!0,__tg:!0},Sd;for(Sd in Qd)Qd.hasOwnProperty(Sd)&&(Rd[Sd]=!0);var Td="www.googletagmanager.com/gtm.js";
var Ud=Td,Vd=Ea(""),Wd=null,Xd=null,Yd="//www.googletagmanager.com/a?id="+Od.B+"&cv=18",Zd={},$d={},ae=function(){var a=M.sequence||1;M.sequence=a+1;return a};
var be=function(){return"&tc="+Ab.filter(function(a){return a}).length},ee=function(){2022<=ce().length&&de()},ge=function(){fe||(fe=F.setTimeout(de,500))},de=function(){fe&&(F.clearTimeout(fe),fe=void 0);void 0===he||ie[he]&&!je&&!ke||(le[he]||me.Xg()||0>=ne--?(E(1),le[he]=!0):(me.uh(),Sc(ce()),ie[he]=!0,oe=pe=qe=ke=je=""))},ce=function(){var a=he;if(void 0===a)return"";var b=pc("GTM"),c=pc("TAGGING");return[re,ie[a]?"":"&es=1",se[a],b?"&u="+b:"",c?"&ut="+c:"",be(),je,ke,qe?qe:"",pe,oe,"&z=0"].join("")},
te=function(){return[Yd,"&v=3&t=t","&pid="+za(),"&rv="+Od.Yb].join("")},ue="0.005000">Math.random(),re=te(),ve=function(){re=te()},ie={},je="",ke="",oe="",pe="",qe="",he=void 0,se={},le={},fe=void 0,me=function(a,b){var c=0,d=0;return{Xg:function(){if(c<a)return!1;Ha()-d>=b&&(c=0);return c>=a},uh:function(){Ha()-d>=b&&(c=0);c++;d=Ha()}}}(2,1E3),ne=1E3,we=function(a,b,c){if(ue&&!le[a]&&b){a!==he&&(de(),he=a);var d,e=String(b[Mb.Ea]||"").replace(/_/g,"");0===e.indexOf("cvt")&&(e="cvt");
d=e;var f=c+d;je=je?je+"."+f:"&tr="+f;var h=b["function"];if(!h)throw Error("Error: No function name given for function call.");var k=(Cb[h]?"1":"2")+d;oe=oe?oe+"."+k:"&ti="+k;ge();ee()}},xe=function(a,b,c){if(ue&&!le[a]){a!==he&&(de(),he=a);var d=c+b;ke=ke?ke+"."+d:"&epr="+d;ge();ee()}},ye=function(a,b,c){};
var ze={},Ae=new Aa,Be={},Ce={},Fe={name:"dataLayer",set:function(a,b){n(Na(a,b),Be);De()},get:function(a){return Ee(a,2)},reset:function(){Ae=new Aa;Be={};De()}},Ee=function(a,b){if(2!=b){var c=Ae.get(a);ue&&c!==Ge(a.split("."))&&E(5);return c}return Ge(a.split("."))},Ge=function(a){for(var b=Be,c=0;c<a.length;c++){if(null===b)return!1;if(void 0===b)break;b=b[a[c]]}return b},He=function(a,b){Ce.hasOwnProperty(a)||(Ae.set(a,b),n(Na(a,b),Be),De())},De=function(a){Ca(Ce,function(b,c){Ae.set(b,c);
n(Na(b,void 0),Be);n(Na(b,c),Be);a&&delete Ce[b]})},Ie=function(a,b,c){ze[a]=ze[a]||{};var d=1!==c?Ge(b.split(".")):Ae.get(b);"array"===Sa(d)||"object"===Sa(d)?ze[a][b]=n(d):ze[a][b]=d},Je=function(a,b){if(ze[a])return ze[a][b]},Ke=function(a,b){ze[a]&&delete ze[a][b]};var Ne={},Oe=function(a,b){if(F._gtmexpgrp&&F._gtmexpgrp.hasOwnProperty(a))return F._gtmexpgrp[a];void 0===Ne[a]&&(Ne[a]=Math.floor(Math.random()*b));return Ne[a]};var Pe=/:[0-9]+$/,Qe=function(a,b,c){for(var d=a.split("&"),e=0;e<d.length;e++){var f=d[e].split("=");if(decodeURIComponent(f[0]).replace(/\+/g," ")===b){var h=f.slice(1).join("=");return c?h:decodeURIComponent(h).replace(/\+/g," ")}}},Te=function(a,b,c,d,e){b&&(b=String(b).toLowerCase());if("protocol"===b||"port"===b)a.protocol=Re(a.protocol)||Re(F.location.protocol);"port"===b?a.port=String(Number(a.hostname?a.port:F.location.port)||("http"==a.protocol?80:"https"==a.protocol?443:"")):"host"===b&&
(a.hostname=(a.hostname||F.location.hostname).replace(Pe,"").toLowerCase());return Se(a,b,c,d,e)},Se=function(a,b,c,d,e){var f,h=Re(a.protocol);b&&(b=String(b).toLowerCase());switch(b){case "url_no_fragment":f=Ue(a);break;case "protocol":f=h;break;case "host":f=a.hostname.replace(Pe,"").toLowerCase();if(c){var k=/^www\d*\./.exec(f);k&&k[0]&&(f=f.substr(k[0].length))}break;case "port":f=String(Number(a.port)||("http"==h?80:"https"==h?443:""));break;case "path":a.pathname||a.hostname||oc("TAGGING",
1);f="/"==a.pathname.substr(0,1)?a.pathname:"/"+a.pathname;var l=f.split("/");0<=xa(d||[],l[l.length-1])&&(l[l.length-1]="");f=l.join("/");break;case "query":f=a.search.replace("?","");e&&(f=Qe(f,e,void 0));break;case "extension":var m=a.pathname.split(".");f=1<m.length?m[m.length-1]:"";f=f.split("/")[0];break;case "fragment":f=a.hash.replace("#","");break;default:f=a&&a.href}return f},Re=function(a){return a?a.replace(":","").toLowerCase():""},Ue=function(a){var b="";if(a&&a.href){var c=a.href.indexOf("#");
b=0>c?a.href:a.href.substr(0,c)}return b},Ve=function(a){var b=H.createElement("a");a&&(b.href=a);var c=b.pathname;"/"!==c[0]&&(a||oc("TAGGING",1),c="/"+c);var d=b.hostname.replace(Pe,"");return{href:b.href,protocol:b.protocol,host:b.host,hostname:d,pathname:c,search:b.search,hash:b.hash,port:b.port}},We=function(a){function b(m){var p=m.split("=")[0];return 0>d.indexOf(p)?m:p+"=0"}function c(m){return m.split("&").map(b).filter(function(p){return void 0!=p}).join("&")}var d="gclid dclid gclaw gcldc gclgp gclha gclgf _gl".split(" "),
e=Ve(a),f=a.split(/[?#]/)[0],h=e.search,k=e.hash;"?"===h[0]&&(h=h.substring(1));"#"===k[0]&&(k=k.substring(1));h=c(h);k=c(k);""!==h&&(h="?"+h);""!==k&&(k="#"+k);var l=""+f+h+k;"/"===l[l.length-1]&&(l=l.substring(0,l.length-1));return l};function Xe(a,b,c){for(var d=[],e=b.split(";"),f=0;f<e.length;f++){var h=e[f].split("="),k=h[0].replace(/^\s*|\s*$/g,"");if(k&&k==a){var l=h.slice(1).join("=").replace(/^\s*|\s*$/g,"");l&&c&&(l=decodeURIComponent(l));d.push(l)}}return d};var Ze=function(a,b,c,d){return Ye(d)?Xe(a,String(b||document.cookie),c):[]},bf=function(a,b,c,d,e){if(Ye(e)){var f=$e(a,d,e);if(1===f.length)return f[0].id;if(0!==f.length){f=af(f,function(h){return h.cc},b);if(1===f.length)return f[0].id;f=af(f,function(h){return h.zb},c);return f[0]?f[0].id:void 0}}};function cf(a,b,c,d){var e=document.cookie;document.cookie=a;var f=document.cookie;return e!=f||void 0!=c&&0<=Ze(b,f,!1,d).indexOf(c)}
var gf=function(a,b,c){function d(q,v,u){if(null==u)return delete h[v],q;h[v]=u;return q+"; "+v+"="+u}function e(q,v){if(null==v)return delete h[v],q;h[v]=!0;return q+"; "+v}if(!Ye(c.Ga))return 2;var f;void 0==b?f=a+"=deleted; expires="+(new Date(0)).toUTCString():(c.encode&&(b=encodeURIComponent(b)),b=df(b),f=a+"="+b);var h={};f=d(f,"path",c.path);var k;c.expires instanceof Date?k=c.expires.toUTCString():null!=c.expires&&(k=""+c.expires);f=d(f,"expires",k);f=d(f,"max-age",c.ai);f=d(f,"samesite",
c.fi);c.gi&&(f=e(f,"secure"));var l=c.domain;if("auto"===l){for(var m=ef(),p=0;p<m.length;++p){var r="none"!==m[p]?m[p]:void 0,t=d(f,"domain",r);t=e(t,c.flags);if(!ff(r,c.path)&&cf(t,a,b,c.Ga))return 0}return 1}l&&"none"!==l&&(f=d(f,"domain",l));f=e(f,c.flags);return ff(l,c.path)?1:cf(f,a,b,c.Ga)?0:1},hf=function(a,b,c){null==c.path&&(c.path="/");c.domain||(c.domain="auto");return gf(a,b,c)};
function af(a,b,c){for(var d=[],e=[],f,h=0;h<a.length;h++){var k=a[h],l=b(k);l===c?d.push(k):void 0===f||l<f?(e=[k],f=l):l===f&&e.push(k)}return 0<d.length?d:e}function $e(a,b,c){for(var d=[],e=Ze(a,void 0,void 0,c),f=0;f<e.length;f++){var h=e[f].split("."),k=h.shift();if(!b||-1!==b.indexOf(k)){var l=h.shift();l&&(l=l.split("-"),d.push({id:h.join("."),cc:1*l[0]||1,zb:1*l[1]||1}))}}return d}
var df=function(a){a&&1200<a.length&&(a=a.substring(0,1200));return a},jf=/^(www\.)?google(\.com?)?(\.[a-z]{2})?$/,kf=/(^|\.)doubleclick\.net$/i,ff=function(a,b){return kf.test(document.location.hostname)||"/"===b&&jf.test(a)},ef=function(){var a=[],b=document.location.hostname.split(".");if(4===b.length){var c=b[b.length-1];if(parseInt(c,10).toString()===c)return["none"]}for(var d=b.length-2;0<=d;d--)a.push(b.slice(d).join("."));var e=document.location.hostname;kf.test(e)||jf.test(e)||a.push("none");
return a},Ye=function(a){if(!bd("gtag_cs_api")||!a||!ld())return!0;if(!kd(a))return!1;var b=jd(a);return null==b?!0:!!b};var lf=function(){for(var a=Lc.userAgent+(H.cookie||"")+(H.referrer||""),b=a.length,c=F.history.length;0<c;)a+=c--^b++;var d=1,e,f,h;if(a)for(d=0,f=a.length-1;0<=f;f--)h=a.charCodeAt(f),d=(d<<6&268435455)+h+(h<<14),e=d&266338304,d=0!=e?d^e>>21:d;return[Math.round(2147483647*Math.random())^d&2147483647,Math.round(Ha()/1E3)].join(".")},of=function(a,b,c,d,e){var f=mf(b);return bf(a,f,nf(c),d,e)},pf=function(a,b,c,d){var e=""+mf(c),f=nf(d);1<f&&(e+="-"+f);return[b,e,a].join(".")},mf=function(a){if(!a)return 1;
a=0===a.indexOf(".")?a.substr(1):a;return a.split(".").length},nf=function(a){if(!a||"/"===a)return 1;"/"!==a[0]&&(a="/"+a);"/"!==a[a.length-1]&&(a+="/");return a.split("/").length-1};function qf(a,b,c){var d,e=a.yb;null==e&&(e=7776E3);0!==e&&(d=new Date((b||Ha())+1E3*e));return{path:a.path,domain:a.domain,flags:a.flags,encode:!!c,expires:d}};var rf=["1"],sf={},wf=function(a){var b=tf(a.prefix);sf[b]||uf(b,a.path,a.domain)||(vf(b,lf(),a),uf(b,a.path,a.domain))};function vf(a,b,c){var d=pf(b,"1",c.domain,c.path),e=qf(c);e.Ga="ad_storage";hf(a,d,e)}function uf(a,b,c){var d=of(a,b,c,rf,"ad_storage");d&&(sf[a]=d);return d}function tf(a){return(a||"_gcl")+"_au"};function xf(){for(var a=yf,b={},c=0;c<a.length;++c)b[a[c]]=c;return b}function zf(){var a="ABCDEFGHIJKLMNOPQRSTUVWXYZ";a+=a.toLowerCase()+"0123456789-_";return a+"."}var yf,Af;function Bf(a){yf=yf||zf();Af=Af||xf();for(var b=[],c=0;c<a.length;c+=3){var d=c+1<a.length,e=c+2<a.length,f=a.charCodeAt(c),h=d?a.charCodeAt(c+1):0,k=e?a.charCodeAt(c+2):0,l=f>>2,m=(f&3)<<4|h>>4,p=(h&15)<<2|k>>6,r=k&63;e||(r=64,d||(p=64));b.push(yf[l],yf[m],yf[p],yf[r])}return b.join("")}
function Cf(a){function b(l){for(;d<a.length;){var m=a.charAt(d++),p=Af[m];if(null!=p)return p;if(!/^[\s\xa0]*$/.test(m))throw Error("Unknown base64 encoding at char: "+m);}return l}yf=yf||zf();Af=Af||xf();for(var c="",d=0;;){var e=b(-1),f=b(0),h=b(64),k=b(64);if(64===k&&-1===e)return c;c+=String.fromCharCode(e<<2|f>>4);64!=h&&(c+=String.fromCharCode(f<<4&240|h>>2),64!=k&&(c+=String.fromCharCode(h<<6&192|k)))}};var Df;var Hf=function(){var a=Ef,b=Ff,c=Gf(),d=function(h){a(h.target||h.srcElement||{})},e=function(h){b(h.target||h.srcElement||{})};if(!c.init){Tc(H,"mousedown",d);Tc(H,"keyup",d);Tc(H,"submit",e);var f=HTMLFormElement.prototype.submit;HTMLFormElement.prototype.submit=function(){b(this);f.call(this)};c.init=!0}},If=function(a,b,c,d,e){var f={callback:a,domains:b,fragment:2===c,placement:c,forms:d,sameHost:e};Gf().decorators.push(f)},Jf=function(a,b,c){for(var d=Gf().decorators,e={},f=0;f<d.length;++f){var h=
d[f],k;if(k=!c||h.forms)a:{var l=h.domains,m=a,p=!!h.sameHost;if(l&&(p||m!==H.location.hostname))for(var r=0;r<l.length;r++)if(l[r]instanceof RegExp){if(l[r].test(m)){k=!0;break a}}else if(0<=m.indexOf(l[r])||p&&0<=l[r].indexOf(m)){k=!0;break a}k=!1}if(k){var t=h.placement;void 0==t&&(t=h.fragment?2:1);t===b&&Ka(e,h.callback())}}return e},Gf=function(){var a=Nc("google_tag_data",{}),b=a.gl;b&&b.decorators||(b={decorators:[]},a.gl=b);return b};var Kf=/(.*?)\*(.*?)\*(.*)/,Lf=/^https?:\/\/([^\/]*?)\.?cdn\.ampproject\.org\/?(.*)/,Mf=/^(?:www\.|m\.|amp\.)+/,Nf=/([^?#]+)(\?[^#]*)?(#.*)?/;function Of(a){return new RegExp("(.*?)(^|&)"+a+"=([^&]*)&?(.*)")}
var Qf=function(a){var b=[],c;for(c in a)if(a.hasOwnProperty(c)){var d=a[c];void 0!==d&&d===d&&null!==d&&"[object Object]"!==d.toString()&&(b.push(c),b.push(Bf(String(d))))}var e=b.join("*");return["1",Pf(e),e].join("*")},Pf=function(a,b){var c=[window.navigator.userAgent,(new Date).getTimezoneOffset(),window.navigator.userLanguage||window.navigator.language,Math.floor((new Date).getTime()/60/1E3)-(void 0===b?0:b),a].join("*"),d;if(!(d=Df)){for(var e=Array(256),f=0;256>f;f++){for(var h=f,k=0;8>k;k++)h=
h&1?h>>>1^3988292384:h>>>1;e[f]=h}d=e}Df=d;for(var l=4294967295,m=0;m<c.length;m++)l=l>>>8^Df[(l^c.charCodeAt(m))&255];return((l^-1)>>>0).toString(36)},Sf=function(){return function(a){var b=Ve(F.location.href),c=b.search.replace("?",""),d=Qe(c,"_gl",!0)||"";a.query=Rf(d)||{};var e=Te(b,"fragment").match(Of("_gl"));a.fragment=Rf(e&&e[3]||"")||{}}},Tf=function(a){var b=Sf(),c=Gf();c.data||(c.data={query:{},fragment:{}},b(c.data));var d={},e=c.data;e&&(Ka(d,e.query),a&&Ka(d,e.fragment));return d},Rf=
function(a){var b;b=void 0===b?3:b;try{if(a){var c;a:{for(var d=a,e=0;3>e;++e){var f=Kf.exec(d);if(f){c=f;break a}d=decodeURIComponent(d)}c=void 0}var h=c;if(h&&"1"===h[1]){var k=h[3],l;a:{for(var m=h[2],p=0;p<b;++p)if(m===Pf(k,p)){l=!0;break a}l=!1}if(l){for(var r={},t=k?k.split("*"):[],q=0;q<t.length;q+=2)r[t[q]]=Cf(t[q+1]);return r}}}}catch(v){}};
function Uf(a,b,c,d){function e(p){var r=p,t=Of(a).exec(r),q=r;if(t){var v=t[2],u=t[4];q=t[1];u&&(q=q+v+u)}p=q;var w=p.charAt(p.length-1);p&&"&"!==w&&(p+="&");return p+m}d=void 0===d?!1:d;var f=Nf.exec(c);if(!f)return"";var h=f[1],k=f[2]||"",l=f[3]||"",m=a+"="+b;d?l="#"+e(l.substring(1)):k="?"+e(k.substring(1));return""+h+k+l}
function Vf(a,b){var c="FORM"===(a.tagName||"").toUpperCase(),d=Jf(b,1,c),e=Jf(b,2,c),f=Jf(b,3,c);if(La(d)){var h=Qf(d);c?Wf("_gl",h,a):Xf("_gl",h,a,!1)}if(!c&&La(e)){var k=Qf(e);Xf("_gl",k,a,!0)}for(var l in f)if(f.hasOwnProperty(l))a:{var m=l,p=f[l],r=a;if(r.tagName){if("a"===r.tagName.toLowerCase()){Xf(m,p,r,void 0);break a}if("form"===r.tagName.toLowerCase()){Wf(m,p,r);break a}}"string"==typeof r&&Uf(m,p,r,void 0)}}
function Xf(a,b,c,d){if(c.href){var e=Uf(a,b,c.href,void 0===d?!1:d);wc.test(e)&&(c.href=e)}}
function Wf(a,b,c){if(c&&c.action){var d=(c.method||"").toLowerCase();if("get"===d){for(var e=c.childNodes||[],f=!1,h=0;h<e.length;h++){var k=e[h];if(k.name===a){k.setAttribute("value",b);f=!0;break}}if(!f){var l=H.createElement("input");l.setAttribute("type","hidden");l.setAttribute("name",a);l.setAttribute("value",b);c.appendChild(l)}}else if("post"===d){var m=Uf(a,b,c.action);wc.test(m)&&(c.action=m)}}}
var Ef=function(a){try{var b;a:{for(var c=a,d=100;c&&0<d;){if(c.href&&c.nodeName.match(/^a(?:rea)?$/i)){b=c;break a}c=c.parentNode;d--}b=null}var e=b;if(e){var f=e.protocol;"http:"!==f&&"https:"!==f||Vf(e,e.hostname)}}catch(h){}},Ff=function(a){try{if(a.action){var b=Te(Ve(a.action),"host");Vf(a,b)}}catch(c){}},Yf=function(a,b,c,d){Hf();If(a,b,"fragment"===c?2:1,!!d,!1)},Zf=function(a,b){Hf();If(a,[Se(F.location,"host",!0)],b,!0,!0)},$f=function(){var a=H.location.hostname,b=Lf.exec(H.referrer);if(!b)return!1;
var c=b[2],d=b[1],e="";if(c){var f=c.split("/"),h=f[1];e="s"===h?decodeURIComponent(f[2]):decodeURIComponent(h)}else if(d){if(0===d.indexOf("xn--"))return!1;e=d.replace(/-/g,".").replace(/\.\./g,"-")}var k=a.replace(Mf,""),l=e.replace(Mf,""),m;if(!(m=k===l)){var p="."+l;m=k.substring(k.length-p.length,k.length)===p}return m},ag=function(a,b){return!1===a?!1:a||b||$f()};var bg=/^\w+$/,cg=/^[\w-]+$/,dg=/^~?[\w-]+$/,eg={aw:"_aw",dc:"_dc",gf:"_gf",ha:"_ha",gp:"_gp"},fg=function(){if(!bd("gtag_cs_api")||!ld())return!0;var a=jd("ad_storage");return null==a?!0:!!a},gg=function(a,b){kd("ad_storage")?fg()?a():od(a,"ad_storage"):b?oc("TAGGING",3):nd(function(){gg(a,!0)},["ad_storage"])},jg=function(a){var b=[];if(!H.cookie)return b;var c=Ze(a,H.cookie,void 0,"ad_storage");if(!c||0==c.length)return b;for(var d=0;d<c.length;d++){var e=hg(c[d]);e&&-1===xa(b,e)&&b.push(e)}return ig(b)};
function kg(a){return a&&"string"==typeof a&&a.match(bg)?a:"_gcl"}
var mg=function(){var a=Ve(F.location.href),b=Te(a,"query",!1,void 0,"gclid"),c=Te(a,"query",!1,void 0,"gclsrc"),d=Te(a,"query",!1,void 0,"dclid");if(!b||!c){var e=a.hash.replace("#","");b=b||Qe(e,"gclid",void 0);c=c||Qe(e,"gclsrc",void 0)}return lg(b,c,d)},lg=function(a,b,c){var d={},e=function(f,h){d[h]||(d[h]=[]);d[h].push(f)};d.gclid=a;d.gclsrc=b;d.dclid=c;if(void 0!==a&&a.match(cg))switch(b){case void 0:e(a,"aw");break;case "aw.ds":e(a,"aw");e(a,"dc");break;case "ds":e(a,"dc");break;case "3p.ds":bd("gtm_3pds")&&
e(a,"dc");break;case "gf":e(a,"gf");break;case "ha":e(a,"ha");break;case "gp":e(a,"gp")}c&&e(c,"dc");return d},og=function(a){var b=mg();gg(function(){ng(b,a)})};
function ng(a,b,c){function d(l,m){var p=pg(l,e);p&&hf(p,m,f)}b=b||{};var e=kg(b.prefix);c=c||Ha();var f=qf(b,c,!0);f.Ga="ad_storage";var h=Math.round(c/1E3),k=function(l){return["GCL",h,l].join(".")};a.aw&&(!0===b.ki?d("aw",k("~"+a.aw[0])):d("aw",k(a.aw[0])));a.dc&&d("dc",k(a.dc[0]));a.gf&&d("gf",k(a.gf[0]));a.ha&&d("ha",k(a.ha[0]));a.gp&&d("gp",k(a.gp[0]))}
var rg=function(a,b){var c=Tf(!0);gg(function(){for(var d=kg(b.prefix),e=0;e<a.length;++e){var f=a[e];if(void 0!==eg[f]){var h=pg(f,d),k=c[h];if(k){var l=Math.min(qg(k),Ha()),m;b:{for(var p=l,r=Ze(h,H.cookie,void 0,"ad_storage"),t=0;t<r.length;++t)if(qg(r[t])>p){m=!0;break b}m=!1}if(!m){var q=qf(b,l,!0);q.Ga="ad_storage";hf(h,k,q)}}}}ng(lg(c.gclid,c.gclsrc),b)})},pg=function(a,b){var c=eg[a];if(void 0!==c)return b+c},qg=function(a){var b=a.split(".");return 3!==b.length||"GCL"!==b[0]?0:1E3*(Number(b[1])||
0)};function hg(a){var b=a.split(".");if(3==b.length&&"GCL"==b[0]&&b[1])return b[2]}
var sg=function(a,b,c,d,e){if(wa(b)){var f=kg(e),h=function(){for(var k={},l=0;l<a.length;++l){var m=pg(a[l],f);if(m){var p=Ze(m,H.cookie,void 0,"ad_storage");p.length&&(k[m]=p.sort()[p.length-1])}}return k};gg(function(){Yf(h,b,c,d)})}},ig=function(a){return a.filter(function(b){return dg.test(b)})},tg=function(a,b){for(var c=kg(b.prefix),d={},e=0;e<a.length;e++)eg[a[e]]&&(d[a[e]]=eg[a[e]]);gg(function(){Ca(d,function(f,h){var k=Ze(c+h,H.cookie,void 0,"ad_storage");if(k.length){var l=k[0],m=qg(l),
p={};p[f]=[hg(l)];ng(p,b,m)}})})};function ug(a,b){for(var c=0;c<b.length;++c)if(a[b[c]])return!0;return!1}
var vg=function(){function a(e,f,h){h&&(e[f]=h)}var b=["aw","dc"];if(ld()){var c=mg();if(ug(c,b)){var d={};a(d,"gclid",c.gclid);a(d,"dclid",c.dclid);a(d,"gclsrc",c.gclsrc);Zf(function(){return d},3);Zf(function(){var e={};return e._up="1",e},1)}}},wg=function(){var a;if(fg()){for(var b=[],c=H.cookie.split(";"),d=/^\s*_gac_(UA-\d+-\d+)=\s*(.+?)\s*$/,e=0;e<c.length;e++){var f=c[e].match(d);f&&b.push({Bd:f[1],value:f[2]})}var h={};if(b&&b.length)for(var k=0;k<b.length;k++){var l=b[k].value.split(".");
"1"==l[0]&&3==l.length&&l[1]&&(h[b[k].Bd]||(h[b[k].Bd]=[]),h[b[k].Bd].push({timestamp:l[1],Ig:l[2]}))}a=h}else a={};return a};var xg=/^\d+\.fls\.doubleclick\.net$/;function yg(a,b){kd(C.o)?sd(C.o)?a():od(a,C.o):b?E(42):ud(function(){yg(a,!0)},[C.o])}function zg(a){var b=Ve(F.location.href),c=Te(b,"host",!1);if(c&&c.match(xg)){var d=Te(b,"path").split(a+"=");if(1<d.length)return d[1].split(";")[0].split("?")[0]}}
function Ag(a,b,c){if("aw"==a||"dc"==a){var d=zg("gcl"+a);if(d)return d.split(".")}var e=kg(b);if("_gcl"==e){c=void 0===c?!0:c;var f=!sd(C.o)&&c,h;h=mg()[a]||[];if(0<h.length)return f?["0"]:h}var k=pg(a,e);return k?jg(k):[]}
var Bg=function(a){var b=zg("gac");if(b)return!sd(C.o)&&a?"0":decodeURIComponent(b);var c=wg(),d=[];Ca(c,function(e,f){for(var h=[],k=0;k<f.length;k++)h.push(f[k].Ig);h=ig(h);h.length&&d.push(e+":"+h.join(","))});return d.join(";")},Cg=function(a,b){var c=mg().dc||[];yg(function(){wf(b);var d=sf[tf(b.prefix)],e=!1;if(d&&0<c.length){var f=M.joined_au=M.joined_au||{},h=b.prefix||"_gcl";if(!f[h])for(var k=0;k<c.length;k++){var l="https://adservice.google.com/ddm/regclk";l=l+"?gclid="+c[k]+"&auiddc="+d;Zc(l);e=f[h]=
!0}}null==a&&(a=e);if(a&&d){var m=tf(b.prefix),p=sf[m];p&&vf(m,p,b)}})};var Dg=/[A-Z]+/,Eg=/\s/,Fg=function(a){if(g(a)&&(a=Ga(a),!Eg.test(a))){var b=a.indexOf("-");if(!(0>b)){var c=a.substring(0,b);if(Dg.test(c)){for(var d=a.substring(b+1).split("/"),e=0;e<d.length;e++)if(!d[e])return;return{id:a,prefix:c,containerId:c+"-"+d[0],C:d}}}}},Hg=function(a){for(var b={},c=0;c<a.length;++c){var d=Fg(a[c]);d&&(b[d.id]=d)}Gg(b);var e=[];Ca(b,function(f,h){e.push(h)});return e};
function Gg(a){var b=[],c;for(c in a)if(a.hasOwnProperty(c)){var d=a[c];"AW"===d.prefix&&d.C[1]&&b.push(d.containerId)}for(var e=0;e<b.length;++e)delete a[b[e]]};var Ig=function(){var a=!1;return a};var Kg=function(a,b,c,d){return(2===Jg()||d||"http:"!=F.location.protocol?a:b)+c},Jg=function(){var a=Qc(),b;if(1===a)a:{var c=Ud;c=c.toLowerCase();for(var d="https://"+c,e="http://"+c,f=1,h=H.getElementsByTagName("script"),k=0;k<h.length&&100>k;k++){var l=h[k].src;if(l){l=l.toLowerCase();if(0===l.indexOf(e)){b=3;break a}1===f&&0===l.indexOf(d)&&(f=2)}}b=f}else b=a;return b};
var Zg=function(a){return sd(C.o)?a:a.replace(/&url=([^&#]+)/,function(b,c){var d=We(decodeURIComponent(c));return"&url="+encodeURIComponent(d)})},$g=function(){var a;if(!(a=Vd)){var b;if(!0===F._gtmdgs)b=!0;else{var c=Lc&&Lc.userAgent||"";b=0>c.indexOf("Safari")||/Chrome|Coast|Opera|Edg|Silk|Android/.test(c)||11>((/Version\/([\d]+)/.exec(c)||[])[1]||"")?!1:!0}a=!b}if(a)return-1;var d=Da("0");return Oe(1,100)<d?Oe(2,2):-1};var ah=new RegExp(/^(.*\.)?(google|youtube|blogger|withgoogle)(\.com?)?(\.[a-z]{2})?\.?$/),bh={cl:["ecl"],customPixels:["nonGooglePixels"],ecl:["cl"],ehl:["hl"],hl:["ehl"],html:["customScripts","customPixels","nonGooglePixels","nonGoogleScripts","nonGoogleIframes"],customScripts:["html","customPixels","nonGooglePixels","nonGoogleScripts","nonGoogleIframes"],nonGooglePixels:[],nonGoogleScripts:["nonGooglePixels"],nonGoogleIframes:["nonGooglePixels"]},ch={cl:["ecl"],customPixels:["customScripts","html"],
ecl:["cl"],ehl:["hl"],hl:["ehl"],html:["customScripts"],customScripts:["html"],nonGooglePixels:["customPixels","customScripts","html","nonGoogleScripts","nonGoogleIframes"],nonGoogleScripts:["customScripts","html"],nonGoogleIframes:["customScripts","html","nonGoogleScripts"]},dh="google customPixels customScripts html nonGooglePixels nonGoogleScripts nonGoogleIframes".split(" ");
var fh=function(a){var b;Ee("gtm.allowlist")&&E(52);b||(b=Ee("gtm.whitelist"));b&&E(9);
var c=b&&Ma(Fa(b),bh),d;Ee("gtm.blocklist")&&E(51);d||(d=Ee("gtm.blacklist"));d||(d=Ee("tagTypeBlacklist"))&&E(3);d?E(8):d=[];eh()&&(d=Fa(d),d.push("nonGooglePixels","nonGoogleScripts","sandboxedScripts"));0<=xa(Fa(d),"google")&&E(2);var e=
d&&Ma(Fa(d),ch),f={};return function(h){var k=h&&h[Mb.Ea];if(!k||"string"!=typeof k)return!0;k=k.replace(/^_*/,"");if(void 0!==f[k])return f[k];var l=$d[k]||[],m=a(k,l);if(b){var p;if(p=m)a:{if(0>xa(c,k))if(l&&0<l.length)for(var r=0;r<l.length;r++){if(0>xa(c,l[r])){E(11);p=!1;break a}}else{p=!1;break a}p=!0}m=p}var t=!1;if(d){var q=0<=xa(e,k);if(q)t=q;else{var v=Ba(e,l||[]);v&&E(10);t=v}}var u=!m||t;u||!(0<=xa(l,"sandboxedScripts"))||c&&-1!==xa(c,"sandboxedScripts")||(u=Ba(e,dh));return f[k]=u}},
eh=function(){return ah.test(F.location&&F.location.hostname)};var gh={active:!0,isAllowed:function(){return!0}},hh=function(a){var b=M.zones;return b?b.checkState(Od.B,a):gh},ih=function(a){var b=M.zones;!b&&a&&(b=M.zones=a());return b};var jh=function(){},kh=function(){};var lh=!1,mh=0,nh=[];function oh(a){if(!lh){var b=H.createEventObject,c="complete"==H.readyState,d="interactive"==H.readyState;if(!a||"readystatechange"!=a.type||c||!b&&d){lh=!0;for(var e=0;e<nh.length;e++)J(nh[e])}nh.push=function(){for(var f=0;f<arguments.length;f++)J(arguments[f]);return 0}}}function ph(){if(!lh&&140>mh){mh++;try{H.documentElement.doScroll("left"),oh()}catch(a){F.setTimeout(ph,50)}}}var qh=function(a){lh?a():nh.push(a)};var rh={},sh={},th=function(a,b,c,d){if(!sh[a]||Rd[b]||"__zone"===b)return-1;var e={};Ua(d)&&(e=n(d,e));e.id=c;e.status="timeout";return sh[a].tags.push(e)-1},uh=function(a,b,c,d){if(sh[a]){var e=sh[a].tags[b];e&&(e.status=c,e.executionTime=d)}};function vh(a){for(var b=rh[a]||[],c=0;c<b.length;c++)b[c]();rh[a]={push:function(d){d(Od.B,sh[a])}}}
var yh=function(a,b,c){sh[a]={tags:[]};ua(b)&&wh(a,b);c&&F.setTimeout(function(){return vh(a)},Number(c));return xh(a)},wh=function(a,b){rh[a]=rh[a]||[];rh[a].push(Ja(function(){return J(function(){b(Od.B,sh[a])})}))};function xh(a){var b=0,c=0,d=!1;return{add:function(){c++;return Ja(function(){b++;d&&b>=c&&vh(a)})},gg:function(){d=!0;b>=c&&vh(a)}}};var zh=function(){function a(d){return!va(d)||0>d?0:d}if(!M._li&&F.performance&&F.performance.timing){var b=F.performance.timing.navigationStart,c=va(Fe.get("gtm.start"))?Fe.get("gtm.start"):0;M._li={cst:a(c-b),cbt:a(Xd-b)}}};var Dh={},Eh=function(){return F.GoogleAnalyticsObject&&F[F.GoogleAnalyticsObject]},Fh=!1;
var Gh=function(a){F.GoogleAnalyticsObject||(F.GoogleAnalyticsObject=a||"ga");var b=F.GoogleAnalyticsObject;if(F[b])F.hasOwnProperty(b)||E(12);else{var c=function(){c.q=c.q||[];c.q.push(arguments)};c.l=Number(new Date);F[b]=c}zh();return F[b]},Hh=function(a,b,c,d){b=String(b).replace(/\s+/g,"").split(",");var e=Eh();e(a+"require","linker");e(a+"linker:autoLink",b,c,d)};
var Jh=function(a){},Ih=function(){return F.GoogleAnalyticsObject||"ga"},Kh=function(a,b){return function(){var c=Eh(),d=c&&c.getByName&&c.getByName(a);if(d){var e=d.get("sendHitTask");d.set("sendHitTask",function(f){var h=f.get("hitPayload"),k=f.get("hitCallback"),l=0>h.indexOf("&tid="+b);l&&(f.set("hitPayload",h.replace(/&tid=UA-[0-9]+-[0-9]+/,"&tid="+
b),!0),f.set("hitCallback",void 0,!0));e(f);l&&(f.set("hitPayload",h,!0),f.set("hitCallback",k,!0),f.set("_x_19",void 0,!0),e(f))})}}};function Ph(a,b,c,d){var e=Ab[a],f=Qh(a,b,c,d);if(!f)return null;var h=Ib(e[Mb.ve],c,[]);if(h&&h.length){var k=h[0];f=Ph(k.index,{H:f,F:1===k.Ge?b.terminate:f,terminate:b.terminate},c,d)}return f}
function Qh(a,b,c,d){function e(){if(f[Mb.Qf])k();else{var w=Jb(f,c,[]);var B=th(c.id,String(f[Mb.Ea]),Number(f[Mb.we]),w[Mb.Rf]),A=!1;w.vtp_gtmOnSuccess=function(){if(!A){A=!0;var G=Ha()-D;we(c.id,Ab[a],"5");uh(c.id,B,"success",
G);h()}};w.vtp_gtmOnFailure=function(){if(!A){A=!0;var G=Ha()-D;we(c.id,Ab[a],"6");uh(c.id,B,"failure",G);k()}};w.vtp_gtmTagId=f.tag_id;w.vtp_gtmEventId=c.id;we(c.id,f,"1");var z=function(){var G=Ha()-D;we(c.id,f,"7");uh(c.id,B,"exception",G);A||(A=!0,k())};var D=Ha();try{Hb(w,c)}catch(G){z(G)}}}var f=Ab[a],h=b.H,k=b.F,l=b.terminate;if(c.hd(f))return null;var m=Ib(f[Mb.xe],c,[]);if(m&&m.length){var p=m[0],r=Ph(p.index,{H:h,F:k,terminate:l},c,d);if(!r)return null;h=r;k=2===p.Ge?l:r}if(f[Mb.qe]||f[Mb.Tf]){var t=f[Mb.qe]?Bb:c.Dh,q=h,v=k;if(!t[a]){e=Ja(e);
var u=Rh(a,t,e);h=u.H;k=u.F}return function(){t[a](q,v)}}return e}function Rh(a,b,c){var d=[],e=[];b[a]=Sh(d,e,c);return{H:function(){b[a]=Th;for(var f=0;f<d.length;f++)d[f]()},F:function(){b[a]=Uh;for(var f=0;f<e.length;f++)e[f]()}}}function Sh(a,b,c){return function(d,e){a.push(d);b.push(e);c()}}function Th(a){a()}function Uh(a,b){b()};var Xh=function(a,b,c){for(var d=[],e=0;e<Ab.length;e++)if(a[e]){var f=Ab[e];var h=c.add();try{var k=Ph(e,{H:h,F:h,terminate:h},b,e);k?d.push({Xe:e,Se:Kb(f),Eg:k}):(Vh(e,b),h())}catch(m){h()}}c.gg();d.sort(Wh);for(var l=0;l<d.length;l++)d[l].Eg();return 0<d.length};function Wh(a,b){var c,d=b.Se,e=a.Se;c=d>e?1:d<e?-1:0;var f;if(0!==c)f=c;else{var h=a.Xe,k=b.Xe;f=h>k?1:h<k?-1:0}return f}
function Vh(a,b){if(!ue)return;var c=function(d){var e=b.hd(Ab[d])?"3":"4",f=Ib(Ab[d][Mb.ve],b,[]);f&&f.length&&c(f[0].index);we(b.id,Ab[d],e);var h=Ib(Ab[d][Mb.xe],b,[]);h&&h.length&&c(h[0].index)};c(a);}
var Yh=!1,ci=function(a){var b=a["gtm.uniqueEventId"],c=a.event;if("gtm.js"===c){if(Yh)return!1;Yh=!0}var d=hh(b),e=!1;if(!d.active){var f=!0;if("gtm.js"===c){f=!1,e=!0,d=hh(Number.MAX_SAFE_INTEGER);}if(f)return!1}ue&&!le[b]&&he!==b&&(de(),he=b,oe=je="",se[b]="&e="+(0===c.indexOf("gtm.")?encodeURIComponent(c):"*")+"&eid="+b,ge());
var h={id:b,name:c,hd:fh(d.isAllowed),Dh:[],Ne:function(){E(6)},Be:Zh(b)},k=yh(b,a.eventCallback,a.eventTimeout);$h(b);var l=Rb(h);e&&(l=ai(l));var m=Xh(l,h,k);"gtm.js"!==c&&"gtm.sync"!==c||Jh(Od.B);switch(c){case "gtm.init":E(19),m&&E(20)}return bi(l,
m)};function Zh(a){return function(b){ue&&(Va(b)||ye(a,"input",b))}}function $h(a){Ie(a,"event",1);Ie(a,"ecommerce",1);Ie(a,"gtm");}
function ai(a){var b=[];for(var c=0;c<a.length;c++)a[c]&&Qd[String(Ab[c][Mb.Ea])]&&(b[c]=!0);return b}function bi(a,b){if(!b)return b;for(var c=0;c<a.length;c++)if(a[c]&&Ab[c]&&!Rd[String(Ab[c][Mb.Ea])])return!0;return!1}function di(a,b){if(a){var c=""+a;0!==c.indexOf("http://")&&0!==c.indexOf("https://")&&(c="https://"+c);"/"===c[c.length-1]&&(c=c.substring(0,c.length-1));return Ve(""+c+b).href}}function ei(a,b){return fi()?di(a,b):void 0}function fi(){var a=!1;return a};var gi=function(){this.eventModel={};this.targetConfig={};this.containerConfig={};this.h={};this.globalConfig={};this.H=function(){};this.F=function(){};this.eventId=void 0},hi=function(a){var b=new gi;b.eventModel=a;return b},ii=function(a,b){a.targetConfig=b;return a},ji=function(a,b){a.containerConfig=b;return a},ki=function(a,b){a.h=b;return a},li=function(a,b){a.globalConfig=b;return a},mi=function(a,b){a.H=b;return a},ni=function(a,b){a.F=b;return a};
gi.prototype.getWithConfig=function(a){if(void 0!==this.eventModel[a])return this.eventModel[a];if(void 0!==this.targetConfig[a])return this.targetConfig[a];if(void 0!==this.containerConfig[a])return this.containerConfig[a];if(void 0!==this.h[a])return this.h[a];if(void 0!==this.globalConfig[a])return this.globalConfig[a]};
var oi=function(a){function b(e){Ca(e,function(f){c[f]=null})}var c={};b(a.eventModel);b(a.targetConfig);b(a.containerConfig);b(a.globalConfig);var d=[];Ca(c,function(e){d.push(e)});return d};var pi;if(3===Od.Yb.length)pi="g";else{var qi="G";pi=qi}
var ri={"":"n",UA:"u",AW:"a",DC:"d",G:"e",GF:"f",HA:"h",GTM:pi,OPT:"o"},si=function(a){var b=Od.B.split("-"),c=b[0].toUpperCase(),d=ri[c]||"i",e=a&&"GTM"===c?b[1]:"OPT"===c?b[1]:"",f;if(3===Od.Yb.length){var h="w";f="2"+h}else f="";return f+d+Od.Yb+e};var ti=function(a,b){a.addEventListener&&a.addEventListener("message",b,!1)};var ui=function(){return Ac("iPhone")&&!Ac("iPod")&&!Ac("iPad")};Ac("Opera");Ac("Trident")||Ac("MSIE");Ac("Edge");!Ac("Gecko")||-1!=xc.toLowerCase().indexOf("webkit")&&!Ac("Edge")||Ac("Trident")||Ac("MSIE")||Ac("Edge");-1!=xc.toLowerCase().indexOf("webkit")&&!Ac("Edge")&&Ac("Mobile");Ac("Macintosh");Ac("Windows");Ac("Linux")||Ac("CrOS");var vi=na.navigator||null;vi&&(vi.appVersion||"").indexOf("X11");Ac("Android");ui();Ac("iPad");Ac("iPod");ui()||Ac("iPad")||Ac("iPod");xc.toLowerCase().indexOf("kaios");var wi=function(a,b){for(var c=a,d=0;50>d;++d){var e;try{e=!(!c.frames||!c.frames[b])}catch(k){e=!1}if(e)return c;var f;a:{try{var h=c.parent;if(h&&h!=c){f=h;break a}}catch(k){}f=null}if(!(c=f))break}return null};var xi=function(){};var yi=function(a,b){this.i=a;this.h=null;this.L={};this.na=0;this.fa=void 0===b?500:b;this.m=null};la(yi,xi);var Ai=function(a){return"function"===typeof a.i.__tcfapi||null!=zi(a)};
yi.prototype.addEventListener=function(a){var b={},c=uc(function(){return a(b)}),d=0;-1!==this.fa&&(d=setTimeout(function(){b.tcString="tcunavailable";b.internalErrorState=1;c()},this.fa));var e=function(f,h){clearTimeout(d);f?(b=f,b.internalErrorState=void 0!==b.tcString&&"string"!==typeof b.tcString||void 0!==b.gdprApplies&&"boolean"!==typeof b.gdprApplies||void 0!==b.listenerId&&"number"!==typeof b.listenerId||void 0!==b.addtlConsent&&"string"!==typeof b.addtlConsent?2:b.cmpStatus&&"error"!==b.cmpStatus?
0:3,h&&0===b.internalErrorState||(b.tcString="tcunavailable",h||(b.internalErrorState=3))):(b.tcString="tcunavailable",b.internalErrorState=3);a(b)};try{Bi(this,"addEventListener",e)}catch(f){b.tcString="tcunavailable",b.internalErrorState=3,d&&(clearTimeout(d),d=0),c()}};yi.prototype.removeEventListener=function(a){a&&a.listenerId&&Bi(this,"removeEventListener",null,a.listenerId)};
var Di=function(a,b,c){if(!a.purpose||!a.vendor)return!1;var d=Ci(a.vendor.consents,void 0===c?"755":c);return d&&"1"===b&&a.purposeOneTreatment&&"DE"===a.publisherCC?!0:d&&Ci(a.purpose.consents,b)},Ei=function(a,b,c){var d;d=void 0===d?"755":d;var e;a:{if(a.publisher&&a.publisher.restrictions){var f=a.publisher.restrictions[b];if(void 0!==f){e=f[void 0===d?"755":d];break a}}e=void 0}var h=e;if(0===h)return!1;var k=c;2===c?(k=0,2===h&&(k=1)):3===c&&(k=1,1===h&&(k=0));return 0===k?Di(a,b,d):1===k?
a.purpose&&a.vendor?Ci(a.purpose.legitimateInterests,b)&&Ci(a.vendor.legitimateInterests,void 0===d?"755":d):!1:!0},Ci=function(a,b){return!(!a||!a[b])},Bi=function(a,b,c,d){c||(c=function(){});if("function"===typeof a.i.__tcfapi){var e=a.i.__tcfapi;e(b,2,c,d)}else if(zi(a)){Fi(a);var f=++a.na;a.L[f]=c;if(a.h){var h={};a.h.postMessage((h.__tcfapiCall={command:b,version:2,callId:f,parameter:d},h),"*")}}else c({},!1)},zi=function(a){if(a.h)return a.h;a.h=wi(a.i,"__tcfapiLocator");return a.h},Fi=function(a){a.m||
(a.m=function(b){try{var c,d;"string"===typeof b.data?d=JSON.parse(b.data):d=b.data;c=d.__tcfapiReturn;a.L[c.callId](c.returnValue,c.success)}catch(e){}},ti(a.i,a.m))};var Gi={1:0,3:0,4:0,7:3,9:3,10:3};function Hi(a,b){if(""===a)return b;var c=Number(a);return isNaN(c)?b:c}var Ii=Hi("",550),Ji=Hi("",500);function Ki(){var a=M.tcf||{};return M.tcf=a}
var Li=function(a,b){this.m=a;this.h=b;this.i=Ha();},Mi=function(a){},Ni=function(a){},Ti=function(){var a=Ki(),b=new yi(F,3E3),c=new Li(b,a);if((Oi()?!0===F.gtag_enable_tcf_support:!1!==F.gtag_enable_tcf_support)&&!a.active&&("function"===typeof F.__tcfapi||Ai(b))){a.active=!0;a.Ab={};Pi();var d=setTimeout(function(){Qi(a);Ri(a);d=null},Ji);try{b.addEventListener(function(e){d&&(clearTimeout(d),d=null);if(0!==e.internalErrorState)Qi(a),Ri(a),Mi(c);else{var f;if(!1===e.gdprApplies)f=Si(),b.removeEventListener(e);
else if("tcloaded"===e.eventStatus||"useractioncomplete"===e.eventStatus||"cmpuishown"===e.eventStatus){var h={},k;for(k in Gi)Gi.hasOwnProperty(k)&&("1"===k?h["1"]=!1===e.gdprApplies||"error"===e.cmpStatus||0!==e.internalErrorState||"loaded"===e.cmpStatus&&("tcloaded"===e.eventStatus||"useractioncomplete"===e.eventStatus)?!1===e.gdprApplies||"tcunavailable"===e.tcString?!0:bd("tcf_restrictions")?Ei(e,"1",0):Di(e,"1"):!1:h[k]=Ei(e,k,Gi[k]));f=h}f&&(a.tcString=e.tcString||"tcempty",a.Ab=f,Ri(a),Mi(c))}}),
Ni(c)}catch(e){d&&(clearTimeout(d),d=null),Qi(a),Ri(a)}}};function Qi(a){a.type="e";a.tcString="tcunavailable";a.Ab=Si()}function Pi(){var a={};qd((a.ad_storage="denied",a.wait_for_update=Ii,a))}var Oi=function(){var a=!1;a=!0;return a};function Si(){var a={},b;for(b in Gi)Gi.hasOwnProperty(b)&&(a[b]=!0);return a}function Ri(a){var b={};rd((b.ad_storage=a.Ab["1"]?"granted":"denied",b))}
var Ui=function(){var a=Ki();if(a.active&&void 0!==a.loadTime)return Number(a.loadTime)},Vi=function(){var a=Ki();return a.active?a.tcString||"":""},Wi=function(a){if(!Gi.hasOwnProperty(String(a)))return!0;var b=Ki();return b.active&&b.Ab?!!b.Ab[String(a)]:!0};function Xi(a,b,c){function d(r){var t;M.reported_gclid||(M.reported_gclid={});t=M.reported_gclid;var q=f+(r?"gcu":"gcs");if(!t[q]){t[q]=!0;var v=[],u=function(A,z){z&&v.push(A+"="+encodeURIComponent(z))},w="https://www.google.com";if(ld()){var y=sd(C.o);u("gcs",td());r&&u("gcu","1");u("rnd",p);if((!f||h&&"aw.ds"!==h)&&sd(C.o)){var x=jg("_gcl_aw");u("gclaw",x.join("."))}u("url",String(F.location).split(/[?#]/)[0]);u("dclid",Yi(b,k));!y&&b&&(w="https://pagead2.googlesyndication.com")}
u("gdpr_consent",Vi());"1"===Tf(!1)._up&&u("gtm_up","1");u("gclid",Yi(b,f));u("gclsrc",h);u("gtm",si(!c));var B=w+"/pagead/landing?"+v.join("&");Zc(B)}}var e=mg(),f=e.gclid||"",h=e.gclsrc,k=e.dclid||"",l=!a&&(!f||h&&"aw.ds"!==h?!1:!0),m=ld();if(l||m){var p=""+lf();m?ud(function(){d();sd(C.o)||od(function(r){return d(!0,r.Ce)},C.o)},[C.o]):d()}}function Yi(a,b){var c=a&&!sd(C.o);return b&&c?"0":b}var Zi=function(a){if(H.hidden)return!0;var b=a.getBoundingClientRect();if(b.top==b.bottom||b.left==b.right||!F.getComputedStyle)return!0;var c=F.getComputedStyle(a,null);if("hidden"===c.visibility)return!0;for(var d=a,e=c;d;){if("none"===e.display)return!0;var f=e.opacity,h=e.filter;if(h){var k=h.indexOf("opacity(");0<=k&&(h=h.substring(k+8,h.indexOf(")",k)),"%"==h.charAt(h.length-1)&&(h=h.substring(0,h.length-1)),f=Math.min(h,f))}if(void 0!==f&&0>=f)return!0;(d=d.parentElement)&&(e=F.getComputedStyle(d,
null))}return!1};
var $i=function(){var a=H.body,b=H.documentElement||a&&a.parentElement,c,d;if(H.compatMode&&"BackCompat"!==H.compatMode)c=b?b.clientHeight:0,d=b?b.clientWidth:0;else{var e=function(f,h){return f&&h?Math.min(f,h):Math.max(f,h)};E(7);c=e(b?b.clientHeight:0,a?a.clientHeight:0);d=e(b?b.clientWidth:0,a?a.clientWidth:0)}return{width:d,height:c}},aj=function(a){var b=$i(),c=b.height,d=b.width,e=a.getBoundingClientRect(),f=e.bottom-e.top,h=e.right-e.left;return f&&h?(1-Math.min((Math.max(0-e.left,0)+Math.max(e.right-
d,0))/h,1))*(1-Math.min((Math.max(0-e.top,0)+Math.max(e.bottom-c,0))/f,1)):0};var hj=new RegExp(/[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}/i),ij=["SCRIPT","IMG","SVG","PATH"];function jj(a){var b;if(a===H.body)b="body";else{var c;if(a.id)c="#"+a.id;else{var d;if(a.parentElement){var e;a:{var f=a.parentElement;if(f){for(var h=0;h<f.childElementCount;h++)if(f.children[h]===a){e=h+1;break a}e=-1}else e=1}d=jj(a.parentElement)+">:nth-child("+e+")"}else d="";c=d}b=c}return b}
var kj=function(){var a;var b=[],c=H.body;if(c){for(var d=c.querySelectorAll("*"),e=0;e<d.length&&1E4>e;e++){var f=d[e];0<=ij.indexOf(f.tagName.toUpperCase())||0===f.childElementCount&&b.push(f)}a={elements:b,status:1E4<d.length?"2":"1"}}else a={elements:b,status:"4"};for(var h=a,k=h.elements,l=[],m=0;m<k.length;m++){var p=k[m],r=p.textContent;p.value&&(r=p.value);r&&r.match(hj)&&l.push(p)}for(var t=[],q=10<l.length?"3":h.status,v=0;v<l.length&&10>v;v++){var u=l[v];t.push({querySelector:jj(u),tagName:u.tagName,
isVisible:!Zi(u),type:1})}return{elements:t,status:q}};var Tj=function(){var a=!0;Wi(7)&&Wi(9)&&Wi(10)||(a=!1);var b=!0;b=!1;b&&!Sj()&&(a=!1);return a},Sj=function(){var a=!0;Wi(3)&&Wi(4)||(a=!1);return a};function nk(){var a=M;return a.gcq=a.gcq||new ok}
var pk=function(a,b,c){nk().register(a,b,c)},qk=function(a,b,c,d){nk().push("event",[b,a],c,d)},rk=function(a,b){nk().push("config",[a],b)},sk=function(a,b,c){nk().push("get",[a,b],c)},tk={},uk=function(){this.status=1;this.containerConfig={};this.targetConfig={};this.i={};this.m=null;this.h=!1},vk=function(a,b,c,d,e){this.type=a;this.m=b;this.aa=c||"";this.h=d;this.i=e},ok=function(){this.m={};this.i={};this.h=[]},wk=function(a,b){var c=Fg(b);return a.m[c.containerId]=a.m[c.containerId]||new uk},
xk=function(a,b,c){if(b){var d=Fg(b);if(d&&1===wk(a,b).status){wk(a,b).status=2;var e={};ue&&(e.timeoutId=F.setTimeout(function(){E(38);ge()},3E3));a.push("require",[e],d.containerId);tk[d.containerId]=Ha();if(Ig()){}else{var h="/gtag/js?id="+
encodeURIComponent(d.containerId)+"&l=dataLayer&cx=c",k=("http:"!=F.location.protocol?"https:":"http:")+("//www.googletagmanager.com"+h),l=ei(c,h)||k;Pc(l)}}}},yk=function(a,b,c,d){if(d.aa){var e=wk(a,d.aa),f=e.m;if(f){var h=n(c),k=n(e.targetConfig[d.aa]),l=n(e.containerConfig),m=n(e.i),p=n(a.i),r=Ee("gtm.uniqueEventId"),t=Fg(d.aa).prefix,q=ni(mi(li(ki(ji(ii(hi(h),k),l),m),p),function(){xe(r,t,"2");}),function(){
xe(r,t,"3");});try{xe(r,t,"1");f(d.aa,b,d.m,q)}catch(v){xe(r,t,"4");}}}};
ok.prototype.register=function(a,b,c){if(3!==wk(this,a).status){wk(this,a).m=b;wk(this,a).status=3;c&&(wk(this,a).i=c);var d=Fg(a),e=tk[d.containerId];if(void 0!==e){var f=M[d.containerId].bootstrap,h=d.prefix.toUpperCase();M[d.containerId]._spx&&(h=h.toLowerCase());var k=Ee("gtm.uniqueEventId"),l=h,m=Ha()-f;if(ue&&!le[k]){k!==he&&(de(),he=k);var p=l+"."+Math.floor(f-e)+"."+Math.floor(m);pe=pe?pe+","+p:"&cl="+p}delete tk[d.containerId]}this.flush()}};
ok.prototype.push=function(a,b,c,d){var e=Math.floor(Ha()/1E3);xk(this,c,b[0][C.Da]||this.i[C.Da]);this.h.push(new vk(a,e,c,b,d));d||this.flush()};
ok.prototype.flush=function(a){for(var b=this;this.h.length;){var c=this.h[0];if(c.i)c.i=!1,this.h.push(c);else switch(c.type){case "require":if(3!==wk(this,c.aa).status&&!a)return;ue&&F.clearTimeout(c.h[0].timeoutId);break;case "set":Ca(c.h[0],function(p,r){n(Na(p,r),b.i)});break;case "config":var d=c.h[0],e=!!d[C.Tb];delete d[C.Tb];var f=wk(this,c.aa),h=Fg(c.aa),k=h.containerId===h.id;e||(k?f.containerConfig={}:f.targetConfig[c.aa]={});f.h&&e||yk(this,C.ia,d,c);f.h=!0;delete d[C.qb];k?n(d,f.containerConfig):
n(d,f.targetConfig[c.aa]);break;case "event":yk(this,c.h[1],c.h[0],c);break;case "get":}this.h.shift()}};var zk=!1,Ak=[];function Bk(){if(!zk){zk=!0;for(var a=0;a<Ak.length;a++)J(Ak[a])}}var Ck=function(a){zk?J(a):Ak.push(a)};var Dk="HA GF G UA AW DC".split(" "),Ek=!1,Fk={},Gk=!1;function Hk(a,b){var c={event:a};b&&(c.eventModel=n(b),b[C.Fc]&&(c.eventCallback=b[C.Fc]),b[C.Qb]&&(c.eventTimeout=b[C.Qb]));return c}function Ik(){return Ek}
var Lk={config:function(a){},event:function(a){var b=a[1];if(g(b)&&!(3<a.length)){var c;if(2<a.length){if(!Ua(a[2])&&
void 0!=a[2])return;c=a[2]}var d=Hk(b,c);return d}},js:function(a){if(2==a.length&&a[1].getTime)return Gk=!0,Ik(),{event:"gtm.js","gtm.start":a[1].getTime()}},policy:function(){},set:function(a){var b;2==a.length&&Ua(a[1])?b=n(a[1]):3==a.length&&g(a[1])&&(b={},Ua(a[2])||wa(a[2])?b[a[1]]=n(a[2]):b[a[1]]=a[2]);if(b){
b._clear=!0;return b}},consent:function(a){function b(){Ik()&&n(a[2],{subcommand:a[1]})}if(3===a.length){E(39);var c=ae(),d=a[1];"default"===d?(b(),qd(a[2])):"update"===d&&(b(),rd(a[2],c))}}};var Mk={policy:!0};
var Nk=function(a,b){var c=a.hide;if(c&&void 0!==c[b]&&c.end){c[b]=!1;var d=!0,e;for(e in c)if(c.hasOwnProperty(e)&&!0===c[e]){d=!1;break}d&&(c.end(),c.end=null)}},Pk=function(a){var b=Ok(),c=b&&b.hide;c&&c.end&&(c[a]=!0)};var gl=function(a){if(fl(a))return a;this.h=a};gl.prototype.Ng=function(){return this.h};var fl=function(a){return!a||"object"!==Sa(a)||Ua(a)?!1:"getUntrustedUpdateValue"in a};gl.prototype.getUntrustedUpdateValue=gl.prototype.Ng;var hl=[],il=!1,jl=function(a){return F["dataLayer"].push(a)},kl=function(a){var b=M["dataLayer"],c=b?b.subscribers:1,d=0;return function(){++d===c&&a()}};function ll(a){var b=a._clear;Ca(a,function(d,e){"_clear"!==d&&(b&&He(d,void 0),He(d,e))});Wd||(Wd=a["gtm.start"]);var c=a["gtm.uniqueEventId"];if(!a.event)return!1;c||(c=ae(),a["gtm.uniqueEventId"]=c,He("gtm.uniqueEventId",c));return ci(a)}
function ml(){for(var a=!1;!il&&0<hl.length;){il=!0;delete Be.eventModel;De();var b=hl.shift();if(null!=b){var c=fl(b);if(c){var d=b;b=fl(d)?d.getUntrustedUpdateValue():void 0;for(var e=["gtm.allowlist","gtm.blocklist","gtm.whitelist","gtm.blacklist","tagTypeBlacklist"],f=0;f<e.length;f++){var h=e[f],k=Ee(h,1);if(wa(k)||Ua(k))k=n(k);Ce[h]=k}}try{if(ua(b))try{b.call(Fe)}catch(w){}else if(wa(b)){var l=
b;if(g(l[0])){var m=l[0].split("."),p=m.pop(),r=l.slice(1),t=Ee(m.join("."),2);if(void 0!==t&&null!==t)try{t[p].apply(t,r)}catch(w){}}}else{var q=b;if(q&&("[object Arguments]"==Object.prototype.toString.call(q)||Object.prototype.hasOwnProperty.call(q,"callee"))){a:{var v=b;if(v.length&&g(v[0])){var u=Lk[v[0]];if(u&&(!c||!Mk[v[0]])){b=u(v);break a}}b=void 0}if(!b){il=!1;continue}}a=ll(b)||a}}finally{c&&De(!0)}}il=!1}
return!a}function nl(){var a=ml();try{Nk(F["dataLayer"],Od.B)}catch(b){}return a}
var pl=function(){var a=Nc("dataLayer",[]),b=Nc("google_tag_manager",{});b=b["dataLayer"]=b["dataLayer"]||{};qh(function(){b.gtmDom||(b.gtmDom=!0,a.push({event:"gtm.dom"}))});Ck(function(){b.gtmLoad||(b.gtmLoad=!0,a.push({event:"gtm.load"}))});b.subscribers=(b.subscribers||0)+1;var c=a.push;a.push=function(){var e;if(0<M.SANDBOXED_JS_SEMAPHORE){e=[];for(var f=0;f<arguments.length;f++)e[f]=new gl(arguments[f])}else e=[].slice.call(arguments,0);var h=c.apply(a,e);hl.push.apply(hl,e);if(300<
this.length)for(E(4);300<this.length;)this.shift();var k="boolean"!==typeof h||h;return ml()&&k};var d=a.slice(0);hl.push.apply(hl,d);ol()&&J(nl)},ol=function(){var a=!0;return a};var ql={};ql.Ub=new String("undefined");
var rl=function(a){this.h=function(b){for(var c=[],d=0;d<a.length;d++)c.push(a[d]===ql.Ub?b:a[d]);return c.join("")}};rl.prototype.toString=function(){return this.h("undefined")};rl.prototype.valueOf=rl.prototype.toString;ql.Vf=rl;ql.Rc={};ql.xg=function(a){return new rl(a)};var sl={};ql.vh=function(a,b){var c=ae();sl[c]=[a,b];return c};ql.Ee=function(a){var b=a?0:1;return function(c){var d=sl[c];if(d&&"function"===typeof d[b])d[b]();sl[c]=void 0}};ql.Vg=function(a){for(var b=!1,c=!1,d=2;d<a.length;d++)b=
b||8===a[d],c=c||16===a[d];return b&&c};ql.nh=function(a){if(a===ql.Ub)return a;var b=ae();ql.Rc[b]=a;return'google_tag_manager["'+Od.B+'"].macro('+b+")"};ql.gh=function(a,b,c){a instanceof ql.Vf&&(a=a.h(ql.vh(b,c)),b=ta);return{fd:a,H:b}};var tl=function(a,b,c){function d(f,h){var k=f[h];return k}var e={event:b,"gtm.element":a,"gtm.elementClasses":d(a,"className"),"gtm.elementId":a["for"]||Vc(a,"id")||"","gtm.elementTarget":a.formTarget||d(a,"target")||""};c&&(e["gtm.triggers"]=c.join(","));e["gtm.elementUrl"]=(a.attributes&&a.attributes.formaction?a.formAction:"")||a.action||d(a,"href")||a.src||a.code||a.codebase||
"";return e},ul=function(a){M.hasOwnProperty("autoEventsSettings")||(M.autoEventsSettings={});var b=M.autoEventsSettings;b.hasOwnProperty(a)||(b[a]={});return b[a]},vl=function(a,b,c){ul(a)[b]=c},wl=function(a,b,c,d){var e=ul(a),f=Ia(e,b,d);e[b]=c(f)},xl=function(a,b,c){var d=ul(a);return Ia(d,b,c)};var yl=["input","select","textarea"],zl=["button","hidden","image","reset","submit"],Al=function(a){var b=a.tagName.toLowerCase();return!ya(yl,function(c){return c===b})||"input"===b&&ya(zl,function(c){return c===a.type.toLowerCase()})?!1:!0},Bl=function(a){return a.form?a.form.tagName?a.form:H.getElementById(a.form):Yc(a,["form"],100)},Cl=function(a,b,c){if(!a.elements)return 0;for(var d=b.getAttribute(c),e=0,f=1;e<a.elements.length;e++){var h=a.elements[e];if(Al(h)){if(h.getAttribute(c)===d)return f;
f++}}return 0};var Dl=!!F.MutationObserver,El=void 0,Fl=function(a){if(!El){var b=function(){var c=H.body;if(c)if(Dl)(new MutationObserver(function(){for(var e=0;e<El.length;e++)J(El[e])})).observe(c,{childList:!0,subtree:!0});else{var d=!1;Tc(c,"DOMNodeInserted",function(){d||(d=!0,J(function(){d=!1;for(var e=0;e<El.length;e++)J(El[e])}))})}};El=[];H.body?b():J(b)}El.push(a)};
var Ql=function(a,b,c){function d(){var h=a();f+=e?(Ha()-e)*h.playbackRate/1E3:0;e=Ha()}var e=0,f=0;return{fc:function(h,k,l){var m=a(),p=m.Fe,r=void 0!==l?Math.round(l):void 0!==k?Math.round(m.Fe*k):Math.round(m.yg),t=void 0!==k?Math.round(100*k):0>=p?0:Math.round(r/p*100),q=H.hidden?!1:.5<=aj(c);d();var v=tl(c,"gtm.video",[b]);v["gtm.videoProvider"]="youtube";v["gtm.videoStatus"]=h;v["gtm.videoUrl"]=m.url;v["gtm.videoTitle"]=m.title;v["gtm.videoDuration"]=Math.round(p);v["gtm.videoCurrentTime"]=
Math.round(r);v["gtm.videoElapsedTime"]=Math.round(f);v["gtm.videoPercent"]=t;v["gtm.videoVisible"]=q;jl(v)},xh:function(){e=Ha()},Uc:function(){d()}}};var Rl=F.clearTimeout,Sl=F.setTimeout,P=function(a,b,c){if(Ig()){b&&J(b)}else return Pc(a,b,c)},Tl=function(){return new Date},Ul=function(){return F.location.href},Vl=function(a){return Te(Ve(a),"fragment")},Wl=function(a){return Ue(Ve(a))},Xl=function(a,b){return Ee(a,b||2)},Yl=function(a,b,c){var d;b?(a.eventCallback=b,c&&(a.eventTimeout=c),d=jl(a)):d=jl(a);return d},Zl=function(a,b){F[a]=b},X=function(a,b,c){b&&
(void 0===F[a]||c&&!F[a])&&(F[a]=b);return F[a]},$l=function(a,b,c){return Ze(a,b,void 0===c?!0:!!c)},am=function(a,b,c){return 0===hf(a,b,c)},bm=function(a,b){if(Ig()){b&&J(b)}else Rc(a,b)},cm=function(a){return!!xl(a,"init",!1)},dm=function(a){vl(a,"init",!0)},em=function(a,b){var c=(void 0===b?0:b)?"www.googletagmanager.com/gtag/js":Ud;c+="?id="+encodeURIComponent(a)+"&l=dataLayer";P(Kg("https://","http://",c))},fm=function(a,
b){var c=a[b];return c},gm=function(a,b,c){ue&&(Va(a)||ye(c,b,a))};
var hm=ql.gh;function Em(a,b){a=String(a);b=String(b);var c=a.length-b.length;return 0<=c&&a.indexOf(b,c)==c}var Fm=new Aa;function Gm(a,b){function c(h){var k=Ve(h),l=Te(k,"protocol"),m=Te(k,"host",!0),p=Te(k,"port"),r=Te(k,"path").toLowerCase().replace(/\/$/,"");if(void 0===l||"http"==l&&"80"==p||"https"==l&&"443"==p)l="web",p="default";return[l,m,p,r]}for(var d=c(String(a)),e=c(String(b)),f=0;f<d.length;f++)if(d[f]!==e[f])return!1;return!0}
function Hm(a){return Im(a)?1:0}
function Im(a){var b=a.arg0,c=a.arg1;if(a.any_of&&wa(c)){for(var d=0;d<c.length;d++){var e=n(a,{});n({arg1:c[d],any_of:void 0},e);if(Hm(e))return!0}return!1}switch(a["function"]){case "_cn":return 0<=String(b).indexOf(String(c));case "_css":var f;a:{if(b){var h=["matches","webkitMatchesSelector","mozMatchesSelector","msMatchesSelector","oMatchesSelector"];try{for(var k=0;k<h.length;k++)if(b[h[k]]){f=b[h[k]](c);break a}}catch(q){}}f=!1}return f;case "_ew":return Em(b,c);case "_eq":return String(b)==
String(c);case "_ge":return Number(b)>=Number(c);case "_gt":return Number(b)>Number(c);case "_lc":var l;l=String(b).split(",");return 0<=xa(l,String(c));case "_le":return Number(b)<=Number(c);case "_lt":return Number(b)<Number(c);case "_re":var m;var p=a.ignore_case?"i":void 0;try{var r=String(c)+p,t=Fm.get(r);t||(t=new RegExp(c,p),Fm.set(r,t));m=t.test(b)}catch(q){m=!1}return m;case "_sw":return 0==String(b).indexOf(String(c));case "_um":return Gm(b,c)}return!1};var Jm={},Km=encodeURI,Y=encodeURIComponent,Lm=Sc;var Mm=function(a,b){if(!a)return!1;var c=Te(Ve(a),"host");if(!c)return!1;for(var d=0;b&&d<b.length;d++){var e=b[d]&&b[d].toLowerCase();if(e){var f=c.length-e.length;0<f&&"."!=e.charAt(0)&&(f--,e="."+e);if(0<=f&&c.indexOf(e,f)==f)return!0}}return!1};
var Nm=function(a,b,c){for(var d={},e=!1,f=0;a&&f<a.length;f++)a[f]&&a[f].hasOwnProperty(b)&&a[f].hasOwnProperty(c)&&(d[a[f][b]]=a[f][c],e=!0);return e?d:null};Jm.Wg=function(){var a=!1;return a};function qo(){return F.gaGlobal=F.gaGlobal||{}}var ro=function(){var a=qo();a.hid=a.hid||za();return a.hid},so=function(a,b){var c=qo();if(void 0==c.vid||b&&!c.from_cookie)c.vid=a,c.from_cookie=b};var Bo=window,Co=document,Do=function(a){var b=Bo._gaUserPrefs;if(b&&b.ioo&&b.ioo()||a&&!0===Bo["ga-disable-"+a])return!0;try{var c=Bo.external;if(c&&c._gaUserPrefs&&"oo"==c._gaUserPrefs)return!0}catch(f){}for(var d=Xe("AMP_TOKEN",String(Co.cookie),!0),e=0;e<d.length;e++)if("$OPT_OUT"==d[e])return!0;return Co.getElementById("__gaOptOutExtension")?!0:!1};function Go(a){delete a.eventModel[C.qb];Io(a.eventModel)}
var Io=function(a){Ca(a,function(c){"_"===c.charAt(0)&&delete a[c]});var b=a[C.la]||{};Ca(b,function(c){"_"===c.charAt(0)&&delete b[c]})};var Lo=function(a,b,c){qk(b,c,a)},Mo=function(a,b,c){qk(b,c,a,!0)},Oo=function(a,b){};
function No(a,b){}var Z={a:{}};
Z.a.gaawc=["google"],function(){function a(b,c,d){for(var e=0;e<c.length;e++)b.hasOwnProperty(c[e])&&(b[c[e]]=d(b[c[e]]))}(function(b){Z.__gaawc=b;Z.__gaawc.b="gaawc";Z.__gaawc.g=!0;Z.__gaawc.priorityOverride=10})(function(b){var c=String(b.vtp_measurementId),d=Nm(b.vtp_fieldsToSet,"name","value")||{};if(d.hasOwnProperty(C.la)||b.vtp_userProperties){var e=d[C.la]||{};n(Nm(b.vtp_userProperties,"name","value"),e);d[C.la]=e}a(d,C.ie,function(f){return Ea(f)});a(d,C.je,function(f){return Number(f)});
d.send_page_view=b.vtp_sendPageView;rk(d,c);J(b.vtp_gtmOnSuccess)})}();

Z.a.jsm=["customScripts"],function(){(function(a){Z.__jsm=a;Z.__jsm.b="jsm";Z.__jsm.g=!0;Z.__jsm.priorityOverride=0})(function(a){if(void 0!==a.vtp_javascript){var b=a.vtp_javascript;try{var c=X("google_tag_manager");var d=c&&c.e&&c.e(b);gm(d,"jsm",a.vtp_gtmEventId);return d}catch(e){}}})}();

Z.a.d=["google"],function(){(function(a){Z.__d=a;Z.__d.b="d";Z.__d.g=!0;Z.__d.priorityOverride=0})(function(a){var b=null,c=null,d=a.vtp_attributeName;if("CSS"==a.vtp_selectorType){var e=wd(a.vtp_elementSelector);e&&0<e.length&&(b=e[0])}else b=H.getElementById(a.vtp_elementId);b&&(d?c=Vc(b,d):c=Wc(b));return Ga(String(b&&c))})}();
Z.a.e=["google"],function(){(function(a){Z.__e=a;Z.__e.b="e";Z.__e.g=!0;Z.__e.priorityOverride=0})(function(a){return String(Je(a.vtp_gtmEventId,"event"))})}();
Z.a.f=["google"],function(){(function(a){Z.__f=a;Z.__f.b="f";Z.__f.g=!0;Z.__f.priorityOverride=0})(function(a){var b=Xl("gtm.referrer",1)||H.referrer;return b?a.vtp_component&&"URL"!=a.vtp_component?Te(Ve(String(b)),a.vtp_component,a.vtp_stripWww,a.vtp_defaultPages,a.vtp_queryKey):Wl(String(b)):String(b)})}();
Z.a.cl=["google"],function(){function a(b){var c=b.target;if(c){var d=tl(c,"gtm.click");Yl(d)}}(function(b){Z.__cl=b;Z.__cl.b="cl";Z.__cl.g=!0;Z.__cl.priorityOverride=0})(function(b){if(!cm("cl")){var c=X("document");Tc(c,"click",a,!0);dm("cl")}J(b.vtp_gtmOnSuccess)})}();
Z.a.j=["google"],function(){(function(a){Z.__j=a;Z.__j.b="j";Z.__j.g=!0;Z.__j.priorityOverride=0})(function(a){for(var b=String(a.vtp_name).split("."),c=X(b.shift()),d=0;d<b.length;d++)c=c&&c[b[d]];gm(c,"j",a.vtp_gtmEventId);return c})}();

Z.a.u=["google"],function(){var a=function(b){return{toString:function(){return b}}};(function(b){Z.__u=b;Z.__u.b="u";Z.__u.g=!0;Z.__u.priorityOverride=0})(function(b){var c;b.vtp_customUrlSource?c=b.vtp_customUrlSource:c=Xl("gtm.url",1);c=c||Ul();var d=b[a("vtp_component")];if(!d||"URL"==d)return Wl(String(c));var e=Ve(String(c)),f;if("QUERY"===d)a:{var h=b[a("vtp_multiQueryKeys").toString()],k=b[a("vtp_queryKey").toString()]||"",l=b[a("vtp_ignoreEmptyQueryParam").toString()],m;h?wa(k)?m=k:m=String(k).replace(/\s+/g,
"").split(","):m=[String(k)];for(var p=0;p<m.length;p++){var r=Te(e,"QUERY",void 0,void 0,m[p]);if(void 0!=r&&(!l||""!==r)){f=r;break a}}f=void 0}else f=Te(e,d,"HOST"==d?b[a("vtp_stripWww")]:void 0,"PATH"==d?b[a("vtp_defaultPages")]:void 0,void 0);return f})}();
Z.a.v=["google"],function(){(function(a){Z.__v=a;Z.__v.b="v";Z.__v.g=!0;Z.__v.priorityOverride=0})(function(a){var b=a.vtp_name;if(!b||!b.replace)return!1;var c=Xl(b.replace(/\\\./g,"."),a.vtp_dataLayerVersion||1),d=void 0!==c?c:a.vtp_defaultValue;gm(d,"v",a.vtp_gtmEventId);return d})}();
Z.a.ua=["google"],function(){function a(m,p){if(ld()&&!d[m]){var r=function(){var t=Eh(),q="gtm"+ae(),v=k(p),u={name:q};h(v,u,!0);t("create",m,u);t(function(){t.remove(q)})};od(r,C.J);od(r,C.o);d[m]=!0}}var b,c={},d={},e={name:!0,clientId:!0,sampleRate:!0,siteSpeedSampleRate:!0,alwaysSendReferrer:!0,allowAnchor:!0,allowLinker:!0,cookieName:!0,cookieDomain:!0,cookieExpires:!0,cookiePath:!0,cookieUpdate:!0,cookieFlags:!0,legacyCookieDomain:!0,legacyHistoryImport:!0,storage:!0,useAmpClientId:!0,storeGac:!0,
_cd2l:!0},f={allowAnchor:!0,allowLinker:!0,alwaysSendReferrer:!0,anonymizeIp:!0,cookieUpdate:!0,exFatal:!0,forceSSL:!0,javaEnabled:!0,legacyHistoryImport:!0,nonInteraction:!0,useAmpClientId:!0,useBeacon:!0,storeGac:!0,allowAdFeatures:!0,allowAdPersonalizationSignals:!0,_cd2l:!0},h=function(m,p,r){var t=0;if(m)for(var q in m)if(m.hasOwnProperty(q)&&(r&&e[q]||!r&&void 0===e[q])){var v=f[q]?Ea(m[q]):m[q];"anonymizeIp"!=q||v||(v=void 0);p[q]=v;t++}return t},k=function(m){var p={};m.vtp_gaSettings&&n(Nm(m.vtp_gaSettings.vtp_fieldsToSet,
"fieldName","value"),p);n(Nm(m.vtp_fieldsToSet,"fieldName","value"),p);sd(C.J)||(p.storage="none");sd(C.o)||(p.allowAdFeatures=!1,p.storeGac=!1);Tj()||(p.allowAdFeatures=!1);Sj()||(p.allowAdPersonalizationSignals=!1);m.vtp_transportUrl&&(p._x_19=m.vtp_transportUrl);return p},l=function(m){function p(ma,O){void 0!==O&&z("set",ma,O)}var r={},t={},q={},v={};if(m.vtp_gaSettings){var u=
m.vtp_gaSettings;n(Nm(u.vtp_contentGroup,"index","group"),t);n(Nm(u.vtp_dimension,"index","dimension"),q);n(Nm(u.vtp_metric,"index","metric"),v);var w=n(u);w.vtp_fieldsToSet=void 0;w.vtp_contentGroup=void 0;w.vtp_dimension=void 0;w.vtp_metric=void 0;m=n(m,w)}n(Nm(m.vtp_contentGroup,"index","group"),t);n(Nm(m.vtp_dimension,"index","dimension"),q);n(Nm(m.vtp_metric,"index","metric"),v);var y=k(m),x=Gh(m.vtp_functionName);if(ua(x)){var B="",A="";m.vtp_setTrackerName&&"string"==typeof m.vtp_trackerName?
""!==m.vtp_trackerName&&(A=m.vtp_trackerName,B=A+"."):(A="gtm"+ae(),B=A+".");var z=function(ma){var O=[].slice.call(arguments,0);O[0]=B+O[0];x.apply(window,O)},D=function(ma,O){return void 0===O?O:ma(O)},G=function(ma,O){if(O)for(var Ra in O)O.hasOwnProperty(Ra)&&z("set",ma+Ra,O[Ra])},L=function(){},
N={name:A};h(y,N,!0);var T=m.vtp_trackingId||r.trackingId;x("create",T,N);z("set","&gtm",si(!0));ld()&&(z("set","&gcs",td()),a(T,m));y._x_19&&(null==Mc&&delete y._x_19,y._x_20&&!c[A]&&(c[A]=!0,x(Kh(A,String(y._x_20)))));m.vtp_enableRecaptcha&&z("require","recaptcha","recaptcha.js");(function(ma,O){void 0!==m[O]&&z("set",ma,m[O])})("nonInteraction","vtp_nonInteraction");
G("contentGroup",t);G("dimension",q);G("metric",v);var W={};h(y,W,!1)&&z("set",W);var ca;m.vtp_enableLinkId&&z("require","linkid","linkid.js");z("set","hitCallback",function(){var ma=y&&y.hitCallback;ua(ma)&&ma();m.vtp_gtmOnSuccess()});if("TRACK_EVENT"==m.vtp_trackType){
m.vtp_enableEcommerce&&(z("require","ec","ec.js"),L());var I={hitType:"event",eventCategory:String(m.vtp_eventCategory||r.category),eventAction:String(m.vtp_eventAction||r.action),eventLabel:D(String,m.vtp_eventLabel||r.label),eventValue:D(Da,m.vtp_eventValue||r.value)};h(ca,I,!1);z("send",I);}else if("TRACK_SOCIAL"==m.vtp_trackType){}else if("TRACK_TRANSACTION"==m.vtp_trackType){}else if("TRACK_TIMING"==m.vtp_trackType){}else if("DECORATE_LINK"==m.vtp_trackType){}else if("DECORATE_FORM"==m.vtp_trackType){}else if("TRACK_DATA"==
m.vtp_trackType){}else{m.vtp_enableEcommerce&&(z("require","ec","ec.js"),L());if(m.vtp_doubleClick||"DISPLAY_FEATURES"==m.vtp_advertisingFeaturesType){var ka="_dc_gtm_"+String(m.vtp_trackingId).replace(/[^A-Za-z0-9-]/g,"");z("require","displayfeatures",void 0,{cookieName:ka})}if("DISPLAY_FEATURES_WITH_REMARKETING_LISTS"==m.vtp_advertisingFeaturesType){var Oa=
"_dc_gtm_"+String(m.vtp_trackingId).replace(/[^A-Za-z0-9-]/g,"");z("require","adfeatures",{cookieName:Oa})}ca?z("send","pageview",ca):z("send","pageview");m.vtp_autoLinkDomains&&Hh(B,m.vtp_autoLinkDomains,!!m.vtp_useHashAutoLink,!!m.vtp_decorateFormsAutoLink);}if(!b){var Ya=m.vtp_useDebugVersion?"u/analytics_debug.js":"analytics.js";m.vtp_useInternalVersion&&!m.vtp_useDebugVersion&&
(Ya="internal/"+Ya);b=!0;var Qb=ei(y._x_19,"/analytics.js"),Gc=Kg("https:","http:","//www.google-analytics.com/"+Ya,y&&!!y.forceSSL);P("analytics.js"===Ya&&Qb?Qb:Gc,function(){var ma=Eh();ma&&ma.loaded||m.vtp_gtmOnFailure();},m.vtp_gtmOnFailure)}}else J(m.vtp_gtmOnFailure)};(function(m){Z.__ua=m;Z.__ua.b="ua";Z.__ua.g=!0;Z.__ua.priorityOverride=0})(function(m){ud(function(){l(m)},
[C.J,C.o])})}();




Z.a.ytl=["google"],function(){function a(){var u=Math.round(1E9*Math.random())+"";return H.getElementById(u)?a():u}function b(u,w){if(!u)return!1;for(var y=0;y<r.length;y++)if(0<=u.indexOf("//"+r[y]+"/"+w))return!0;return!1}function c(u){var w=-1!==u.indexOf("?")?"&":"?";if(-1<u.indexOf("origin="))return u+w+"enablejsapi=1";if(!q){var y=X("document");q=y.location.protocol+"//"+y.location.hostname;y.location.port&&(q+=":"+y.location.port)}return u+w+"enablejsapi=1&origin="+encodeURIComponent(q)}function d(u,
w){var y=u.getAttribute("src");if(b(y,"embed/")){if(0<y.indexOf("enablejsapi=1"))return!0;if(w)return u.setAttribute("src",c(y)),!0}return!1}function e(u,w){if(!u.getAttribute("data-gtm-yt-inspected-"+w.Cd)&&(u.setAttribute("data-gtm-yt-inspected-"+w.Cd,"true"),d(u,w.Je))){u.id||(u.id=a());var y=X("YT"),x=y.get(u.id);x||(x=new y.Player(u.id));var B=h(x,w),A={},z;for(z in B)A.Wa=z,B.hasOwnProperty(A.Wa)&&x.addEventListener(A.Wa,function(D){return function(G){return B[D.Wa](G.data)}}(A)),A={Wa:A.Wa}}}
function f(u){J(function(){function w(){for(var x=y.getElementsByTagName("iframe"),B=x.length,A=0;A<B;A++)e(x[A],u)}var y=X("document");w();Fl(w)})}function h(u,w){var y,x;function B(){ca=Ql(function(){return{url:R,title:V,Fe:K,yg:u.getCurrentTime(),playbackRate:S}},w.Cd,u.getIframe());K=0;V=R="";S=1;return A}function A(U){switch(U){case t.PLAYING:K=Math.round(u.getDuration());R=u.getVideoUrl();if(u.getVideoData){var ka=u.getVideoData();V=ka?ka.title:""}S=u.getPlaybackRate();w.rg?ca.fc("start"):ca.Uc();
I=m(w.ph,w.oh,u.getDuration());return z(U);default:return A}}function z(){oa=u.getCurrentTime();Q=Tl().getTime();ca.xh();W();return D}function D(U){var ka;switch(U){case t.ENDED:return L(U);case t.PAUSED:ka="pause";case t.BUFFERING:var Oa=u.getCurrentTime()-oa;ka=1<Math.abs((Tl().getTime()-Q)/1E3*S-Oa)?"seek":ka||"buffering";u.getCurrentTime()&&(w.qg?ca.fc(ka):ca.Uc());T();return G;case t.UNSTARTED:return B(U);default:return D}}function G(U){switch(U){case t.ENDED:return L(U);case t.PLAYING:return z(U);
case t.UNSTARTED:return B(U);default:return G}}function L(){for(;x;){var U=y;Rl(x);U()}w.pg&&ca.fc("complete",1);return B(t.UNSTARTED)}function N(){}function T(){x&&(Rl(x),x=0,y=N)}function W(){if(I.length&&0!==S){var U=-1,ka;do{ka=I[0];if(ka.Ha>u.getDuration())return;U=(ka.Ha-u.getCurrentTime())/S;if(0>U&&(I.shift(),0===I.length))return}while(0>U);y=function(){x=0;y=N;0<I.length&&I[0].Ha===ka.Ha&&(I.shift(),ca.fc("progress",ka.Qe,ka.Ue));W()};x=Sl(y,1E3*U)}}var ca,I=[],K,R,V,S,oa,Q,ia=B(t.UNSTARTED);
x=0;y=N;return{onStateChange:function(U){ia=ia(U)},onPlaybackRateChange:function(U){oa=u.getCurrentTime();Q=Tl().getTime();ca.Uc();S=U;T();W()}}}function k(u){for(var w=u.split(","),y=w.length,x=[],B=0;B<y;B++){var A=parseInt(w[B],10);isNaN(A)||100<A||0>A||x.push(A/100)}x.sort(function(z,D){return z-D});return x}function l(u){for(var w=u.split(","),y=w.length,x=[],B=0;B<y;B++){var A=parseInt(w[B],10);isNaN(A)||0>A||x.push(A)}x.sort(function(z,D){return z-D});return x}function m(u,w,y){var x=u.map(function(z){return{Ha:z,
Ue:z,Qe:void 0}});if(!w.length)return x;var B=w.map(function(z){return{Ha:z*y,Ue:void 0,Qe:z}});if(!x.length)return B;var A=x.concat(B);A.sort(function(z,D){return z.Ha-D.Ha});return A}function p(u){var w=!!u.vtp_captureStart,y=!!u.vtp_captureComplete,x=!!u.vtp_capturePause,B=k(u.vtp_progressThresholdsPercent+""),A=l(u.vtp_progressThresholdsTimeInSeconds+""),z=!!u.vtp_fixMissingApi;if(w||y||x||B.length||A.length){var D={rg:w,pg:y,qg:x,oh:B,ph:A,Je:z,Cd:void 0===u.vtp_uniqueTriggerId?"":u.vtp_uniqueTriggerId},
G=X("YT"),L=function(){f(D)};J(u.vtp_gtmOnSuccess);if(G)G.ready&&G.ready(L);else{var N=X("onYouTubeIframeAPIReady");Zl("onYouTubeIframeAPIReady",function(){N&&N();L()});J(function(){for(var T=X("document"),W=T.getElementsByTagName("script"),ca=W.length,I=0;I<ca;I++){var K=W[I].getAttribute("src");if(b(K,"iframe_api")||b(K,"player_api"))return}for(var R=T.getElementsByTagName("iframe"),V=R.length,S=0;S<V;S++)if(!v&&d(R[S],D.Je)){P("https://www.youtube.com/iframe_api");v=!0;break}})}}else J(u.vtp_gtmOnSuccess)}
var r=["www.youtube.com","www.youtube-nocookie.com"],t={UNSTARTED:-1,ENDED:0,PLAYING:1,PAUSED:2,BUFFERING:3,CUED:5},q,v=!1;(function(u){Z.__ytl=u;Z.__ytl.b="ytl";Z.__ytl.g=!0;Z.__ytl.priorityOverride=0})(function(u){u.vtp_triggerStartOption?p(u):qh(function(){p(u)})})}();



Z.a.aev=["google"],function(){function a(q,v){var u=Je(q,"gtm");if(u)return u[v]}function b(q,v,u,w){w||(w="element");var y=q+"."+v,x;if(p.hasOwnProperty(y))x=p[y];else{var B=a(q,w);if(B&&(x=u(B),p[y]=x,r.push(y),35<r.length)){var A=r.shift();delete p[A]}}return x}function c(q,v,u){var w=a(q,t[v]);return void 0!==w?w:u}function d(q,v){if(!q)return!1;var u=e(Ul());wa(v)||(v=String(v||"").replace(/\s+/g,"").split(","));for(var w=[u],y=0;y<v.length;y++){var x=v[y];if(x.hasOwnProperty("is_regex"))if(x.is_regex)try{x=
new RegExp(x.domain)}catch(A){continue}else x=x.domain;if(x instanceof RegExp){if(x.test(q))return!1}else{var B=x;if(0!=B.length){if(0<=e(q).indexOf(B))return!1;w.push(e(B))}}}return!Mm(q,w)}function e(q){m.test(q)||(q="http://"+q);return Te(Ve(q),"HOST",!0)}function f(q,v,u){switch(q){case "SUBMIT_TEXT":return b(v,"FORM."+q,h,"formSubmitElement")||u;case "LENGTH":var w=b(v,"FORM."+q,k);return void 0===w?u:w;case "INTERACTED_FIELD_ID":return l(v,"id",u);case "INTERACTED_FIELD_NAME":return l(v,"name",
u);case "INTERACTED_FIELD_TYPE":return l(v,"type",u);case "INTERACTED_FIELD_POSITION":var y=a(v,"interactedFormFieldPosition");return void 0===y?u:y;case "INTERACT_SEQUENCE_NUMBER":var x=a(v,"interactSequenceNumber");return void 0===x?u:x;default:return u}}function h(q){switch(q.tagName.toLowerCase()){case "input":return Vc(q,"value");case "button":return Wc(q);default:return null}}function k(q){if("form"===q.tagName.toLowerCase()&&q.elements){for(var v=0,u=0;u<q.elements.length;u++)Al(q.elements[u])&&
v++;return v}}function l(q,v,u){var w=a(q,"interactedFormField");return w&&Vc(w,v)||u}var m=/^https?:\/\//i,p={},r=[],t={ATTRIBUTE:"elementAttribute",CLASSES:"elementClasses",ELEMENT:"element",ID:"elementId",HISTORY_CHANGE_SOURCE:"historyChangeSource",HISTORY_NEW_STATE:"newHistoryState",HISTORY_NEW_URL_FRAGMENT:"newUrlFragment",HISTORY_OLD_STATE:"oldHistoryState",HISTORY_OLD_URL_FRAGMENT:"oldUrlFragment",TARGET:"elementTarget"};(function(q){Z.__aev=q;Z.__aev.b="aev";Z.__aev.g=!0;Z.__aev.priorityOverride=
0})(function(q){var v=q.vtp_gtmEventId,u=q.vtp_defaultValue,w=q.vtp_varType;switch(w){case "TAG_NAME":var y=a(v,"element");return y&&y.tagName||u;case "TEXT":return b(v,w,Wc)||u;case "URL":var x;a:{var B=String(a(v,"elementUrl")||u||""),A=Ve(B),z=String(q.vtp_component||"URL");switch(z){case "URL":x=B;break a;case "IS_OUTBOUND":x=d(B,q.vtp_affiliatedDomains);break a;default:x=Te(A,z,q.vtp_stripWww,q.vtp_defaultPages,q.vtp_queryKey)}}return x;case "ATTRIBUTE":var D;if(void 0===q.vtp_attribute)D=c(v,
w,u);else{var G=q.vtp_attribute,L=a(v,"element");D=L&&Vc(L,G)||u||""}return D;case "MD":var N=q.vtp_mdValue,T=b(v,"MD",Ml);return N&&T?Pl(T,N)||u:T||u;case "FORM":return f(String(q.vtp_component||"SUBMIT_TEXT"),v,u);default:var W=c(v,w,u);gm(W,"aev",q.vtp_gtmEventId);return W}})}();Z.a.gas=["google"],function(){(function(a){Z.__gas=a;Z.__gas.b="gas";Z.__gas.g=!0;Z.__gas.priorityOverride=0})(function(a){var b=n(a),c=b;c[Mb.Ea]=null;c[Mb.Nf]=null;var d=b=c;d.vtp_fieldsToSet=d.vtp_fieldsToSet||[];var e=d.vtp_cookieDomain;void 0!==e&&(d.vtp_fieldsToSet.push({fieldName:"cookieDomain",value:e}),delete d.vtp_cookieDomain);return b})}();
Z.a.remm=["google"],function(){(function(a){Z.__remm=a;Z.__remm.b="remm";Z.__remm.g=!0;Z.__remm.priorityOverride=0})(function(a){for(var b=a.vtp_input,c=a.vtp_map||[],d=a.vtp_fullMatch,e=a.vtp_ignoreCase?"gi":"g",f=a.vtp_defaultValue,h=0;h<c.length;h++){var k=c[h].key||"";d&&(k="^"+k+"$");var l=new RegExp(k,e);if(l.test(b)){var m=c[h].value;a.vtp_replaceAfterMatch&&(m=String(b).replace(l,m));f=m;break}}gm(f,"remm",a.vtp_gtmEventId);return f})}();Z.a.smm=["google"],function(){(function(a){Z.__smm=a;Z.__smm.b="smm";Z.__smm.g=!0;Z.__smm.priorityOverride=0})(function(a){var b=a.vtp_input,c=Nm(a.vtp_map,"key","value")||{},d=c.hasOwnProperty(b)?c[b]:a.vtp_defaultValue;gm(d,"smm",a.vtp_gtmEventId);return d})}();



Z.a.paused=[],function(){(function(a){Z.__paused=a;Z.__paused.b="paused";Z.__paused.g=!0;Z.__paused.priorityOverride=0})(function(a){J(a.vtp_gtmOnFailure)})}();

Z.a.html=["customScripts"],function(){function a(d,e,f,h){return function(){try{if(0<e.length){var k=e.shift(),l=a(d,e,f,h);if("SCRIPT"==String(k.nodeName).toUpperCase()&&"text/gtmscript"==k.type){var m=H.createElement("script");m.async=!1;m.type="text/javascript";m.id=k.id;m.text=k.text||k.textContent||k.innerHTML||"";k.charset&&(m.charset=k.charset);var p=k.getAttribute("data-gtmsrc");p&&(m.src=p,Oc(m,l));d.insertBefore(m,null);p||l()}else if(k.innerHTML&&0<=k.innerHTML.toLowerCase().indexOf("<script")){for(var r=
[];k.firstChild;)r.push(k.removeChild(k.firstChild));d.insertBefore(k,null);a(k,r,l,h)()}else d.insertBefore(k,null),l()}else f()}catch(t){J(h)}}}var c=function(d){if(H.body){var e=
d.vtp_gtmOnFailure,f=hm(d.vtp_html,d.vtp_gtmOnSuccess,e),h=f.fd,k=f.H;if(d.vtp_useIframe){}else d.vtp_supportDocumentWrite?b(h,k,e):a(H.body,Xc(h),k,e)()}else Sl(function(){c(d)},
200)};Z.__html=c;Z.__html.b="html";Z.__html.g=!0;Z.__html.priorityOverride=0}();

Z.a.dbg=["google"],function(){(function(a){Z.__dbg=a;Z.__dbg.b="dbg";Z.__dbg.g=!0;Z.__dbg.priorityOverride=0})(function(){return!1})}();




Z.a.lcl=[],function(){function a(){var c=X("document"),d=0,e=function(f){var h=f.target;if(h&&3!==f.which&&!(f.Ug||f.timeStamp&&f.timeStamp===d)){d=f.timeStamp;h=Yc(h,["a","area"],100);if(!h)return f.returnValue;var k=f.defaultPrevented||!1===f.returnValue,l=xl("lcl",k?"nv.mwt":"mwt",0),m;m=k?xl("lcl","nv.ids",[]):xl("lcl","ids",[]);if(m.length){var p=tl(h,"gtm.linkClick",m);if(b(f,h,c)&&!k&&l&&h.href){var r=String(fm(h,"rel")||""),t=!!ya(r.split(" "),function(u){return"noreferrer"===u.toLowerCase()});
t&&E(36);var q=X((fm(h,"target")||"_self").substring(1)),v=!0;if(Yl(p,kl(function(){var u;if(u=v&&q){var w;a:if(t){var y;try{y=new MouseEvent(f.type)}catch(x){if(!c.createEvent){w=!1;break a}y=c.createEvent("MouseEvents");y.initEvent(f.type,!0,!0)}y.Ug=!0;f.target.dispatchEvent(y);w=!0}else w=!1;u=!w}u&&(q.location.href=fm(h,"href"))}),l))v=!1;else return f.preventDefault&&f.preventDefault(),f.returnValue=!1}else Yl(p,function(){},l||2E3);return!0}}};Tc(c,"click",e,!1);Tc(c,"auxclick",e,!1)}function b(c,
d,e){if(2===c.which||c.ctrlKey||c.shiftKey||c.altKey||c.metaKey)return!1;var f=fm(d,"href"),h=f.indexOf("#"),k=fm(d,"target");if(k&&"_self"!==k&&"_parent"!==k&&"_top"!==k||0===h)return!1;if(0<h){var l=Wl(f),m=Wl(e.location);return l!==m}return!0}(function(c){Z.__lcl=c;Z.__lcl.b="lcl";Z.__lcl.g=!0;Z.__lcl.priorityOverride=0})(function(c){var d=void 0===c.vtp_waitForTags?!0:c.vtp_waitForTags,e=void 0===c.vtp_checkValidation?!0:c.vtp_checkValidation,f=Number(c.vtp_waitForTagsTimeout);if(!f||0>=f)f=2E3;
var h=c.vtp_uniqueTriggerId||"0";if(d){var k=function(m){return Math.max(f,m)};wl("lcl","mwt",k,0);e||wl("lcl","nv.mwt",k,0)}var l=function(m){m.push(h);return m};wl("lcl","ids",l,[]);e||wl("lcl","nv.ids",l,[]);cm("lcl")||(a(),dm("lcl"));J(c.vtp_gtmOnSuccess)})}();


var Po={};Po.macro=function(a){if(ql.Rc.hasOwnProperty(a))return ql.Rc[a]},Po.onHtmlSuccess=ql.Ee(!0),Po.onHtmlFailure=ql.Ee(!1);Po.dataLayer=Fe;Po.callback=function(a){Zd.hasOwnProperty(a)&&ua(Zd[a])&&Zd[a]();delete Zd[a]};function Qo(){M[Od.B]=Po;Ka($d,Z.a);Eb=Eb||ql;Fb=Sb}
function Ro(){ad.gtm_3pds=!0;ad.gtag_cs_api=!0;M=F.google_tag_manager=F.google_tag_manager||{};Ti();if(M[Od.B]){var a=M.zones;a&&a.unregisterChild(Od.B);
}else{for(var b=data.resource||{},c=b.macros||[],d=0;d<c.length;d++)xb.push(c[d]);for(var e=b.tags||[],f=0;f<e.length;f++)Ab.push(e[f]);for(var h=b.predicates||[],k=0;k<h.length;k++)zb.push(h[k]);for(var l=b.rules||[],m=0;m<l.length;m++){for(var p=l[m],r={},t=0;t<p.length;t++)r[p[t][0]]=Array.prototype.slice.call(p[t],1);yb.push(r)}Cb=Z;Db=Hm;Qo();pl();lh=!1;mh=0;if("interactive"==H.readyState&&!H.createEventObject||
"complete"==H.readyState)oh();else{Tc(H,"DOMContentLoaded",oh);Tc(H,"readystatechange",oh);if(H.createEventObject&&H.documentElement.doScroll){var q=!0;try{q=!F.frameElement}catch(y){}q&&ph()}Tc(F,"load",oh)}zk=!1;"complete"===H.readyState?Bk():Tc(F,"load",Bk);a:{
if(!ue)break a;F.setInterval(ve,864E5);}Xd=(new Date).getTime();}}
(function(a){a()})(Ro);

})()
