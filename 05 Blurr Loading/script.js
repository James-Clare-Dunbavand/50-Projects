const loadPercentage = document.querySelector(".load-percent");
const loadbar = document.querySelector(".load-bar");
let percent = 0;

intervalId = setInterval(() => {
  if (percent >= 100) {
    clearInterval(intervalId);
  } else {
    percent++;
    loadPercentage.textContent = percent + "%";
    loadbar.style.backdropFilter = `blur(${(100 - percent) / 10}px)`;
  }
}, 50);
