/****************************
Header
****************************/

console.log("Running task 09...");
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

welcome(name, age);

OUTPUT.innerHTML += "<h2>Personal Information Task</h2>";
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
OUTPUT.innerHTML += "<h2>My Cafe</h2>";
displayProduct("Chocolate bar", 4);
displayProduct("Chips", 3);
displayProduct("Drink", 2.5);

/******************************
 Functions
 ******************************/

function welcome(_name, _age) {
  OUTPUT.innerHTML = "<h1>Welcome to the shop " + _name + "</h1>";
  OUTPUT.innerHTML += "<p>You are " + _age + " years old.</p>";
}

function displayProduct(_item, _price) {
  OUTPUT.innerHTML += "<p>" + _item + ": $" + _price + "</p>";
}
function start() {
  spaceForJavaScriptOutput.innerHTML;
  spaceForJavaScriptOutput.innerHTML;
  answer = currentYear - age;
  spaceForJavaScriptOutput.innerHTML;
}
