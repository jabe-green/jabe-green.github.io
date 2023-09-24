//Language gamburger

let hamburgerButton = document.querySelector(".lang__dropbtn");
let hamburger = document.querySelector(".lang__dropdown-content");

hamburgerButton.addEventListener("click", () => {
  if(hamburger.classList.contains("lang__dropdown-content_activated")) {
    hamburger.classList.remove("lang__dropdown-content_activated");
  } else {
    hamburger.classList.add("lang__dropdown-content_activated");
  }
});

let choosenLang = document.querySelector(".lang__choosen-lang");
let englishButton = document.querySelector(".lang__english");
let russianButton = document.querySelector(".lang__russian");

russianButton.addEventListener("click", (event) => changeLanguage("rus"));
englishButton.addEventListener("click", (event) => changeLanguage("eng"));

function changeLanguage(lang) {
  if(lang == "eng") {
    choosenLang.textContent = "English";
  } else {
    choosenLang.textContent = "Русский";
  }
}