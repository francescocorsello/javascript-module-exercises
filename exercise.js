// # Exercise Async Callback

// Write a function called `printAsyncName`, which will take as parameters a callback and a string (which will be name). 
// The callback function will simply print "Hello".
// The `printAsyncName` function will have to execute the callback function after an interval of 1 second. 
// After an interval of 2 seconds, we must print the name that we take as a parameter.

// Tips:

// - The `setTimeout` method will be useful
// - The callback function must be an arrow function, can you also explain why?

let personName = "Mario";

function printAsyncName(callback ,name) {
  callback = setTimeout(() => console.log("Hello"), 1000);
  name = setTimeout(() => { console.log(personName); }, 2000);
}
printAsyncName(() => console.log(callback), personName);