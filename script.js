"use strict";

let headerContainer = document.querySelector(".header-container");
let projectsContainer = document.querySelector(".projects-container");
let projectContainers = document.querySelectorAll(".project-container");
let aboutMeTitle = document.querySelector(".about-me-title");
let mePicSecond = document.querySelector(".me-pic-second");
let mePicFirst = document.querySelector(".me-pic");
let icons = document.querySelector(".icons");
let navigationContainer = document.querySelector(".navigation-container");

console.log(projectContainers);

let showHiddenContainers = (enteries) => {
  let [entry] = enteries;

  if (!entry.isIntersecting) {
    projectContainers.forEach((container, i) => {
      setInterval(() => {
        container.classList.add("transform-opacity-acctive");
      }, 400 * i);
    });
    navigationContainer.classList.add("position-fixed");

    sectionObserver.observe(projectsContainer);
  } else {
    navigationContainer.classList.remove("position-fixed");
  }
};

let options = {
  root: null,
  treshold: 0,
  rootMargin: "-400px",
};

let headerObserver = new IntersectionObserver(showHiddenContainers, options);

headerObserver.observe(headerContainer);

let showHiddenSection = (enteries, options) => {
  let [entry] = enteries;
  console.log(entry);
  if (!entry.isIntersecting) {
    [aboutMeTitle, mePicSecond].forEach((items, i) => {
      setInterval(() => {
        items.classList.add("transform-opacity-acctive");
      }, 300 * i);
    });
  }
};

let sectionOptions = {
  root: null,
  treshold: 1.0,
  rootMargin: "-150px",
};

let sectionObserver = new IntersectionObserver(
  showHiddenSection,
  sectionOptions
);

window.addEventListener("load", function () {
  console.log("aa");
  mePicFirst.classList.add("transform-opacity-acctive");
  icons.classList.add("transform-opacity-acctive");
});
