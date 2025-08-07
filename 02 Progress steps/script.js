const steps = document.querySelectorAll(".step");
const lines = document.querySelectorAll(".progressLineBlue");
const next = document.querySelector("#next");
const prev = document.querySelector("#prev");

let currentStep = 1;

next.addEventListener("click", (event) => {
  steps[currentStep].classList.add("blue");
  lines[currentStep - 1].classList.add("lengthend");
  currentStep++;

  if (currentStep >= steps.length) {
    next.classList.add("disabled");
  }
  if (currentStep === 2) {
    prev.classList.remove("disabled");
  }
});
prev.addEventListener("click", (event) => {
  steps[currentStep - 1].classList.remove("blue");
  lines[currentStep - 2].classList.remove("lengthend");
  currentStep--;

  if (currentStep <= 1) {
    prev.classList.add("disabled");
  }
  if (currentStep === steps.length - 1) {
    next.classList.remove("disabled");
  }
});
