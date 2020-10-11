// Assignment: #1
// Your Name: purvesh biyani
// ASU ID: 1215598839
// ASU Email Address:pbiyani@asu.edu
// Description: File consist of all the linkedlist function such as add remove search etc.

#include <iostream>
#include <iomanip>
#include <string>

using namespace std;

//Food represents a food information
struct Food
{
    string foodName;
    int id;
    double price;
    struct Food* next;
};

//class LinkedList will contains a linked list of foods
class LinkedList
{
    private:
        struct Food* head;

    public:
        LinkedList();
        ~LinkedList();
        bool isFound(int foodId);
        bool add(string foodName, int foodId, double foodPrice);
        bool removeById(int foodId);
        bool removeByName(string foodName);
        bool changeFoodName(int foodId, string newFoodName);
        bool changeFoodPrice(int foodId, double newPrice);
        void printFoodList();
};

//Constructor to initialize an empty linked list
LinkedList::LinkedList()
   
{
    head = NULL;
}

//Destructor
//Before termination, the destructor is called to free the associated memory occupied by the existing linked list.
//It deletes all the nodes including the head and finally prints the number of nodes deleted by it.
//Return value: Prints the number of nodes deleted by it.
LinkedList::~LinkedList()
{
    int foodCount = 0;
    Food* current = head;
    while(current!=NULL){
        current = head->next;
        free(head);
        head = current;
        foodCount++;
    }
    cout << "The number of deleted food items is: " << foodCount <<"\n";
}
//A function to identify whether the parameterized food is inside the LinkedList or not.
//Return true if it exists and false otherwise.
bool LinkedList::isFound(int foodId)
{
     Food* current = head;
	 
    while(current != NULL){
        // we will check if current id is equal to food id then we found what we want
        if(current->id == foodId){
            return true;
        }
        // we will shift current ahead
        current = current->next;
    }
    return false;
	
}

//Creates a new node and inserts it into the list at the right place.
//It maintains an alphabetical ordering of foods by their names. Each
//food item has a unique id, if two food items have exactly the same name,
//then insert it into the list in the increasing order of their IDs.
//Return value: true if it is successfully inserted and false in case of failures.
bool LinkedList::add(string foodName, int foodId, double foodPrice)
{
    // we have assigned the new food entry and we will assign all the values of food id, price and name
    Food* current = head;
    Food* new_Entry = new Food();
    new_Entry->foodName = foodName;
    new_Entry->id = foodId;
    new_Entry->price = foodPrice;
    // If we get the same exact food id then we wont add the duplicate food 
    if(isFound(foodId)) {
        cout<<"Duplicated food item. Not added."<<endl;
        return false;}
    // we will assign the new food entry to head
    if(head == NULL){
        head = new_Entry;
        return true;
    }
    // this is for the first entry of food 
    // We will put the next value in linked list alphabetically and if same food entry then we check by id 
    if(head->foodName > foodName || (head->foodName == foodName && head->id > foodId)){
        new_Entry->next = head;
        head = new_Entry;
        return true;
    }
    // if we want to add the entry somewhere in between
    while(current!=NULL){
        if(current->next != NULL){
            if(current->next->foodName > foodName || (current->next->foodName == foodName && current->next->id > foodId)){
                new_Entry->next = current->next;
                current->next = new_Entry;
                return true;
            }
        }
        else{
            if(current->id != foodId){
                current->next = new_Entry;
                return true;
            }
        }
        current = current->next;
    }
    return false;
}

//Removes the given food by Id from the list, releases the memory and updates pointers.
//Return true if it is successfully removed, false otherwise.
bool LinkedList::removeById(int foodId)
{
    
	//--
    // this is to remove food from the list by its id 
    Food* remove_food = new Food();
    remove_food->next = head;
    Food* current = remove_food;
    bool res = false;
    
    while(current->next != NULL){
        if(head->id == foodId){
            head = head->next;
            res = true;
        }
        // if food id is the id we are looking for to delete then we will increment the pointer by two 
        if(current->next->id == foodId){
            current->next = current->next->next;
            res = true;
        }
        else{
            current = current->next;
        }
    }
    return res;
	//----
    

}

//Removes the given food by name from the list, releases the memory and updates pointers.
//Return true if it is successfully removed, false otherwise. Note: all foods with
//the parameterized name should be removed from the list.
bool LinkedList::removeByName(string foodName)
{
    // this is to remove food from the list by its name
	Food* remove_food = new Food();
    remove_food->next = head;
    Food* current = remove_food;
    bool res = false;
    
    while(current->next != NULL){
        if(head->foodName == foodName){
            head = head->next;
            res = true;
        }
        // if food name is the name we are looking for to delete then we will increment the pointer by two 
        if(current->next->foodName == foodName){
            current->next = current->next->next;
            res = true;
        }
        else{
            current = current->next;
        }
    }
    if(!res) cout<<"No such food name found."<<endl;
    return res;

}

//Modifies the name of the given Food item. Return true if it modifies successfully and
//false otherwise. Note: after changing a food name, the linked list must still be
//in alphabetical order of foods name
bool LinkedList::changeFoodName(int oldFoodId, string newFoodName)
{
	Food* current = head;
    // if current id is equal to the food id then we remove old food id and add the new food name in the list
    while(current->next != NULL){
        if(current->id== oldFoodId ){
            removeById(oldFoodId);
            add(newFoodName,oldFoodId,current->price);
            return true;
        }
         current = current->next;
    }
    return false;
    
}

//Modifies the price of the given food item. Return true if it modifies successfully and
//false otherwise.
bool LinkedList::changeFoodPrice(int foodId, double newPrice)
{
    // if we want to change the food price then we will check the ids and put the new price at place we wa nt to
	Food* current = head;
    while(current->next != NULL){
        if(current->id == foodId ){
            current->price = newPrice;
            return true;
        }
        current = current->next;
        
    }
    return false;
}

//Prints all the elements in the linked list starting from the head node.
void LinkedList::printFoodList()
{
    // this is bascially to print the complete food entries, with proper spacing that we need to do to match the output file
   Food* current = head;
   while(current !=  NULL){
       int length = 8 - current->foodName.length();
       string space = "";
       for(int i = 0 ; i < length ; i++) space.append(" ");
       cout << current->foodName << space << current->id << "      $" << current->price << "\n" ;
        current = current->next;
   }
   if(head==NULL) cout<<"The list is empty"<<endl;
}
