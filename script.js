"use strict";

let windows = document.querySelectorAll(".window");
let navigationButtons = document.querySelectorAll(".navigation-list");
let navigationLinks = document.querySelectorAll(".navigation-link");
let showInfoButton = document.querySelector(".show-info");
let contactIconsContainers = document.querySelector(".contact-icons-container");
let contactInfoContainer = document.querySelector(".contact-info-container");
let width = innerWidth;

console.log(width);

navigationButtons.forEach((button, index) => {
  button.addEventListener("click", function (e) {
    windows.forEach((el) => {
      el.classList.remove("active");
      el.style.opacity = "0";
    });
    navigationLinks.forEach((el) => {
      el.classList.remove("active-color");
      window.scrollTo(0, 0);
      contactIconsContainers.classList.remove("active-icons-mobile");
      contactInfoContainer.classList.remove("active-info-mobile");
      contactIconsContainers.classList.remove("active-icons");
      contactInfoContainer.classList.remove("active-info");
      contactIconsContainers.style.opacity = "0";
      contactInfoContainer.style.opacity = "0";
    });

    windows[index].classList.add("active");
    setTimeout(() => {
      windows[index].style.opacity = "1";
    }, "100");

    navigationLinks[index].classList.add("active-color");
  });
});

if (width < 580) showInfoButton.innerHTML = "Show";

showInfoButton.addEventListener("click", function (e) {
  if (width > 580) {
    contactIconsContainers.classList.toggle("active-icons");
    contactInfoContainer.classList.toggle("active-info");
    if (contactInfoContainer.classList.contains("active-info")) {
      setTimeout(() => {
        contactIconsContainers.style.opacity = "1";
        contactInfoContainer.style.opacity = "1";
      }, 300);
    } else {
      contactIconsContainers.style.opacity = "0";
      contactInfoContainer.style.opacity = "0";
    }
  } else {
    contactIconsContainers.classList.toggle("active-icons-mobile");
    contactInfoContainer.classList.toggle("active-info-mobile");
    if (contactInfoContainer.classList.contains("active-info-mobile")) {
      setTimeout(() => {
        contactIconsContainers.style.opacity = "1";
        contactInfoContainer.style.opacity = "1";
      }, 300);
    } else {
      contactIconsContainers.style.opacity = "0";
      contactInfoContainer.style.opacity = "0";
    }
  }
});
