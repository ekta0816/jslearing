document.getElementById("demo7").innerHTML =
"Browser inner window width: " + window.innerWidth + "px<br>" +
"Browser inner window height: " + window.innerHeight + "px";

document.getElementById("demo1").innerHTML = "window size : " + screen.width;
document.getElementById("demo1").innerHTML = "window width : " + screen.width + " Height: " + screen.height;
document.getElementById("demo1").innerHTML = 
"window width : " + screen.width + "<br>" + " Height: " + screen.height +  "<br>" +
" Available Width: " + screen.availWidth + "<br>" + " Available Height: " + screen.availHeight + "<br>" +
" color Depth: " + screen.colorDepth + "<br>" + " Pixel depth: " + screen.pixelDepth;

document.getElementById("demoloc").innerHTML = 
"Location href: " + window.location.href + "<br> Host name : " + window.location.hostname + 
"<br> pathname :" + window.location.pathname + "<br> protocole " +  window.location.protocol +
"<br> port number is: " + window.location.port;


function newDoc() {
    window.location.assign("https://www.w3schools.com")
}
function goBack() {
    window.history.back()
}
function goForward() {
    window.history.forward()
}

document.getElementById("demo3").innerHTML = "navigation cookieEnabled is: " + navigator.cookieEnabled +
"<br> browser appname: " + navigator.appName + "<br> App code name: " + navigator.appCodeName +
"<br> browser engine: " + navigator.product + "<br> browser version: "+ navigator.appVersion +
"<br> user agent: " + navigator.userAgent + "<br> browser platform: " + navigator.platform +
"<br> browser language: " + navigator.language + "<br> online property: " + navigator.onLine +
"<br> java enable: "+ navigator.javaEnabled();

function alertbox()
{
    alert("hello world...")
}

function confirmbox(){
    let text;
    if (confirm("press button")) {
        text = "you press okay";
    } else {
        text = "you press cancle";
    }
    document.getElementById("demo2").innerHTML = text;
}

function myFunction() {
    let text1;
    let person = prompt("Please enter your name:", "Ekta");
    if (person == null || person == "") {
      text1 = "User cancelled the prompt.";
    } else {
      text1 = "Hello " + person + "! How are you today?";
    }
    document.getElementById("demo8").innerHTML = text1;
  }

  function setCookie(cname,cvalue,exdays) {
    const d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    let expires = "expires=" + d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
  }
  
  function getCookie(cname) {
    let name = cname + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(';');
    for(let i = 0; i < ca.length; i++) {
      let c = ca[i];
      while (c.charAt(0) == ' ') {
        c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
      }
    }
    return "";
  }
  
  function checkCookie() {
    let user = getCookie("username");
    if (user != "") {
      alert("Welcome again " + user);
    } else {
       user = prompt("Please enter your name:","");
       if (user != "" && user != null) {
         setCookie("username", user, 30);
       }
    }
  }