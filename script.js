"use strict";

let windows = document.querySelectorAll(".window");
let navigationButtons = document.querySelectorAll(".navigation-list");
let navigationLinks = document.querySelectorAll(".navigation-link");
let showInfoButton = document.querySelector(".show-info");
let contactIconsContainers = document.querySelector(".contact-icons-container");
let contactInfoContainer = document.querySelector(".contact-info-container");
let width = innerWidth;

let resetSettings = () => {
  window.scrollTo(0, 0);
  contactIconsContainers.classList.remove(
    "active-icons-mobile",
    "active-icons"
  );
  contactInfoContainer.classList.remove("active-info-mobile", "active-info");
  contactIconsContainers.style.opacity = "0";
  contactInfoContainer.style.opacity = "0";
};

navigationButtons.forEach((button, index) => {
  button.addEventListener("click", function (e) {
    windows.forEach((el) => {
      el.classList.remove("active");
      el.style.opacity = "0";
    });
    navigationLinks.forEach((el) => {
      el.classList.remove("active-color");
      if (width < 1020) {
        resetSettings();
      }
    });
    windows[index].classList.add("active");
    setTimeout(() => {
      windows[index].style.opacity = "1";
    }, "100");
    navigationLinks[index].classList.add("active-color");
  });
});

if (width < 580) showInfoButton.innerHTML = "Show";

showInfoButton.addEventListener("click", () => {
  const isMobile = width <= 580;
  const iconsClass = isMobile ? "active-icons-mobile" : "active-icons";
  const infoClass = isMobile ? "active-info-mobile" : "active-info";

  contactIconsContainers.classList.toggle(iconsClass);
  contactInfoContainer.classList.toggle(infoClass);

  const isActive = contactInfoContainer.classList.contains(infoClass);
  const opacityValue = isActive ? "1" : "0";

  if (isActive) {
    setTimeout(() => {
      contactIconsContainers.style.opacity = opacityValue;
      contactInfoContainer.style.opacity = opacityValue;
    }, 300);
  } else {
    contactIconsContainers.style.opacity = opacityValue;
    contactInfoContainer.style.opacity = opacityValue;
  }
});
