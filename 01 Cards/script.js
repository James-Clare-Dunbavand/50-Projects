const images = document.querySelector("#cards").children;
for (let index = 0; index < images.length; index++) {
  images[index].addEventListener("click", () => {
    for (let j = 0; j < images.length; j++) {
      images[j].querySelector("p").classList.remove("visible");
      images[j].classList.remove("enlarge");
    }
    images[index].classList.add("enlarge");
    images[index].querySelector("p").classList.add("visible");
    console.log("click");
  });
}
