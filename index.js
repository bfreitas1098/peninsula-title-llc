///////////////////////////////////////////////////////////////////////////////
const dropDown = document.getElementById("dropdown-menu");
const downArrow = document.getElementById("down-arrow");
const upArrow = document.getElementById("up-arrow");
const rAboutMenu = document.getElementById("r-about");
const downArr = document.getElementById("down-arr");
const upArr = document.getElementById("up-arr");
const accordion = document.querySelectorAll(".questions-box");
const answers = document.querySelectorAll(".answer");
const initials = document.querySelectorAll(".initials");
const authorNames = document.querySelectorAll(".testimonial-author");
const heroSection = document.querySelector(".hero-section");
const nav = document.querySelector("nav");
const header = document.querySelector("header");
const faqLink = document.querySelector(".faq-link");
const storyLink = document.querySelector(".story-link");
const storySection = document.getElementById("our-story");
const faqSection = document.getElementById("faq");
///////////////////////////////////////////////////////////////////////////////

/* Dropdown & Responsive menu */

// open and close dropdown menu
const makeDDVisible = () => {
  dropDown.classList.toggle("visible");
  downArrow.classList.toggle("not-visible");
  upArrow.classList.toggle("visible");
};

// open and close about menu in dropdown
const makeRMVisible = () => {
  rAboutMenu.classList.toggle("visible");
  downArr.classList.toggle("not-visible");
  upArr.classList.toggle("visible");
};

const responsiveMenu = document.getElementById("responsive-menu-container");

// open and close responsive menu
const openRMenu = () => {
  responsiveMenu.classList.toggle("visible");
};
const closeRMenu = () => {
  responsiveMenu.classList.toggle("visible");
};

faqLink.addEventListener;

/* FAQ */

// Display the answers to questions as the questions are clicked then hide them again
for (let i = 0; i < accordion.length; i++) {
  for (let i = 0; i < answers.length; i++) {
    accordion[i].addEventListener("click", () => {
      const isAnswerOpen = answers[i].classList.contains("open");
      answers[i].classList.remove("open");
      if (!isAnswerOpen) {
        answers[i].classList.toggle("open");
      }
    });
  }
}

/* Footer year */

// Always display the current year in the footer
const currentYear = new Date().getFullYear();
document.getElementById("year").textContent = currentYear;

/* Testimonials */

const initialsArr = Array.from(initials);

let authorsArr = [];
// Take the authors names and convert them into initials
authorNames.forEach((author) => {
  let aut = author.innerHTML;
  authorsArr.push(
    aut
      .toUpperCase()
      .split(" ")
      .map((name) => name[0])
      .join("")
  );
});

// Replace the text of the initials elements with the intitals created from the author names
for (let i = 0; i < initialsArr.length; i++) {
  for (let i = 0; i < authorsArr.length; i++) {
    initialsArr[i].innerHTML = authorsArr[i];
  }
}

/* Sticky Nav */
const headerHeight = header.getBoundingClientRect().height;

document.addEventListener("DOMContentLoaded", () => {
  const stickyNav = (entries) => {
    const [entry] = entries;

    if (!entry.isIntersecting) {
      header.classList.add("sticky");
      nav.classList.add("solid");
    } else {
      header.classList.remove("sticky");
      nav.classList.remove("solid");
    }
  };

  const heroObserver = new IntersectionObserver(stickyNav, {
    root: null,
    threshold: 0,
    rootMargin: `-${headerHeight}px`,
  });

  if (heroSection) {
    heroObserver.observe(heroSection);
  }
});

/* Smooth scrolling */

const scroll = function (section) {
  section.scrollIntoView({ behavior: "smooth" });
};

storyLink.addEventListener("click", scroll.bind(this, storySection));
faqLink.addEventListener("click", scroll.bind(this, faqSection));
