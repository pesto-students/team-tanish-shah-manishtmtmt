class Person {
  constructor(name, age, gender, nationality) {
    this.name = name;
    this.age = age;
    this.gender = gender;
    this.nationality = nationality;
  }

  introduce() {
    return `My name is ${this.name}, I am ${this.age} years old, I am ${this.gender}, and I am ${this.nationality}.`;
  }
}

// Create three instances of the Person class
const person1 = new Person("John", 25, "male", "American");
const person2 = new Person("Jane", 30, "female", "Canadian");
const person3 = new Person("Bob", 20, "male", "Austrailian");

// Call the introduce method on each instance and print the returned string
console.log(person1.introduce());
console.log(person2.introduce());
console.log(person3.introduce());

class Student extends Person {
  constructor(name, age, gender, nationality, subject) {
    super(name, age, gender, nationality);
    this.subject = subject;
  }

  study() {
    return this.subject;
  }

  introduce() {
    return `My name is ${this.name}, I am ${this.age} years old, I am ${this.gender}, and I am ${this.nationality}. I am studying ${this.subject}.`;
  }
}

// Create an instance of the Student class
const student = new Student(
  "Sarah",
  18,
  "female",
  "British",
  "Computer Science"
);

// Call the introduce method on the Student instance and print the returned string
console.log(student.introduce());
