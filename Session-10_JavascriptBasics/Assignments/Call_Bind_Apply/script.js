class Calculator {
  add(num1, num2) {
    return num1 + num2;
  }

  subtract(num1, num2) {
    return num1 - num2;
  }

  multiply(num1, num2) {
    return num1 * num2;
  }

  divide(num1, num2) {
    if (num2 === 0) return "Error: Division by zero is not allowed.";
    return num1 / num2;
  }
}

class ScientificCalculator extends Calculator {
  square(num) {
    return num ** 2;
  }

  cube(num) {
    return num ** 3;
  }

  power(base, exponent) {
    return Math.pow(base, exponent);
  }
}

// Create an instance of the ScientificCalculator class
const scientificCalculatorInstance = new ScientificCalculator();

// Invoke the "add" method of the Calculator class using the "call" method
const sum = Calculator.prototype.add.call(scientificCalculatorInstance, 10, 5);
console.log("Sum: " + sum); // Sum: 15

// Invoke the "subtract" method of the Calculator class using the "apply" method
const difference = Calculator.prototype.subtract.apply(
  scientificCalculatorInstance,
  [10, 5]
);
console.log("difference: " + difference); // difference: 5

// Create a new method named "multiplyByTwo" using the "bind" method
const multiplyByTwo = Calculator.prototype.multiply.bind(
  scientificCalculatorInstance,
  2
);
const multiplyByTwoResult = multiplyByTwo(4);
console.log(multiplyByTwoResult); // 8

// Create a new method named "powerOfThree" using the "bind" method
const powerOfThree = ScientificCalculator.prototype.power.bind(
  scientificCalculatorInstance,
  3
);
const powerOfThreeResponse = powerOfThree(5);
console.log(powerOfThreeResponse); // 243

// Call the "multiplyByTwo" method with argument 5 and print the result
const result1 = multiplyByTwo(5);
console.log("result: " + result1); // result: 10

const result2 = powerOfThree(2);
console.log("result: " + result2); // result: 9
