// 2. Print all no between 1 to 50 using loop
for (let i = 0; i <= 50; i++) {
 if (i % 2 != 0) {
  console.log(i);
 }
}

// 3. write js to find largeat no in an array

let largest = 0;
let arr = [10, 20, 30, 40, 10, 100];

for (let i = 0; i <= arr.length; i++) {
 if (arr[i] > largest) {
  largest = arr[i];
 }
}
console.log("Larget Number  - " + largest);

// 4. Write a program to find the sum of all array 

let array = [1, 2, 3];
let count = 0;
for (let item of array) {
 count += item;
 console.log(count);
}

/*
Question 6 – Count Character 
Write a program to count the number of vowels in a string 
*/

let sen = "Hello This is Aditya, Good Morning."
let vovels = "aeiouAEIOU"
count = 0;
for (let char of sen) {
 if (vovels.includes(char))
  count++;
}
console.log(count)

/*
Question 7 – Given a string: 
let str = "javascript programming"; 
Perform the following: 
1. Convert the string to uppercase 
2. Find the length of the string 
3. Check if the string includes "script"
*/

let st = "javascript programming";
console.log(st.toUpperCase());
console.log(st.length);
console.log(st.search("script"));

/*
Question 8 – Given an array: 
let numbers = [2,4,6,8]; 
Use an array method to create a new array where every number is multiplied by 3.
*/

let numbers = [2, 4, 6, 8];
let ne = numbers.map(n => n * 3)
console.log(ne)

/*
Question 9 –  Given an array: 
let nums = [5,12,8,20,3,15]; 
Use an array method to create a new array containing numbers greater than 10. 
*/

let nums = [5, 12, 8, 20, 3, 15];
let greater = nums.map(n => n > 10)  /* ignore */
console.log(greater)  /* ignore */
let arry = [];
for (let item of nums) {
 if (item > 10) {
  arry.push(item)
 }
}
console.log(arry)
/*
Question 10 - Create a simple program using JavaScript functions and buttons. 
a) Create four JavaScript functions:  add(), subtract() , multiply() , divide() 
b) Create four buttons in HTML: Add , Subtract , Multiply, Divide
*/

function add(a, b) {
 console.log(a + b)
 let p = document.createElement("p");
 document.body.append(p)
 p.innerText = a + b

}
function subtract(a, b) {
 console.log(a - b)
 let p = document.createElement("p");
 document.body.append(p)
 p.innerText = a - b
}
function multiply(a, b) {
 console.log(a * b)
 let p = document.createElement("p");
 document.body.append(p)
 p.innerText = a * b
}
function divide(a, b) {
 console.log(a / b)
 let p = document.createElement("p");
 document.body.append(p)
 p.innerText = a / b
}

/*
Question 11 – Using JavaScript: 
1. Create a new div element 
2. Add the text "Welcome Students" 
3. Append it to the body of the webpage 
*/
let div = document.createElement("div");
div.innerText = "Welcome Students";
document.body.append(div)

/*
Question 12 –  Create a button using JavaScript. 
When the button is clicked: 
• Show an alert message – button clicked 
When the button id clicked twice 
• Show alert message – button  double clicked  
Use addEventListener(). 
*/
let btn = document.createElement("button");
btn.innerText = "Alert Button"
document.body.append(btn);
btn.addEventListener("click", () => {
 alert("Button is Clickded!")
})

/*
Question 13 - Create a Dark Mode Toggle Button. 
When clicked: 
• Switch between dark theme and light theme by toggling a class.
*/