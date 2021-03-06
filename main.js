//////////// TASK 1 -A function called on click
let pennies = 1;
const output = document.querySelector("output");

// When handleClick() function is called,
// Make pennies double

function handleClick() {
  console.log("Im just to prove it's working!");
  // Double the number of pennies
  pennies = pennies * 2;
  console.log(pennies);
  // display in the output tag
  return (output.innerText = `${pennies} pennies`);
}

//////////// TASK 2 - selecting and changing text
let quoteClass = document.querySelector(".quote");
quoteClass.innerText = "It's raining man!";

//////////// TASK 3

// 👉 Select the h1 tag using querySelector and store in variable.
let h1 = document.querySelector("h1");
// 👉 Change its text-decoration property to the value of underline.
h1.style.textDecoration = "underline";

//Task 4

let extraTips = [
  "Keep your pennies is a glass jar",
  "Save money buy not eating!",
  "Don't let your partner know...",
];
let lists = document.querySelector("#tips-list");
for (let i = 0; i < extraTips.length; i++) {
  const newLi = document.createElement("li");
  newLi.innerText = extraTips[i];
  lists.appendChild(newLi);
}

// There is a list of extra tips to be added to the unordered list with the id of #tips-list
// 👉 Select the tips list
// 👉 Use a for loop to loop through the array of tips
// 👉 for each tip...
// create an li element
// set the innerText of the li element to be the current tip
// append the newly created element as a child of the ul

///////////// TASK 5
/*
This does not need to be in a function. yet...

Not all aspects of the page need to accessed with querySelector, some have shortcuts on the document object.

👉 Change the title property of the document by assigning it a new value.
*/

document.title = "Test";

// Task 6
// 👉 Put the code from Task 5 in a function.

// 👉 Have that function called on the click of the button with id #click-me
function clickButton() {
  document.title = "You clicked";
}
let btnClick = document.querySelector("#click-me");
btnClick.addEventListener("click", clickButton);

// Task 7
// 👉 Add an input field, and a new button to the html.

// 👉 Write a function that sets the h1's innerText to be whatever is in the input field.
let input = document.createElement("input");
input.setAttribute("type", "text");
document.body.appendChild(input);

let inputBtn = document.createElement("button");
let btnText = document.createTextNode("Submit");
inputBtn.appendChild(btnText);
document.body.appendChild(inputBtn);

function inputFunction() {
  h1.innerText = input.value;
}
inputBtn.addEventListener("click", inputFunction);
