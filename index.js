/* Dropdown & Responsive menu */

const dropDown = document.getElementById("dropdown-menu");
const downArrow = document.getElementById("down-arrow");
const upArrow = document.getElementById("up-arrow");

const makeDDVisible = () => {
  dropDown.classList.toggle("visible");
  downArrow.classList.toggle("not-visible");
  upArrow.classList.toggle("visible");
};

const rAboutMenu = document.getElementById("r-about");
const downArr = document.getElementById("down-arr");
const upArr = document.getElementById("up-arr");

const makeRMVisible = () => {
  rAboutMenu.classList.toggle("visible");
  downArr.classList.toggle("not-visible");
  upArr.classList.toggle("visible");
};

const responsiveMenu = document.getElementById("responsive-menu");

const closeRMenu = () => {
  responsiveMenu.classList.toggle("not-visible");
};

/* FAQ */

const accordion = document.getElementsByClassName("questions-box");

for (let i = 0; i < accordion.length; i++) {
  accordion[i].addEventListener("click", function () {
    let answer = this.nextElementSibling;

    if (answer.style.display === "block") {
      answer.style.display = "none";
    } else {
      answer.style.display = "block";
    }
  });
}

/* Footer year */

const present = new Date();
const currentYear = present.getFullYear();

document.getElementById("year").textContent = currentYear;
