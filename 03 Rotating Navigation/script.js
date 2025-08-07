const nav = document.getElementById("navOpener");
const page = document.getElementById("bg");

document.getElementById("openNav").addEventListener("click", () => {
  nav.classList.add("rotate90");
  page.classList.add("rotate10");
  document.querySelector("nav").classList.add("translate");
});

document.getElementById("closeNav").addEventListener("click", () => {
  nav.classList.remove("rotate90");
  page.classList.remove("rotate10");
  document.querySelector("nav").classList.remove("translate");
});
