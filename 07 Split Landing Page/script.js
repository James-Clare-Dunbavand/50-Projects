
const xBoxPage = document.querySelector(".left-page")
const playstationPage = document.querySelector(".right-page")

xBoxPage.addEventListener("mouseover", (event) => {

	event.currentTarget.classList.add("hovered");
	event.currentTarget.classList.remove("un-hovered");
	playstationPage.classList.remove("hovered");
	playstationPage.classList.add("un-hovered");
});
playstationPage.addEventListener("mouseover", (event) => {

	event.currentTarget.classList.remove("un-hovered");
	event.currentTarget.classList.add("hovered");
	xBoxPage.classList.remove("hovered");
	xBoxPage.classList.add("un-hovered");
});

