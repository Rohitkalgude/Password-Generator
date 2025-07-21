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
const Strengthlabel = document.getElementById("strength-label");

const uppercaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowercaseLetters = "abcdefghijklmnopqrstuvwxyz";
const numberCharacters = "0123456789";
const SymbolsCharacters = "!@#$%^&*()_+=-[]{}|;:',.<>/?";

Length.addEventListener("input", () => {
  Lengthvalue.textContent = Length.value;
});

Generatebtn.addEventListener("click", makepassword);

function makepassword() {
  const Length = parseInt(Lengthvalue.value);
  const Includeuppercase = Uppercasecheckbox.checked;
  const Includelowercase = Lowercasecheckbox.checked;
  const IncludeNumber = Numbercheckbox.checked;
  const IncludeSymbols = Symbolscheckbox.checked;

  if (
    !Includeuppercase &&
    !Includelowercase &&
    !IncludeNumber &&
    !IncludeSymbols
  ) {
    alert("Please Select at least one char type");
    return;
  }

  const Newpassword = Createnewpassword(
    Length,
    Includeuppercase,
    IncludeSymbols,
    Includelowercase,
    IncludeNumber
  );

  Password.value = Newpassword;
  updatestrengthMeter(Newpassword);
}

function Createnewpassword(
  Length,
  Includeuppercase,
  IncludeSymbols,
  Includelowercase,
  IncludeNumber
) {
  let allCharacters = "";
  let Password = "";

  if (Includeuppercase) {
    allCharacters += uppercaseLetters;
  }

  if (Includelowercase) {
    allCharacters += lowercaseLetters;
  }

  if (IncludeNumber) {
    allCharacters += numberCharacters;
  }

  if (IncludeSymbols) {
    allCharacters += SymbolsCharacters;
  }

  for (let i = 0; i < Length; i++) {
    const RandomIndex = Math.floor(Math.random() * allCharacters.length);
    Password += allCharacters.charAt(RandomIndex);
  }

  return Password;
}

function updatestrengthMeter(Password) {
  const Passwordlength = Password.length;
  const hasUppercase = /[A-Z]/.test(Password);
  const hasLowercase = /[a-z]/.test(Password);
  const hasNumber = /[0-9]/.test(Password);
  const hasSymbols = /[!@#$%^&*()_+{}[]|:;<>,.?~]/.test(Password);

  let Strengthscore = 0;

  Strengthscore += Math.min(Passwordlength * 2, 40);

  if (hasUppercase) Strengthscore += 15;
  if (hasLowercase) Strengthscore += 15;
  if (hasNumber) Strengthscore += 15;
  if (hasSymbols) Strengthscore += 15;

  if (Passwordlength < 8) {
    Strengthscore = Math.min(Strengthscore, 40);
  }

  const safeScore = Math.min(5, Math.min(100, Strengthscore));
  Strengthbar.style.width = safeScore + "%";

  let StrengthLableText = "";
  let barcolor = "";

  if (Strengthscore < 40) {
    barcolor = "#fc8181";
    StrengthLableText = "Weak";
  } else if (Strengthscore < 70) {
    barcolor = "#fbd38d";
    StrengthLableText = "Medium";
  } else {
    barcolor = "#68d391";
    StrengthLableText = "Strong";
  }

  Strengthbar.style.backgroundColor = barcolor;
  Strengthlabel.textContent = StrengthLableText;
}

Copybtn.addEventListener("click", () => {
  navigator.clipboard.writeText(Password.value);
  Copybtn.title = "Copied!";
  setTimeout(() => {
    Copybtn.title = "Copy to clipboard";
  }, 1000);
});
