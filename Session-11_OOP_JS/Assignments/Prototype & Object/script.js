// Section 1 - Protecting the object

const person = {};

Object.defineProperty(person, 'name', {
    value: 'John Doe',
    writable: false,
})

Object.defineProperty(person, "age", {
    writable: true,
})

Object.defineProperty(person, "email", {
  value: "johndoe@example.com",
  writable: false,
});

Object.defineProperty(person, 'getAge', {
    value: function() {
        return this.age;
    }
});

Object.defineProperty(person, 'setAge', {
    value: function(newAge) {
        this.age = newAge;
    }
})

// Testing the object

console.log(person.name); // Output: "John Doe"
console.log(person.email); // Output: "johdoe@example.com"

person.age = 25;
console.log(person.age); // Output: 25

person.setAge(30);
console.log(person.getAge()); // Output: 30

person.name = "Jane Smith"; // Trying to modify the read-only property
console.log(person.name); // Output: "John Doe" (unchanged)

person.email = "janesmith@example.com"; // Trying to modify the read-only properyty
console.log(person.email); // Output: "johndoe@example.com" (unchanged)

// Section 2 - JavaScript Prototype

class Vehicle {
    constructor (make, model, year) {
        this.make = make;
        this.model = model;
        this.year = year;
    }
}

// Method to get vehicle details
Vehicle.prototype.getDetails = function() {
    return `Make: ${this.make}, Model: ${this.model}, Year: ${this.year}`;
}

// subclass Car extends Vehicle
class Car extends Vehicle {
  constructor(make, model, year, numDoors) {
    super(make, model, year);
    this.numDoors = numDoors;
  }
}

// Override getDetails() method
Car.prototype.getDetails = function() {
    return `${Vehicle.prototype.getDetails.call(this)}, Number of doors: ${this.numDoors}`;
}

// Create instances
const vehicle = new Vehicle('Toyota', 'Camry', 2021);
const car = new Car('Ford', 'Mustang', 2022, 2);

// Call getDetails() on each instance
console.log(vehicle.getDetails());
console.log(car.getDetails());