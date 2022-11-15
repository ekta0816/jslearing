var x = myFunction(4, 3);
document.getElementById("f1").innerHTML = x;

function myFunction(a, b) {
  return a * b;
}
//  with Expressions
const y = function (a, b) {return a * b};
document.getElementById("f2").innerHTML = y(10, 3);

const myFunction1 = new Function("a", "b", "return a * b");
document.getElementById("f3").innerHTML = myFunction1(4, 3);

(function(){
    document.getElementById("f4").innerHTML = "Hello I am Executed."
})();

// const x1 = (x1, y1) => x1 * y1;
// document.getElementById("f5").innerHTML = x1(5, 5);

const x1 = (x1, y1) => { return x1 * y1 };
document.getElementById("f5").innerHTML = x1(3, 5);

// Default Parameter Values
function defvalue(c, d = 4) {
  return c + d
}
document.getElementById("f6").innerHTML = defvalue(3);

// Rest Parameter
function sum(...args) {
  let sum = 0;
  for(let arg of args) sum += arg;
  return sum;
}
let x2 = sum(2,3,4);
document.getElementById("f7").innerHTML = x2  ;

// call method
const p = {
  fullName: function () {
    return this.firstName + " " + this.lastName;
  }
}
const p1 = {
  firstName : "Ekta",
  lastName : "soni"
}
const p2 = {
  firstName : "how's",
  lastName : "you"
}
document.getElementById("f8").innerHTML = p.fullName.call(p1) + " " + p.fullName.call(p2);

// apply method
const person = {
  fullName: function (city, country) {
    return this.firstName + " " + this.lastName + " " + city + "," + country;
  }
}
const person1 = {
  firstName : "Hello",
  lastName : "world"
}
const person2 = {
  firstName : "how's",
  lastName : "you"
}
document.getElementById("f9").innerHTML = 
person.fullName.apply(person1, ["Gandhinager","India"]) + " <br> " + person.fullName.apply(person2,["Ontario","Canada"]);

// Math.max
document.getElementById("f10").innerHTML = Math.max.apply(null, [5,9,16]);

// bind method
const per1 = {
  firstName:"John",
  lastName: "Doe",
  full1: function() {
    return this.firstName + " " + this.lastName;
  }
}
const mem1 = {
  firstName:"Ekta",
  lastName: "Soni",
}
let full1 = per1.full1.bind(mem1)
document.getElementById("f11").innerHTML = full1();

console.log(false == []);
console.log(false ===! []);
console.log(parseInt('15'));
