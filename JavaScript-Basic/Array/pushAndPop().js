//Push - add element in array
//Pop - remove element from array

// let exm = [1,2,3,4];
// exm.pop(3); // argument - index
// console.log(exm);

// exm.push(8,6,7); //argument - elements
// console.log(exm);

//EXERSICE

//Question 1: You have a todo list array. How would you add new tasks to the list and remove the last completed task?

// let taskList = ['Bathing', 'Home-work' ];
// //Add new task
// console.log(taskList);
// taskList.push('Exercise','Coding');
// console.log(taskList);

// //Remove task
// taskList.pop(1);
// console.log(taskList);


// Question 2: Imagine you are building a browser-like application. How would you manage the back and forward navigation history using arrays?
// let history = ["Home", "about us" , "services" , "Contact"];
// let currentPage = history.pop(); // Simulates going back
// console.log(currentPage);
// console.log(history);

// history.push("Blog"); //simulates navigating new page
// console.log(history);


// Question 3: In an e-commerce website, how would you add items to a shopping cart and remove the last added item if the user decides to remove it?
// let Cart = [];
// let newItem = Cart.push("New item"); //If user add new item
// console.log(Cart);
// let removeItem = Cart.pop(); // if user remove item
// console.log(Cart);


// Question 4: How would you implement a basic undo functionality in a text editor using arrays?

// let action = [ "action1" , "action2" , "action3" , "action4"];
// let undoAction = action.pop(); //For undo
// console.log(action);
// let redoAction = action.push(undoAction);
// console.log(action);


// Question 5: How would you manage the songs in a playlist, adding new songs and removing the last played song?

// let playlist = ["song1","song2","song3","song4","song5"];
// playlist.push("newsong");
// console.log(playlist);
// let removedSong = playlist.pop();
// console.log(playlist);

