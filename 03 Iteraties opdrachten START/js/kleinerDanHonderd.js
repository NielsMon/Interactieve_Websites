let getal = parseInt(prompt("Geef een getal:"));
let output = "Het start getal is " + getal + ":";
while (getal < 100) {
  output += `\n${getal}`;
  getal += 12;
}
alert(output);
document.getElementById("getal").innerText = output;
