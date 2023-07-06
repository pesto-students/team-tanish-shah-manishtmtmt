// Section 1 - Inheritance
class Vehicle {
  constructor(make, model, year, color) {
    this.make = make;
    this.model = model;
    this.year = year;
    this.color = color;
  }

  drive() {
    console.log(`Driving ${make} ${model}.`);
  }
}

class Car extends Vehicle {
  constructor(make, model, year, color, numSeats) {
    super(make, model, year, color);
    this.numSeats = numSeats;
  }
}

class RideShareCar extends Car {
  constructor(make, model, year, color, numSeats, isAvailable) {
    super(make, model, year, model, numSeats);
    this.isAvailable = isAvailable;
  }
}

// Section 2 - Polymorphism
class Shape {
  calculateArea() {}
}

// create subclass Rectangle which extends Shape
class Rectangle extends Shape {
  calculateArea(width, height) {
    return width * height;
  }
}

// create subclass Trangle which extends Shape
class Triangle extends Shape {
  calculateArea(base, height) {
    return (base * height) / 2;
  }
}

// create subclass Circle which extends Shape
class Circle extends Shape {
  calculateArea(radius) {
    return Math.PI * radius * radius;
  }
}

// Instance of Rectangle subclass
const rectangle1 = new Rectangle();
console.log(rectangle1.calculateArea(10, 8));

// Instance of triangle subclass
const triangle1 = new Triangle();
console.log(triangle1.calculateArea(5, 6));

// Instance of circle subclass
const circle1 = new Circle();
console.log(circle1.calculateArea(10));


// Section 3 - Abstraction and encpasulation
class BankAccount {
  #accountNumber;
  #balance;
  #accountHolderName;

  constructor(accountNumber, balance, accountHolderName) {
    this.#accountNumber = accountNumber;
    this.#balance = balance;
    this.#accountHolderName = accountHolderName;
  }

  get accountHolderName() {
    return this.#accountHolderName;
  }

  // Protected method to modify the balance
  _deposit(amount) {
    this.#balance += amount;
  }

  // Protected method to modify the balance
  _withdraw(amount) {
    this.#balance -= amount;
  }

  // Protected method to retrieve the balance
  _getBalance() {
    return this.#balance;
  }
}

// CheckingAccount subclass extends BankAccount
class CheckingAccount extends BankAccount {
  deposit(amount) {
    this._deposit(amount);
  }

  withdraw(amount) {
    this._withdraw(amount);
  }

  getBalance() {
    return this._getBalance();
  }
}

// SavingAccount subclass extends BankAccount
class SavingsAccount extends BankAccount {
  deposit(amount) {
    this._deposit(amount);
  }

  withdraw(amount) {
    if (this._getBalance() - amount < 0) {
      console.log("Insufficient balance, failed to withdraw amount.");
      return;
    }
    this._withdraw(amount);
  }

  getBalance() {
    return this._getBalance();
  }
}

// Instance of BankAccount
const person1 = new BankAccount("1234", 12345, "ABC");
console.log(person1.accountHolderName);

// Instance of CheckingAccount
const checking = new CheckingAccount("5678", 1000, "John");
checking.deposit(500);
console.log(checking.getBalance());

// Instance of SavingAccount
const savings = new SavingsAccount("9876", 2000, "Jane");
savings.withdraw(3000);
console.log(savings.getBalance());