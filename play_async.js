// Panopio, Cy Kirsten D., BSIT3-2, MOBILE//
//? Asych functions are a way to work with asychronous code in a more synchronous way. They are built on top of promises and are syntatic sugar for promises.

//Example 1

console.log("Hello");

setTimeout(() => {
  console.log('Timer is done.');
}, 2000); // The timer waits for 2 seconds before logging the message

console.log('Hi Cy Kirsten');

// This is asynchronous code because "Timer is done." appears after 2 seconds,
// while the other logs ("Hello" and "Hi!") are printed immediately.

// Example 2 
// Example ordsering pizza

console.log("Ordering your pizza...");

// Function that returns a Promise
const pizzaPromise = () => {
  return new Promise((resolve, reject) => {
    let order = false; // Change this to false to test rejection

    if (order) {
      setTimeout(() => {
        resolve("After 5 seconds, Pizza delivered!"); // Pizza delivered successfully
      }, 5000);
    } else {
      setTimeout(() => {
        reject("After 5 seconds, Pizza not delivered!"); // Pizza delivery failed
      }, 5000);
    }
  });
};

// Handling the promise using .then() and .catch()
pizzaPromise()
  .then((result) => {
    console.log(result); // Logs success message
  })
  .catch((error) => {
    console.log(error); // Logs failure message
  });

console.log("Waiting for your pizza...");

// Terminology
// Promise: An object that represents the eventual completion(or faiure) of an asynchronous operation and its resulting value
// Resolve: A callback function that is used when the promise is fulfilled.
// .then(): A method that is used to handle and resolved prmose.
// .catch(): A method that is used to handle rejected promise.
// setTimeout(): A method that is used to simulate a delay.
// Callback function: A function that is passed as an argument to another function, to be "called back" at a later time.