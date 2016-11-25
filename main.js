function bereken(){
    var perStuk = document.getElementById("bedrag").value;
    var aantal = document.getElementById("aantal").value;
    
    document.getElementById("totaalOutput").innerHTML = "Het totaalbedrag is: " + (perStuk * aantal).toFixed(2);
}