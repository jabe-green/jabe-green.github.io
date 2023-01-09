'use strict'

let hambButton;
let navMenu;

hambButton = document.querySelector("div.hamburger");
navMenu = document.querySelector("nav.nav");

hambButton.addEventListener("click", () => {
    hambButton.classList.toggle("hamburger_opened");
    navMenu.classList.toggle("nav_opened");
});

let menuItem = document.querySelectorAll('.nav__button');

menuItem.forEach(item => {
  item.addEventListener('click', () => {
    hambButton.classList.remove("hamburger_opened");
    navMenu.classList.remove("nav_opened");
  });
});