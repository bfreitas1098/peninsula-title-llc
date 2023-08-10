/* Dropdown menu */

const dropDown = document.getElementById("dropdown-menu");
const downArrow = document.getElementById("down-arrow");
const upArrow = document.getElementById("up-arrow");

const makeVisible = () => {
  dropDown.classList.toggle("visible");
  downArrow.classList.toggle("not-visible");
  upArrow.classList.toggle("visible");
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
