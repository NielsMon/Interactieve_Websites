"use strict";
let input, output, getal;

// even - oneven
getal = prompt("Geef een getal in");
if (parseInt(getal) % 2 == 0 && Number.isInteger(parseInt(getal))) {
  output = `${getal} is een even getal!`;
} else if (parseInt(getal) % 2 != 0 && Number.isInteger(parseInt(getal))) {
  output = `${getal} is een oneven getal!`;
} else {
  output = `${getal} is geen getal!`;
}
document.getElementById("even").innerHTML = output;
alert(output);

// kwadraat
do {
  input = prompt("Geef een getal in tussen 10 en 20");
} while (!Number.isInteger(parseInt(input)));
getal = parseInt(input);

if (getal < 10) {
  output = "Dit getal is kleiner dan 10";
} else if (getal > 20) {
  output = "Dit getal is groter dan 20";
} else {
  output = `Het kwadraar van ${getal} is ${getal * getal}`;
}
document.getElementById("planeten").innerHTML = output;
alert(output);

// bioscoop
do {
  input = prompt("Geef een leeftijd in");
} while (!Number.isInteger(parseInt(input)));
getal = parseInt(input);

if (getal >= 5 && getal <= 12) {
  output = "halve prijs";
} else if (getal >= 13 && getal <= 54) {
  output = "vol tarief";
} else {
  output = "gratis";
}
document.getElementById("bioscoop").innerHTML = output;
alert(output);

// klein middel groot
let reeks;

for (let i = 0; i < 3; I++) {
  do {
    input = prompt("Geef een getal in");
  } while (!Number.isInteger(parseInt(input)));
  getal = parseInt(input);
  reeks[i] = getal;
}
reeks.sort();

output = `kleinste: ${reeks[0]}\n
middelste: ${reeks[1]}\n
grootste: ${reeks[2]}`;
document.getElementById("sorteer").innerHTML = output;
alert(output);
