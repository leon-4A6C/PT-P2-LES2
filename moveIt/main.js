document.getElementById("left").disabled = true;
document.getElementById("top").disabled = true;

function toLeft() {
    document.getElementById("blokje").style.marginLeft = "0";
    document.getElementById("left").disabled = true;
    document.getElementById("right").disabled = false;
}
function toRight() {
    document.getElementById("blokje").style.marginLeft = "100px";
    document.getElementById("left").disabled = false;
    document.getElementById("right").disabled = true;
}
function toTop() {
    document.getElementById("blokje").style.marginTop = "0";
    document.getElementById("top").disabled = true;
    document.getElementById("bottom").disabled = false;
}
function toBottom() {
    document.getElementById("blokje").style.marginTop = "100px";
    document.getElementById("top").disabled = false;
    document.getElementById("bottom").disabled = true;
}
function rotateLeft() {
    document.getElementById("blokje").style.transform = "rotate(-180deg)";
    document.getElementById("rotateLeft").disabled = true;
    document.getElementById("rotateRight").disabled = false;
}
function rotateRight() {
    document.getElementById("blokje").style.transform = "rotate(180deg)";
    document.getElementById("rotateLeft").disabled = false;
    document.getElementById("rotateRight").disabled = true;
}