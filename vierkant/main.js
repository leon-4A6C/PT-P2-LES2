function toon(){
    var breedte = document.getElementById("breedte").value;
    var hoogte = document.getElementById("hoogte").value;
    var kleur = document.getElementById("colorPick").value;
    document.getElementById("output").style.width = breedte+"px";
    document.getElementById("output").style.height = hoogte+"px";
    document.getElementById("output").style.background = kleur;
}