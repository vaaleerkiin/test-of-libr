const database = [
  { name: "admin", mail: "admin", pass: 123 },
  {
    name: "Valera Kamelkov",
    mail: "bmm2322.vkamelkov@dakkkim.edu.ua",
    pass: "qazwer213",
  },
];

const button = document.querySelector("#submit");

button.addEventListener("click", () => {
  let inputMail = document.querySelector("#mail");
  let inputPass = document.querySelector("#pass");
  let backdrop = document.querySelector(".backdrop--authorization");
  if (
    database.find((el) => el.mail == inputMail.value) &&
    database.find((el) => el.pass == inputPass.value)
  ) {
    backdrop.classList.add("hide");
  } else if (inputMail.value == false || inputPass.value == false) {
    alert("Заповніть всі поля!");
  } else {
    alert("У вас нема доступу!");
  }
});
