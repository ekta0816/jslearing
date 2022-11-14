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