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
// let lists = document.querySelectorAll("#tips-list");
// for (let i = 1; i < lists.length; i++) {
//   const newLi = document.createElement("li");

//   lists[i].innerText = handleClick();
//   lists.appendChild(newLi);
// }
let ul = document.querySelector("#tips-list");
let lists = document.querySelectorAll("#tips-list>li");
for (let i = 0; i < lists.length; i++) {
  let newLi = document.createElement("li");
  newLi.innerText = handleClick();
  ul.appendChild(newLi);
}
// There is a list of extra tips to be added to the unordered list with the id of #tips-list
// 👉 Select the tips list
// 👉 Use a for loop to loop through the array of tips
// 👉 for each tip...
// create an li element
// set the innerText of the li element to be the current tip
// append the newly created element as a child of the ul

let extraTips = [
  "Keep your pennies is a glass jar",
  "Save money buy not eating!",
  "Don't let your partner know...",
];
