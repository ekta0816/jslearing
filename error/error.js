try {
    message("Welcome guest!");
}
catch(err) {
    document.getElementById("demo").innerHTML = err.message;
}

function error() {
    const message = document.getElementById("e1");
    message.innerHTML = "";
    let x = document.getElementById("demo1").value;
    try { 
      if(x == "")  throw "empty";
      if(isNaN(x)) throw "not a number";
      x = Number(x);
      if(x < 5)  throw "too low";
      if(x > 10)   throw "too high";
    }
    catch(err) {
      message.innerHTML = "Input is " + err;
    }
    finally {
        document.getElementById("demo1").value = "";
      }
}

let num = 1;
try {
    num.toPrecision(500);
} catch (err) {
    document.getElementById("demo3").innerHTML = err.name;
}

