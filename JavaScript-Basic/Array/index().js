//fIn JavaScript, the indexOf method is used to find the index of a particular element in an array or a substring in a string. It returns the first index at which a given element can be found, or -1 if it is not present.

// let fruits = ["apple", "banana", "cherry", "banana"];
// let index1 = fruits.indexOf("banana");
// console.log(index1); // Output: 1

// let index2 = fruits.indexOf("banana", 2);
// console.log(index2); // Output: 3

// let index3 = fruits.indexOf("grape");
// console.log(index3); // Output: -1

// let text = "Hello world, welcome to the universe.";
// let index1 = text.indexOf("world");
// console.log(index1); // Output: 6

// let index2 = text.indexOf("welcome", 10);
// console.log(index2); // Output: 13

// let index3 = text.indexOf("planet");
// console.log(index3); // Output: -1

//EXERCISE
//1.Finding the Position of an Item in a Shopping List
// let shoppingList = ["milk", "bread" , "eggs" , "butter"];
// let itemIndex = shoppingList.indexOf("eggs");
// if (itemIndex !== -1) {
//     console.log(`Eggs are at index ${itemIndex}`);
// }
// else {
//     console.log("Eggs are not in the shopping list")
// }

//2.Checking if a User is in the List of Participants:
// let Participants = ["Anya" , "Ravi" , "Priya" , "Rohan" , "Diya"];
// let user = "Diya";
// if(Participants.indexOf(user) !== -1) {
//     console.log(`${user} is a participant`);
// } else {
//     console.log(`${user} is not participant`);
// }

//3.Detecting the Presence of a Specific Keyword in a Text:
// let documentText = "The quick brown fox jumb over the lazy.";
// let Keyword = "fox";
// if (documentText.indexOf(Keyword) !== -1) {
//     console.log(`The keyword ${Keyword} is found in the text`);
// } else {
//     console(`The keyword ${Keyword} is not found in the text`);
// }
