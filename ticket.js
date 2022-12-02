const ticketMaker = (amount) => {
  const search = document.querySelector(".search");
  for (let i = 1; i <= amount; i += 1) {
    const htmlString = `<a target="_blank"
        rel="noreferrer noopener nofollow"
        href="./Questions-for-the-exam/№${i}.html"
        >№${i}.</a>`;
    search.insertAdjacentHTML("beforebegin", htmlString);
  }
};
ticketMaker(133);
