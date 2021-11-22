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

let extraTips = [
  "Keep your pennies is a glass jar",
  "Save money buy not eating!",
  "Don't let your partner know...",
];
