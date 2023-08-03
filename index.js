/* Dropdown menu */

const dropDown = document.querySelector(".dropdown-menu");
const aboutMenuLink = document.querySelector(".about-link");

aboutMenuLink.addEventListener("click", () => {
  dropDown.classList.toggle(".active-menu");
});
