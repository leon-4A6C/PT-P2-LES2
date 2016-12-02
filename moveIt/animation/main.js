function toLeft() {
  document.getElementById("movingDiv").style.marginLeft = "0em";
  setTimeout(ghostToLeft, 1000);
}
function ghostToLeft() {
  document.getElementById("movingDiv").style.marginLeft = "0em";
}

function toRight() {
  document.getElementById("movingDiv").style.marginLeft = "10em";
  setTimeout(ghostToRight, 1000);
}
function ghostToRight() {
  document.getElementById("ghostingDiv").style.marginLeft = "10em";
}
