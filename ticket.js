const ticketMaker = (amount) => {
  const mainList = document.querySelector(".main-list");
  for (let i = 1; i <= amount; i += 1) {
    const htmlString = `<a target="_blank"
        rel="noreferrer noopener nofollow"
        href="./Questions-for-the-exam/№${i}.html"
        >№${i}.</a>`;
    mainList.innerHTML += htmlString;
  }
};
ticketMaker(133);
