let aantal = 50;
let teller = 0;
let output = ``;

while (aantal < 1000) {
  output += `\n${teller}: ${aantal}`;
  aantal = Math.floor(aantal * 1.15);
  teller++;
}

document.getElementById("result").innerText = output;
