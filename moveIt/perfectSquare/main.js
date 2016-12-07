setInterval(makeSquare, 10);

function makeSquare() {
  var currentWidth = document.getElementById("square").clientWidth;
  document.getElementById("square").style.height = currentWidth+"px";
}
