// this is single line comment

/*
This is 
multi
line comment
*/

// loggin in console
// console.log("hello world");
// printing error in console
// console.error("I am an error");
// printing warning in console
// console.warn("I am a warning");

// variable keywords
// var, let , const

// issue with var keyword's global scope
/* for (var i = 0; i < 10; i++) {
  console.log(i);
}
// i is accessible outside for loop as well
console.log(i); */

// global scope fix with let keyword
/* for (let i = 0; i < 10; i++) {
  console.log(i);
}
// i is not accessible here
console.log(i); */

/* 
// defining a constant
const thisIsConstant = 10;
// this is not allowed
thisIsConstant = 11;
console.log(thisIsConstant); */

// common datatypes in javascript
// String, Number, Boolean, null, undefined
/* const studentName = "Manish";
const studentRollNum = 11;
const isPresent = true;
const fees = null;
const age = undefined;

// use of typeof keyword
console.log(typeof age); */

// Strings //
/* const greeting = "Hello World This Is My First Program";
//const subStr = greeting.substring(0, 5);
console.log(greeting.split(" ").length); */

// Arrays //
/* const rollNumbers = [11, 12, 13, 14, 15, 16, 17, 18, 11];
console.log(rollNumbers);
rollNumbers.push(14);
console.log(rollNumbers);

rollNumbers.pop(14);
console.log(rollNumbers);

rollNumbers[2] = 22;
console.log(rollNumbers);

console.log(rollNumbers.slice(0, 4));

rollNumbers.unshift(100);
console.log(rollNumbers);

rollNumbers.sort((a, b) => a - b);
console.log(rollNumbers); */

// Objects //
/* const student = {
  name: "John",
  age: 23,
  fees: undefined,
  datesWhenAbsent: [2, 5, 17, 19],
  address: {
    street: "2nd  street",
    pincode: "324345",
    city: "abc",
  },
};

console.log(Object.values(student));
console.log(student["isPresent"]);

delete student["fees"];
console.log(Object.values(student));

console.log("John was absent on -", student.datesWhenAbsent);

const students = [
  student,
  {
    name: "Harry",
    age: 21,
    fees: undefined,
    datesWhenAbsent: [5, 9],
    address: {
      street: "22nd  street",
      pincode: "324445",
      city: "xyz",
    },
  },
];

console.log("Students " + JSON.stringify(students));
*/

// String concatenation //
// console.log(`My name is ${student.name} and my age is ${student.age}`);

// functions //
/* function greet() {
  console.log("Hello World");
} */

// functions assigned to variable
/* const greet = function () {
  console.log("Hello World");
}; */

// Arrow functions
/* const greet = () => {
  console.log("Hello World");
}; */

/*
const students = [];
// defining a function
const addStudent = (stuName, stuAge, stuDatesWhenAbsent, stuAddress) => {
  const student = {
    name: stuName,
    age: stuAge,
    datesWhenAbsent: stuDatesWhenAbsent,
    address: stuAddress,
  };
  students.push(student);
};
// calling a function
addStudent("John", 23, [5, 9], {
  street: "22nd Street",
  pincode: "234567",
  city: "NY",
});

addStudent("Harry", 21, [15, 19], {
  street: "21st Street",
  pincode: "256567",
  city: "SF",
});

console.log(`Total students: ${students.length}`);
console.log(JSON.stringify(students));

const sum = (a, b) => a + b;

console.log(sum(4, 5));
console.log(sum(4, 51));
console.log(sum(14, 5));
console.log(sum(4, 15)); 
*/

// Operators //
// assignment op
/* let x = 9;
x = 19;
console.log(x); */

// addition op
/* const x = 9;
const y = 19;
let z = x + y;
console.log(z); */

// subtraction op
/* const x = 9;
const y = 19;
let z = x - y;
console.log(z); */

// multiplication op
/* const x = 9;
const y = 19;
let z = x * y;
console.log(z); */

// division op
/* const x = 9;
const y = 19;
let z = x / y;
console.log(z); */

// compound op //

/* let x = 9;
x /= 8; // this is same as x=x/8;
console.log(x); */

// operator with different datatype
/* const x = 9;
const y = "John";
let z = x / y;
console.log(z); */

// comparision op //
/* const x = 9;
const y = 10;
// equals op
console.log(x == y);
// strict equals op
console.log(x === y);
// not equals
console.log(x != y);
// strict not equals
console.log(x !== y);

// greater than
console.log(x > y);

// less than
console.log(x < y);

// greater than and equals to
console.log(x >= y);

// less than and equals to
console.log(x <= y); */

// Artihmetic op //
/* let x = 9;
let y = 10; */

// remainder op %
//console.log(x % y);

// increment op ++
/* console.log(x++);
console.log(++y); */

// decrement op --
/* console.log(x--);
console.log(--y); */

// conditional statement//

// if-else statement
/* const x = 9;
const y = 9;

if (x > y) {
  console.log(" x is bigger");
} else if (x < y) {
  console.log(" y is bigger");
} else {
  console.log(" y is equals to x");
} */

/* const doIHaveBreathingProblem = false;
const haveILostSmell = true;
const haveILostTaste = true; */

// if all 3 are true > positive, else negative

/* if (doIHaveBreathingProblem && haveILostSmell && haveILostTaste) {
  console.log("positive");
} else {
  console.log("negative");
} */

// i am positive if
// I have breathing problem
// OR if i have lost smell and taste

/* if (doIHaveBreathingProblem || (haveILostSmell && haveILostTaste)) {
  console.log("positive");
} else {
  console.log("negative");
}
 */

// Ternary operator //
/* const x = 10;
const y = 10;

// nested ternary operator
x > y
  ? console.log("X is bigger")
  : x < y
  ? console.log("Y is bigger")
  : console.log("both are equal"); */

// switch case statement //
//const dayOfWeek = 6;

/* switch (dayOfWeek) {
  case 1:
    console.log("Monday");
    break;
  case 2:
    console.log("Tuesday");
    break;
  case 3:
    console.log("Wednesday");
    break;
  case 4:
    console.log("Thursday");
    break;
  case 5:
    console.log("Friday");
    break;
  case 6:
    console.log("Saturday");
    break;
  case 7:
    console.log("Sunday");
    break;
  default:
    console.log("Invalid");
    break;
} */

/* switch (dayOfWeek) {
  case 1:
  case 2:
  case 3:
  case 4:
  case 5:
    console.log("Workday");
    break;
  case 6:
  case 7:
    console.log("Weekend");
    break;
  default:
    console.log("Invalid");
    break;
}
 */

// loops in JS //

// for loop
/* for (let x = 0; x < 10; x++) {
  console.log(x);
}*/
// while loop
/* let x = 0;
while (x < 0) {
  console.log(x);
  x++;
} */
// do-while loop
/* let x = 0;
do {
  console.log(x);
  x++;
} while (x < 0); */

// iterating over an array
/* const student = ["John", "Harry", "Ron", "Aragorn", "Gimli"];
for (let x = 0; x < student.length; x++) {
  if (x === 1) continue;
  console.log(student[x]);

  //if (x === 3) break;
} */

/* const students = [
  {
    name: "John",
    age: 23,
    isPresent: true,
  },
  {
    name: "Aragorn",
    age: 56,
    isPresent: true,
  },
  {
    name: "Gimli",
    age: 34,
    isPresent: false,
  },
  {
    name: "Harry",
    age: 16,
    isPresent: true,
  },
  {
    name: "Ron",
    age: 17,
    isPresent: false,
  },
]; */

// for of loop - mainly used to iterate over arrays
/* for (let student of students) {
  console.log(student.age);
}
 */
/* const student = {
  name: "Harry",
  age: 21,
  fees: undefined,
  datesWhenAbsent: [5, 9],
  address: {
    street: "22nd  street",
    pincode: "324445",
    city: "xyz",
  },
}; */

// for in loop- mainly used to iterate over an object
/* for (let prop in student) {
  console.log(`${prop} : ${student[prop]}`);
} */

// forEach function
/* students.forEach(function (student) {
  console.log(student.name);
}); */

// map function
/* const newArr = students.map(function (student) {
  return student.age;
}); */

// filter function
/* const newArr = students
  .filter((student) => {
    return student.isPresent === false;
  })
  .map((student) => student.name);
console.log(newArr); */

// ES6 Spread Syntax //
/* const class2020 = [
  {
    name: "John",
    age: 23,
    isPresent: true,
  },
  {
    name: "Aragorn",
    age: 56,
    isPresent: true,
  },
  {
    name: "Gimli",
    age: 34,
    isPresent: false,
  },
  {
    name: "Harry",
    age: 16,
    isPresent: true,
  },
  {
    name: "Ron",
    age: 17,
    isPresent: false,
  },
];

const class2021 = [
  {
    name: "Legolas",
    age: 32,
    isPresent: false,
  },
]; */

/* // combining 2 arrays
const totalStudents = [...class2020, ...class2021];
console.log(totalStudents);

// destructing
const [j, a, g] = totalStudents;
console.log(j);
console.log(a);
console.log(g); */

/* const stu1 = {
  name: "John",
  age: 23,
};

const stu2 = {
  isPresent: false,
}; */

// combining 2 object
/* const student = { ...stu1, ...stu2, age: 30 };
console.log(student); */

// destructing
/* const { name, isPresent } = student;
console.log(name);
console.log(isPresent); */

// JSON Object
/* const student = {
  "age": 23,
  "name": "John",
};

console.log(JSON.stringify(student));
const studentString = '{"age":23, "name":"John"}';
console.log(typeof studentString);
const stuJson = JSON.parse(studentString);
console.log(typeof stuJson);
console.log(stuJson);
 */

/* const name = new String("John");
console.log(name); */

// OOPS in JS //

// constructor function
/* function Student(studentName, studentDob, studentSection) {
  this.name = studentName;
  this.dob = studentDob;
  this.section = studentSection;
}

Student.prototype.greet = function () {
  console.log(`Hello ${this.name}`);
};
Student.prototype.getAge = function () {
  const dob = new Date(this.dob);
  const difference = Math.abs(new Date() - dob) / (1000 * 60 * 60 * 24);
  return difference / 365;
};

const student1 = new Student("John", "3-4-1992", "A2001");
const student2 = new Student("Aragorn", "7-4-1982", "B2001");
console.log(student2);

student2.greet();
console.log(Math.floor(student2.getAge()));
 */

// ES6 class syntax
/* class Student {
  constructor(studentName, studentDob, studentSection) {
    this.name = studentName;
    this.dob = studentDob;
    this.section = studentSection;
  }

  greet() {
    console.log(`Hello ${this.name}`);
  }
  getAge() {
    const dob = new Date(this.dob);
    const difference = Math.abs(new Date() - dob) / (1000 * 60 * 60 * 24);
    return difference / 365;
  }
}

const student1 = new Student("John", "3-4-1992", "A2001");
const student2 = new Student("Aragorn", "7-4-1982", "B2001");
console.log(student2);

student2.greet();
console.log(Math.floor(student1.getAge())); */

// Working with DOM //

//document.getElementsByTagName("div")[0].innerText = "SFDCFacts";

// getting DOM element

// get by id
//console.log(document.getElementById("name"));
//console.log(document.getElementsByTagName("input"));
//console.log(document.getElementsByClassName("form-element"));

//document.getElementById("name").value = "John";
//console.log(document.querySelectorAll("input"));

/* const btn = document.querySelector("button");
//btn.remove()
btn.innerText = "Add New Student";
btn.style.background = "green"; */

/* const container = document.querySelector(".container");
console.log(container.classList);
container.classList.add("abcd");
console.log(container.classList);
container.classList.remove("container"); */

/* const addStudent = (evt) => {
  evt.preventDefault();
  const btn = evt.target;
  btn.innerText = "Clicked";
}; */

const btn = document.querySelector("button");
btn.addEventListener("click", (evt) => {
  evt.preventDefault();
  const name = document.querySelector("#name").value;
  const age = document.querySelector("#age").value;
  const cls = document.querySelector("#class").value;

  const stuList = document.querySelector(".student-list");
  stuList.innerHTML += `
  <div class="student-list-item">
          <div class="student-name">${name}</div>
          <div class="student-detail">
            <div>Age: ${age}</div>
            <div>Class: ${cls}</div>
          </div>
        </div>
  `;

  document.querySelectorAll("input").forEach((element) => {
    element.value = "";
  });
});
