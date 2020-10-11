//********************************************************
// Assignment: ASU CSE310 HW#3
// Your Name: Purvesh Biyani
// ASU ID: 1215598839
// ASU Email address: pbiyani@asu.edu
// Description: All the methods of heap are displayed in this 
//********************************************************
#include <iostream>
#include <iomanip>
#include <string>
#include <cmath>
#include <climits>


using namespace std;

//Food represents a food. Each food with a unique key
struct Food
{
	int key;
	string foodName;
	double price;
};

//class Heap represents a Max heap that contains Food objects. Underline data structure is
//a one dimensional array of Food objects.
class Heap
{
    private:
	struct Food* foodArr;	//an array of Food
	int capacity, size;

    public:
	Heap(int capacity);
	~Heap();
	Food* getFoodArr();
	int getSize();
	int getCapacity();
	int isFound(int foodKey);
	bool increaseKey(int index, Food oneFoodwithNewKey);
	bool increasePrint(int index, int key, int newKey, Food oneFoodwithNewKey);
	bool insert(int key, string foodName, double foodPrice);
	void heapify(int index);
	Food getHeapMax();
	void extractHeapMax();
	int leftChild(int parentIndex);
	int rightChild(int parentIndex);
	int parent(int childIndex);
	void printHeap();
};

//Constructor to dynamically allocate memory for a heap with the specified capacity
Heap::Heap(int capacity)
{
 	//----
 	//----
	this->capacity = capacity;
	size = 0;
	foodArr = new Food[capacity];

};

//Destructor
//Before termination, the destructor is called to free the associated memory occupied by the heap.
//and prints the number of nodes deleted by it.
Heap::~Heap()
{
	int foodCount = 0;
	foodCount = size;
	cout << "\nThe number of deleted food items is: " << foodCount << endl;
};

//Finish all the remaining functions according to the project's description
//----
//----
Food* Heap :: getFoodArr(){
	return foodArr;
};	
int Heap::getSize(){
	return this->size;
};	
int Heap :: getCapacity(){
	return this->capacity;
}	
int Heap :: isFound(int foodKey){
	for(int i = 0; i < size ; i++){
		if(foodArr[i].key == foodKey){
			return i;
		}
	}
	return -1;
}	
// swap function 
void swap(Food  &x, Food &y){
	Food temp = x;
	x= y;
	y = temp;
}

int Heap :: leftChild(int parentIndex){
	return 2 * parentIndex + 1;
}
int Heap :: rightChild(int parentIndex)	{
	return 2 * parentIndex + 2;
}
int Heap :: parent(int childIndex){
		return (childIndex - 1)/2;

}	

// increase key
bool Heap :: increaseKey(int index, Food foodwithNewKey){
			if( foodwithNewKey.key < foodArr[index].key ){
		 			cout << "\nIncrease key error: new key is smaller than current key\n";
					 return false;
			}
			foodArr[index] = foodwithNewKey;
			while(index > 0 && foodArr[parent(index)].key < foodArr[index].key ){
				swap(foodArr[index] ,foodArr[parent(index)] );
				index = parent(index);
			}
			return true;
}
// it prints the heap content before and after insert key inside the increase key function
bool Heap :: increasePrint(int index, int key, int newKey, Food foodwithNewKey){
	if( foodwithNewKey.key < foodArr[index].key ){
		 			cout << "\nIncrease key error: new key is smaller than current key\n";
					return false;
			}
			cout<< "\nBefore increase key operation:\n";
			printHeap();

			cout<<"\nFood with old key: " << key  << " is increased to new key: " <<newKey<<"\n";
			foodArr[index] = foodwithNewKey;
			while(index > 0 && foodArr[parent(index)].key < foodArr[index].key ){
				swap(foodArr[index] ,foodArr[parent(index)] );
				index = parent(index);
			}
			cout<<"\nAfter increase key operation:\n";
			printHeap();
			return true;
}
// insergt in heap 
bool Heap :: insert(int key, string foodName, double foodPrice){

	if(isFound(key)!=-1){
		cout<< "\nDuplicated food item. Not added\n";
		return false;
	}
	// doubling the heap capacity 
	if(this->size == this->capacity){
			cout <<"\nReach the capacity limit. Double the capacity\n";
			Food * arr;
			this->capacity = 2*this->capacity;
			arr = new Food[this->capacity];
		for(int i =0; i< size; i++){
			arr[i] = foodArr[i];
		}
		// deleting the old food array
		delete[] foodArr;
		foodArr = arr;
		cout << "\nThe new capacity now is "<<capacity<<"\n";
	}
		// inserting the food 
		int min = INT_MIN;
		Food food ;
		food.key = min;
		food.foodName = foodName;
		food.price = foodPrice;
		size = size+1;
		foodArr[getSize() - 1] = food ;
		food.key = key;
		increaseKey(getSize() - 1, food);
		return true;

}
// heapify
void Heap ::  heapify(int index)	{
		int l = leftChild(index);
		int r = rightChild(index);
		int largest = 0;
		if(l < getSize() && foodArr[l].key > foodArr[index].key ){
			largest = l;
		}
		else{
			largest = index;
		}
		if(r < getSize() && foodArr[r].key > foodArr[largest].key ){
			largest = r;
		}
		if(largest != index ){
			swap(foodArr[index] , foodArr[largest]);
			heapify(largest);
		}

}
// extract heap max 
void Heap :: extractHeapMax(){
	Food max;
	if(getSize() < 1  ){
		cout <<"heap underflow";
	}
	max = foodArr[0];
	foodArr[0] = foodArr[getSize() - 1];
	size = size -1;
	heapify(0);
}	
// get heap max
Food Heap :: getHeapMax(){
	return foodArr[0];
}
// print the heap 
void Heap::printHeap()
{
	cout<<"\nHeap capacity = "<<capacity<<"\n";
	cout<<"\nHeap size = "<<size<<"\n\n";
	//----
	for(int i =0; i < size; i++){
	cout << left;
	cout << setw(5) << foodArr[i].key
         << setw(8) << foodArr[i].foodName
         << setw(8) << fixed << setprecision(2) << foodArr[i].price << endl;
	}
}
