/*-------------- bind --------------*/
console.log("/*-------------- BIND --------------*/\n");
// bind example 1
function multiply(x, y) {
  return this.x * this.y;
}

const multiBound = multiply.bind({ x: 12, y: 13 });

console.log(typeof multiBound);
console.log(multiBound());

// bind Example 2
// partial functions
function Subtract(a, b) {
  return a - b;
}

// fix one variable
const minusBound = Subtract.bind(null, 10);
console.log(minusBound === Subtract);
console.log(minusBound(4));

// bind example 3
const obj = {
  name: "Sample",
  surname: "",
  getName: function () {
    return this.name + " " + this.surname;
  },
};

const person = {
  name: "Rajesh",
  surname: "Velaga",
};

let personName = obj.getName.bind(person);
console.log(personName); //get the confirmation that the function bound.
console.log(personName());
console.log("/*---------------------------------*/\n");
/*-------------- Call --------------*/
console.log("/*-------------- CALL --------------*/\n");

function gen() {
    var arr = [
        this.person,
        'performs',
        this.duties
    ].join(' => ');
    
    console.log(arr);
}

var obj1 = {
    person: "Rajesh", duties: "Coding"
};

var obj2 = {
    person: "Ramesh", duties: "Cooking"
};

gen.call(obj1);
gen.call(obj2);
console.log("/*---------------------------------*/\n");

/*-------------- apply -------------- */
console.log("/*-------------- APPLY --------------*/\n");

var arrayNum = [1, 24, 45, 33, 55, 22, 222, 4];
// Math.max and math.min accepts positional arguments, hence apply can be used
// to compute for the use when we are unaware of the number fo arguments and pass
// to the array
var maxNum = Math.max.apply(null, arrayNum);

var minNum = Math.min.apply(null, arrayNum);

console.log("Minimum: " + minNum + " & " + "Maximum:" + maxNum);
console.log("/*---------------------------------*/\n");