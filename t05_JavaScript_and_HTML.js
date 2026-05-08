/****************************
Header
****************************/

console.log("Running task 05...");
console.log("My name is Abhik.");

// Variables

const OUTPUT = document.getElementById("spaceForJavaScriptOutput");

let pocketMoney = 20;
let name = "Abhik";
let age = 15;
let currentYear = 2026;

let birthYear = currentYear - age;
let futureAge = age + 10;
let spendHalf = pocketMoney / 2;
let getThree = spendHalf + 3;

/******************************
 Main code
 ******************************/

OUTPUT.innerHTML = "<h2>Personal Information Task</h2>";
OUTPUT.innerHTML += "<p>Hi " + name + "</p>";
OUTPUT.innerHTML +=
  "<p>As of " + currentYear + " you are " + age + " years old</p>";
OUTPUT.innerHTML += "<p>You were born in " + birthYear + "</p>";
OUTPUT.innerHTML +=
  "<p>In 10 years you will be " + futureAge + " years old</p>";
OUTPUT.innerHTML += "<p>You have " + pocketMoney + " dollars</p>";
OUTPUT.innerHTML +=
  "<p>You spend half of your money, now you have " + spendHalf + "</p>";
OUTPUT.innerHTML += "<p>Then you get $3, now you have " + getThree + "</p>";

/******************************
Functions
 ******************************/
