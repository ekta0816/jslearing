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

async function myDisplay() {
    let myPromise = new Promise(function(resolve) {
      resolve("js demo !!");
    });
    document.getElementById("demo5").innerHTML = await myPromise;
  }
  
  myDisplay();

  async function myDisplayw() {
    let myPromise = new Promise(function(resolve) {
      setTimeout(function() {resolve("js demo with timeout");}, 3000);
    });
    document.getElementById("demo6").innerHTML = await myPromise;
  }
  
  myDisplayw();

  async function weather(){
    let dw = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("25 Deg")
        }, 2000);
    })

    let bw = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("20 Deg")
        }, 5000);
    })

    console.log("Featch Delhi weather please wait...")
    let delhiw = await dw
    console.log("delhi weather is: " + delhiw);
    console.log("Featch Banglore weather please wait...")
    let bangw = await bw
    console.log("Banglore weather is: " + bangw);

  }
   let w = weather()
   w.then((value) => {
    console.log(value);
   })

