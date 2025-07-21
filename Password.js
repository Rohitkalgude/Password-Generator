const Password = document.getElementById("password");
const Length = document.getElementById("length");
const Lengthvalue = document.getElementById("length-value");
const Uppercasecheckbox = document.getElementById("uppercase");
const Lowercasecheckbox = document.getElementById("lowercase");
const Numbercheckbox = document.getElementById("numbers");
const Symbolscheckbox = document.getElementById("symbols");
const Generatebtn = document.getElementById("generate-btn");
const Copybtn = document.getElementById("copy-btn");
const Strengthbar = document.querySelector(".bar");
const StrengthText = document.querySelector(".strength-container p");

const uppercaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowercaseLetters = "abcdefghijklmnopqrstuvwxyz";
const numberCharacters = "0123456789";
const SymbolsCharacters = "!@#$%^&*()_+{}[]|:;<>,.?/~";

Length.addEventListener("input", () => {
  Lengthvalue.textContent = Length.value;
});

Generatebtn.addEventListener("click", makepassword);

function makepassword() {
  
}
