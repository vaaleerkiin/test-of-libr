nBody = (amount) => {
  for (let i = 1; i <= amount; i += 1) {
    console.log(i);
    let bodyId = document.querySelector(`body#№${i}`);
    console.log(bodyId);
  }
};

nBody(2);
