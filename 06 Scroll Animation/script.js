const leftContent = document.querySelectorAll(".offScreenLeft");
const rightContent = document.querySelectorAll(".offScreenRight");

window.addEventListener("scroll", () => {
  console.log(window.innerHeight);
  leftContent.forEach((element) => {
    console.log("fdfdf" + element.getBoundingClientRect().top);
    if (element.getBoundingClientRect().top < (window.innerHeight * 4) / 5) {
      element.classList.remove("offScreenLeft");
    } else if (
      element.getBoundingClientRect().top >
      (window.innerHeight * 4) / 5
    ) {
      element.classList.add("offScreenleft");
    }
  });
});
