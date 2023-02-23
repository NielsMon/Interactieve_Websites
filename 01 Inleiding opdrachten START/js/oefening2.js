let getal = 0;
let teller = 10;
let naam = "Jan";
let kleiner = true;
let ok = false;

document.write("<strong>Variabelen na declaratie:</strong><br>");
document.write(getal + "<br>");
document.write(teller + "<br>");
document.write(kleiner + "<br>");
document.write(ok) + "<br>";

getal += 10;
teller++;
getal += teller;
getal++;
kleiner = getal < 20;
ok = naam != "jan" && kleiner;

document.write("<br>");
document.write("<br><strong>Variabelen na bewerkingen:</strong><br>");
document.write(getal + "<br>");
document.write(teller + "<br>");
document.write(kleiner + "<br>");
document.write(ok) + "<br>";
