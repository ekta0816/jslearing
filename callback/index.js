function myDisplayer(some) {
    document.getElementById("demo").innerHTML = some;
  }
  
  function myFirst() {
    myDisplayer("Hello");
  }
  
  function mySecond() {
    myDisplayer("Goodbye");
  }

mySecond();
myFirst();


function myDisplayer1(something) {
    document.getElementById("demo1").innerHTML = something;
}
  
function myCalculator(num1, num2, myCallback) {
    let sum = num1 + num2;
    myCallback(sum);
}
myCalculator(10, 5, myDisplayer1);

setTimeout(myFunction, 3000);

function myFunction() {
  document.getElementById("demo2").innerHTML = "Hello world!!";
}

setTimeout(function() { 
    myFunction1("Hello world !!!"); 
}, 4000);

function myFunction1(value) {
  document.getElementById("demo3").innerHTML = value;
}


setInterval(myFunction2, 1000);
function myFunction2() {
  let d = new Date();
  document.getElementById("demo4").innerHTML=
  d.getHours() + ":" +
  d.getMinutes() + ":" +
  d.getSeconds();
}

