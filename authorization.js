const database = [
  { name: "admin", mail: "admin", pass: 123 },
  {
    name: "Valera_Kamelkov",
    mail: "bmm2322.vkamelkov@dakkkim.edu.ua",
    pass: "qazwer213",
  },
];

const button = document.querySelector("#submit");

button.addEventListener("click", () => {
  let inputMail = document.querySelector("#mail");
  let inputPass = document.querySelector("#pass");
  return console.log(inputMail.value);
});
