 //UnShift - adds one or more elements to the begninning of an array and returns the new length of the array.

//  let fruits = ["banana", "cherry"];
// let newLength = fruits.unshift("apple");
// console.log(fruits);    // Output: ["apple", "banana", "cherry"]
// console.log(newLength); // Output: 3

//Shift method - The shift method removes the first element from an array and returns that removed element. This method changes the length of the array.

// let fruits = ["apple", "banana", "cherry"];
// let firstFruit = fruits.shift();
// console.log(firstFruit); // Output: "apple"
// console.log(fruits);     // Output: ["banana", "cherry"]

//EXERCISE 
//1.Managing a Task Queue
//You are building a task management system where tasks need to be processed in the order they were added. You need to remove the next task to be processed from the front of the queue and add new tasks to the front.

// let taskQueue = ["task1" , "task2" , "task3"];
// //Processing the next task
// let currentTask = taskQueue.shift();
// console.log(`Processing : ${currentTask}`); //Output: Processing: task1

// //Adding a high - priority task to the front
// taskQueue.unshift("highPriorityTask");
// console.log(taskQueue);

//2. Implementing a Simple History Function
//You are creating a browser history feature where you need to keep track of the pages visited. When the user goes back, you remove the last visited page from the front, and when they visit a new page, you add it to the front.
// let history = ["Page-4", "Page-3" , "Page-2" , "Page-1"];
//  // User goes back
//  let lastVisited = history.shift();
//  console.log(`Last visited : ${lastVisited}`); // Output - page-4

// //user visit a new page 
// history.unshift("new page");
// console.log(history);