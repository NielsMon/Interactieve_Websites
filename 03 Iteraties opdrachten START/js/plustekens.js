let output = "";
let getal = prompt("Geef het aantal in:");
document.getElementById("getal").innerHTML = `Het aantal is ${getal}:`;
for (let i = 0; i < getal; i++) {
  output += "+";
}
alert(output);
document.getElementById("plustekens").innerHTML = output;
