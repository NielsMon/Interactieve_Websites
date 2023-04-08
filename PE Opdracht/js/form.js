"use strict";

// declaratie variabelen
const knop = document.getElementById("magicWand");
let errors = [];
let resultaat;
let res_payment;

// functies
function checkEmptyField(veld, melding) {
  if (veld === "") {
    errors.push(`Het veld ${melding} is vereist.`);
  }
}

function validateEmail(emailadres) {
  /*
  Oplossing gekopieerd van:
  https://www.simplilearn.com/tutorials/javascript-tutorial/email-validation-in-javascript
  */

  var validRegex =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

  if (emailadres.match(validRegex)) {
    return true;
  } else {
    errors.push("Het veld email is vereist.");
    return false;
  }
}

function validatePassword(password, repeatingPassword) {
  if (password === "") {
    errors.push("Het veld wachtwoord is vereist.");
  } else if (password.length < 8) {
    errors.push("Je wachtwoord moet minstens 8 tekens lang zijn.");
  }
  if (repeatingPassword === "") {
    errors.push("Het veld herhalend wachtwoord is vereist.");
  } else if (repeatingPassword.length < 8) {
    errors.push("Je herhalend wachtwoord moet minstens 8 tekens lang zijn.");
  }
  if (password !== repeatingPassword) {
    errors.push("Je wachtwoorden komen niet overeen.");
  }
}

function generateAlert(errorList) {
  if (errorList.length > 0) {
    resultaat = '<div class="alert alert-danger">';
    resultaat += "<h4>Yikes, errors..</h4>";
    errorList.forEach((element) => {
      resultaat += `${element}<br>`;
    });
    resultaat += "</div>";

    document.getElementById("val").innerHTML = resultaat;
  } else {
    resultaat = '<div class="alert alert-success">';
    resultaat += "<h4>Goed gedaan!</h4>";
    resultaat += "Aww yeah, je werd geregistreerd.";
    resultaat += "</div>";

    document.getElementById("val").innerHTML = resultaat;
    validatePayment();
  }
}

function validatePayment(veld) {
  /*
  het lukt mij niet om rechtrstreeks met het veld de controle uit te voeren

  */
  let waarde;
  if (document.getElementById("banking_app").checked) {
    waarde = document.getElementById("banking_app").value;
  }
  if (document.getElementById("overschrijving").checked) {
    waarde = document.getElementById("overschrijving").value;
  }
  if (document.getElementById("visa").checked) {
    waarde = document.getElementById("visa").value;
  }
  if (document.getElementById("paypal").checked) {
    waarde = document.getElementById("paypal").value;
  }

  res_payment = '<div class="alert alert-primary">';
  res_payment += "<h4>Betalingswijze</h4>";
  // resultaat += `Je betalingswijze is ${veld}`;
  res_payment += `Je betalingswijze is ${waarde}`;
  res_payment += "</div>";

  document.getElementById("bet").innerHTML = res_payment;
}

function checkPC(veld) {
  if (veld == "null") {
    errors.push("Het veld postcode is vereist.");
  } else if (parseInt(veld) < 1000 || parseInt(veld) >= 10000) {
    errors.push("De waarde van postcode moet tussen 1000 en 9999 liggen.");
  }
}

function validateForm() {
  errors = [];
  checkEmptyField(document.getElementById("voornaam").value, "voornnaam");
  checkEmptyField(document.getElementById("naam").value, "naam");
  checkEmptyField(
    document.getElementById("gebruikersnaam").value,
    "gebruikersnaam"
  );
  validateEmail(document.getElementById("email").value);
  validatePassword(
    document.getElementById("wachtwoord").value,
    document.getElementById("herhaal_wachtwoord").value
  );
  checkEmptyField(document.getElementById("adres").value, "adres");
  checkEmptyField(document.getElementById("land").value, "land");
  checkEmptyField(document.getElementById("provincie").value, "provincie");
  checkPC(document.getElementById("postcode").value);

  generateAlert(errors);
}

// eventlistner
knop.addEventListener("click", validateForm, false);
