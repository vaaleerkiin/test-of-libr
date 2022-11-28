const database = [
  { name: "admin", mail: "admin", pass: 213 },
  {
    name: "Valera Kamelkov",
    mail: "bmm2322.vkamelkov@dakkkim.edu.ua",
    pass: "qazwer213",
  },
  {
    name: "Pavlo Dyshlliuk",
    mail: "bmm2322.pdyshliuk@dakkkim.edu.ua",
    pass: 78963,
  },
];

const button = document.querySelector("#submit");
let inputMail = document.querySelector("#mail");
let inputPass = document.querySelector("#pass");
let backdrop = document.querySelector(".backdrop--authorization");
button.addEventListener("click", () => {
  if (check()) {
    backdrop.classList.add("hide");
    document.querySelector(".modal-open").classList.remove("modal-open");
  } else if (inputMail.value == false || inputPass.value == false) {
    alert("Заповніть всі поля!");
  } else {
    alert("У вас нема доступу!");
  }
});
const check = () => {
  for (const data of database) {
    if (data.mail == inputMail.value && data.pass == inputPass.value) {
      return true;
    }
  }
};
