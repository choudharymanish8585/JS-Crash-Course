// Sets in Javascript
/* const students = new Set(["John", "Aragorn"]);
students.add("Gimli");
console.log(students);

console.log(students.has("gimli"));

students.delete("John");
console.log(students);

const studentsArr = Array.from(students);
console.log(studentsArr);

students.clear();

console.log(students); */

// Maps in JS
const sections = new Map([["A2001", ["John"]]]);
console.log(sections);

const students = sections.get("A2001");
students.push("Aragorn");
students.push("Ron");
console.log(sections);

sections.set("B2001", ["Gimli", "Harry", "Ron"]);
console.log(sections);

console.log(sections);

console.log(sections.keys());
console.log(sections.values());
console.log(sections.entries());

console.log(sections.has("A2001"));

!sections.has("A2001") && sections.set("A2001", []);
console.log(sections);
