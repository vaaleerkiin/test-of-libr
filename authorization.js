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
  {
    name: "Ilya Zinchenko",
    mail: "bmm2322.izinchenko@dakkkim.edu.ua",
    pass: 200520052005,
  },
  {
    name: "Ilya Kvas",
    mail: "bmm2322.ikvas@dakkkim.edu.ua",
    pass: "@pyzdec12",
  },
  {
    name: "Svitlana Mostova",
    mail: "mostovasvitlanka@gmail.com",
    pass: "03062005sv",
  },
  {
    name: "Andrey Papshoi",
    mail: "bmm2322.apapshoi@dakkkim.edu.ua",
    pass: "020605aaa",
  },
];

const button = document.querySelector("#submit");
let inputMail = document.querySelector("#mail");
let inputPass = document.querySelector("#pass");
let backdrop = document.querySelector(".backdrop--authorization");
button.addEventListener("click", () => {
  if (check()) {
    document.querySelector("#go-to-main").classList.remove("invalid");
    document.querySelector("#go-to-main").setAttribute("href", "./main.html");
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
