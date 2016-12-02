//variable declaration
var movingDiv = document.getElementById("movingDiv");
var ghostingDiv = document.getElementById("ghostingDiv");
var animationDuration = 250;
var deg = 0;
//set everything to default values
switchAll();

function toLeft() {
  movingDiv.style.marginLeft = "0em";
  switchAll();
  setTimeout(ghostToLeft, animationDuration);
}
function ghostToLeft() {
  ghostingDiv.style.marginLeft = "0em";
}

function toRight() {
  movingDiv.style.marginLeft = "10em";
  switchAll();
  setTimeout(ghostToRight, animationDuration);
}
function ghostToRight() {
  ghostingDiv.style.marginLeft = "10em";
}

function toBottom() {
  if(movingDiv.style.marginTop != "10em") {
    ghostingDiv.style.marginTop = "-20em";
  }
  movingDiv.style.marginTop = "10em";
  switchAll();
  setTimeout(ghostToBottom, animationDuration);
}
function ghostToBottom() {
  ghostingDiv.style.marginTop = "-10em";
}

function toTop() {
  if(movingDiv.style.marginTop != "0em") {
    ghostingDiv.style.marginTop = "0em";
  }
  movingDiv.style.marginTop = "0em";
  switchAll();
  setTimeout(ghostToTop, animationDuration);
}
function ghostToTop() {
  ghostingDiv.style.marginTop = "-10em";
}

function rotateLeft() {
  deg -= 180;
  movingDiv.style.transform = "rotate("+deg+"deg)";
  ghostingDiv.style.transform = "rotate("+deg+"deg)";
}

function rotateRight() {
  deg += 180;
  movingDiv.style.transform = "rotate("+deg+"deg)";
  ghostingDiv.style.transform = "rotate("+deg+"deg)";
}

function switchAll() {
  if (movingDiv.style.marginLeft === "10em") {
    document.getElementById("toLeft").disabled = false;
    document.getElementById("toRight").disabled = true;
  }else {
    document.getElementById("toRight").disabled = false;
    document.getElementById("toLeft").disabled = true;
  }
  if (movingDiv.style.marginTop === "10em") {
    document.getElementById("toBottom").disabled = true;
    document.getElementById("toTop").disabled = false;
  }else {
    document.getElementById("toTop").disabled = true;
    document.getElementById("toBottom").disabled = false;
  }
}
