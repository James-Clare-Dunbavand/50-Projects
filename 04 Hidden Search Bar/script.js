const searchButton = document.getElementById("search-button");
const searchField = document.getElementById("search-field");

searchButton.addEventListener("click", () => {
  if (searchField.classList.contains("lengthend")) {
    searchField.classList.remove("lengthend");
  } else {
    searchField.classList.add("lengthend");
    searchField.focus();
  }
});
