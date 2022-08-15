var Person = function() { };
Person.prototype.initialize = function (name, age) {
    this.name = name;
    this.age = age;
}

// This as a object directly using this would work in straight forward way
// let him = {
//     __proto__: Person.prototype,
//     teach: function (subject) {
//         console.log(this.name + ' is now teaching ' + subject);
//     }
// }

// now trying with Class Teacher 
// this would create a class with constructor 
class Teacher { }
// assigning the function initialize to Teacher class
// Teacher.prototype.initialize = Person.prototype.initialize;
// calling the setPrototypeOf method instead of directly assigning
Object.setPrototypeOf(Teacher.prototype, Person.prototype);
// creating method teach for teacher.
Teacher.prototype.teach = function (subject) {
    console.log(`${this.name} is now teaching ${subject}`);
}

// creating the him object of Teacher class.
var him = new Teacher();

him.initialize("Adam", 45);
him.teach("Inheritance");
