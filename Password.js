let Password = document.querySelector("#password");
let button = document.querySelector("#generateBtn");
let range = document.querySelector("#range");

const characters =
  "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+-=[]{}|;:,.<>?";

button.addEventListener("click", () => {
  let Passwordlength = range.value;
  let Generatepasswrod = "";

  for (let i = 0; i < Passwordlength; i++) {
    let random = Math.floor(Math.random() * characters.length);
    Generatepasswrod += characters[random];
  }

  Password.value = Generatepasswrod;
});
