// Import stylesheets
import './style.css';

import 'https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.0/jquery.min.js';

// Write Javascript code!

// *********************************************
// **************** Synchronous ****************
// *********************************************

function A() {
  console.log('A');
}

function B() {
  console.log('B');
}

A();
B();

//A
//B

// **************************************************
// **************** setTimeout() ********************
// **************************************************

function greet() {
  console.log('Hello');
}

function myGreet(name) {
  console.log(`Hello ${name}`);
}

setTimeout(greet, 2000);

//hello ->logs to the console after 2 seconds.
//Wait for 2 seconds...
console.log('Wait for 2 seconds...');

const timeoutId = setTimeout(myGreet, 3000, 'Yoog');
//Hello Yoog ->logs to the console after 3 seconds.
// clearTimeout(timeoutId); //nothing is logged to the console.

// **************************************************
// **************** setInterval() *******************
// **************************************************

function namaste() {
  console.log('Namaste!');
}

// let timeInterval = setInterval(namaste, 2000);
//Logs 'Namaste' in every 2 seconds.

// clearInterval(timeInterval);
// Logs nothing after clearing intervals.

// Recursive setTimeout
// ******************************************

// let timeout = setTimeout(function run(){
//   console.log("I am coming")
//   setTimeout(run, 1000)
// }, 1000);

// clearTimeout(timeout);
// *****************************************

//Equivalent to
// let clearTimer =  setInterval(function run(){
// console.log('I am coming....');
// }, 1000);

// clearInterval(clearTimer);

// **************************************************
// **************** Callbacks *******************
// **************************************************

//examples of callbacks

//example 1
function sayName(name) {
  console.log(`Welcome to Los Angeles, ${name}!`);
}

function greetSomeone(greetFunction) {
  const name = 'Yoog';
  greetFunction(name);
}

greetSomeone(sayName);
// Welcome to Los Angeles, Yoog! -> logged.
// Here the function 'greetSomeone' takes another function 'sayName' as an argument.
// So, 'sayName' is callback function and 'greetSomeone' is considered as higher order function.

//example 2
function callback() {
  document.getElementById('demo').innerHTML = 'Hello World';
}

document.getElementById('btn').addEventListener('click', callback);
//the callback function is executed only when the user clicks on the button.

//example 3
// $.get('url', function (data) {
//   $('.result').html(data);
//   console.log('Load was performed...');
// });

// The callback is executed only after the data fetching is over.
