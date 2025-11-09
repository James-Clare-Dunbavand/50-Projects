
emailSpans = document.getElementById("email-title").querySelectorAll("span");
passwordSpans = document.getElementById("password-title").querySelectorAll("span");

emailInput = document.querySelector(".email-input");
passwordInput = document.querySelector(".password-input");
t = 120;

emailInput.addEventListener("focus", async () => {
	if (emailInput.value == "") {
		for (const element of emailSpans) {
			element.classList.add("elevated");
			await delay(t);
		};
	}
});
emailInput.addEventListener("focusout", async () => {
	if (emailInput.value == "") {
		for (const element of emailSpans) {
			element.classList.remove("elevated");
			await delay(t);
		};
	}
});
passwordInput.addEventListener("focus", async () => {
	if (passwordInput.value == "") {
		for (const element of passwordSpans) {
			element.classList.add("elevated");
			await delay(t);
		}
	};
});
passwordInput.addEventListener("focusout", async () => {
	if (passwordInput.value == "") {
		for (const element of passwordSpans) {
			element.classList.remove("elevated");
			await delay(t);
		};
	}
});






function delay(time) {

	return new Promise(resolve => {

		setTimeout(resolve, time);
		console.log(time);
	}
	)
}




