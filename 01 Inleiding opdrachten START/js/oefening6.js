let input = prompt("Geef een getal:");
let getal1 = parseInt(input);
input = prompt("Geef een getal:");
let getal2 = parseInt(input);
let tekst = `${getal1} plus ${getal2} = ${getal1 + getal2}`;
document.getElementById("divResult").innerHTML = tekst;
