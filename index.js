// Import stylesheets
import './style.css';

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
// clearInterval(timeInterval);
//Logs 'Namaste' in every 2 seconds.
