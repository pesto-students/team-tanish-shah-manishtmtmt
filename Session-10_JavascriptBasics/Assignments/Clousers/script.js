// This function returns a function that increments a private variable "count"
function counter() {
  let count = 0; // this variable is private to the inner function

  // This is the inner function that increments and returns the private variable
  function incrementCounter() {
    count++; // Holds the reference of count even if the context is lost
    return count;
  }

  // Returning the inner function as a result of the outer function
  return incrementCounter;
}

// creating the instace of "counter" function and assign to variable named "firstCounter"
const firstCounter = counter();

// creating the instance of "counter" function and assign to variable named "secondCounter"
const secondCounter = counter();

// creating an empty array named "firstValues" to store the returned values of "firstCounter"
let firstValues = [];

// creating an empty array named "secondValues" to store the returned values of "secondCounter"
let secondValues = [];

// calling the "firstCounter" function five times
for (let i = 1; i <= 5; i++) {
  firstValues.push(firstCounter());
}

// printing the "firstValues"
console.log(firstValues); // [1, 2, 3, 4, 5]

// calling the "secondCounter" function three times
for (let i = 1; i <= 3; i++) {
  secondValues.push(secondCounter());
}

// printing the "secondValues"
console.log(secondValues); // [1, 2, 3]
