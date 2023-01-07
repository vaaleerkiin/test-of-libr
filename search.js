document.querySelector("#text-to-find").oninput = function () {
  let val = this.value.trim();
  let elastitcItems = document.querySelectorAll(".main-list a");
  if (val != "") {
    elastitcItems.forEach(function (elem) {
      if (elem.innerText.search(val) == -1) {
        elem.classList.add("hide");
        elem.innerHTML = elem.innerText;
      } else {
        elem.classList.remove("hide");
      }
    });
  } else {
    elastitcItems.forEach(function (elem) {
      elem.classList.remove("hide");

      elem.innerHTML = elem.innerText;
    });
  }
};
