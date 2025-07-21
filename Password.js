const passwordEl = document.getElementById("password");
const lengthEl = document.getElementById("length");
const lengthValueEl = document.getElementById("length-value");
const uppercaseCheckbox = document.getElementById("uppercase");
const lowercaseCheckbox = document.getElementById("lowercase");
const numbersCheckbox = document.getElementById("numbers");
const symbolsCheckbox = document.getElementById("symbols");
const generateBtn = document.getElementById("generate-btn");
const copyBtn = document.getElementById("copy-btn");
const strengthBar = document.querySelector(".bar");
const strengthLabel = document.getElementById("strength-label");

const uppercaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowercaseLetters = "abcdefghijklmnopqrstuvwxyz";
const numberCharacters = "0123456789";
const symbolsCharacters = "!@#$%^&*()_+=-[]{}|;:',.<>/?";

lengthEl.addEventListener("input", () => {
  lengthValueEl.textContent = lengthEl.value;
});

generateBtn.addEventListener("click", () => {
  const length = parseInt(lengthEl.value);
  const includeUppercase = uppercaseCheckbox.checked;
  const includeLowercase = lowercaseCheckbox.checked;
  const includeNumbers = numbersCheckbox.checked;
  const includeSymbols = symbolsCheckbox.checked;

  if (
    !includeUppercase &&
    !includeLowercase &&
    !includeNumbers &&
    !includeSymbols
  ) {
    alert("Please select at least one character type!");
    return;
  }

  const newPassword = createPassword(
    length,
    includeUppercase,
    includeLowercase,
    includeNumbers,
    includeSymbols
  );

  passwordEl.value = newPassword;
  updateStrengthMeter(newPassword);
});

function createPassword(length, upper, lower, number, symbol) {
  let characters = "";
  let result = "";

  if (upper) characters += uppercaseLetters;
  if (lower) characters += lowercaseLetters;
  if (number) characters += numberCharacters;
  if (symbol) characters += symbolsCharacters;

  for (let i = 0; i < length; i++) {
    const randIndex = Math.floor(Math.random() * characters.length);
    result += characters[randIndex];
  }

  return result;
}

function updateStrengthMeter(password) {
  const hasUpper = /[A-Z]/.test(password);
  const hasLower = /[a-z]/.test(password);
  const hasNumber = /[0-9]/.test(password);
  const hasSymbol = /[^A-Za-z0-9]/.test(password);

  let score = 0;
  score += password.length * 2;
  if (hasUpper) score += 10;
  if (hasLower) score += 10;
  if (hasNumber) score += 10;
  if (hasSymbol) score += 10;

  let label = "";
  let color = "";

  if (score < 40) {
    label = "Weak";
    color = "#fc8181";
  } else if (score < 70) {
    label = "Medium";
    color = "#fbd38d";
  } else {
    label = "Strong";
    color = "#68d391";
  }

  strengthBar.style.width = Math.min(score, 100) + "%";
  strengthBar.style.backgroundColor = color;
  strengthLabel.textContent = label;
}

copyBtn.addEventListener("click", () => {
  if (passwordEl.value.trim() !== "") {
    navigator.clipboard.writeText(passwordEl.value);
    showcopybutton();
  }
});

function showcopybutton() {
  copyBtn.classList.remove("far", "fa-copy");
  copyBtn.classList.add("fas", "fa-check");

  copyBtn.style.color = "#48bb78";

  setTimeout(() => {
    copyBtn.classList.remove("fas", "fa-check");
    copyBtn.classList.add("far", "fa-copy");
  }, 1500);
}
