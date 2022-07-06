let text = document.querySelectorAll(".text");
console.log(text);

let text0 = document.querySelector(".text-0");
let text1 = document.querySelector(".text-1");
let text2 = document.querySelector(".text-2");
let text3 = document.querySelector(".text-3");
let text4 = document.querySelector(".text-4");
let text5 = document.querySelector(".text-5");
let text6 = document.querySelector(".text-6");
let text7 = document.querySelector(".text-7");
let text8 = document.querySelector(".text-8");
let text9 = document.querySelector(".text-9");

// let start = function () {
//   text.forEach(function (el, i) {
//     if (el.classList.contains(`text-${i}`)) {
//       el.classList.add("show");
//     }
//   });
// };

// start();

let start = function () {
  setTimeout(function () {
    text0.classList.add("show");
  }, 100);
  setTimeout(function () {
    text1.classList.add("show");
  }, 200);
  setTimeout(function () {
    text2.classList.add("show");
  }, 300);
  setTimeout(function () {
    text3.classList.add("show");
  }, 400);
  setTimeout(function () {
    text4.classList.add("show");
  }, 500);
  setTimeout(function () {
    text5.classList.add("show");
  }, 600);
  setTimeout(function () {
    text6.classList.add("show");
  }, 700);
  setTimeout(function () {
    text7.classList.add("show");
  }, 800);
  setTimeout(function () {
    text8.classList.add("show");
  }, 900);
  setTimeout(function () {
    text9.classList.add("show");
  }, 1000);
};

let end = function () {
  setTimeout(function () {
    text0.classList.remove("show");
  }, 350);
  setTimeout(function () {
    text1.classList.remove("show");
  }, 450);
  setTimeout(function () {
    text2.classList.remove("show");
  }, 650);
  setTimeout(function () {
    text3.classList.remove("show");
  }, 850);
  setTimeout(function () {
    text4.classList.remove("show");
  }, 1050);
  setTimeout(function () {
    text5.classList.remove("show");
  }, 1250);
  setTimeout(function () {
    text6.classList.remove("show");
  }, 1450);
  setTimeout(function () {
    text7.classList.remove("show");
  }, 1650);
  setTimeout(function () {
    text8.classList.remove("show");
  }, 1850);
  setTimeout(function () {
    text9.classList.remove("show");
  }, 2050);
};

let repert = () => {
  playSlider = setInterval(function () {
    start();
    end();
  }, 2200);
};

repert();

const card = document.querySelectorAll(".card-content");

card.forEach(function (el, i) {
  el.addEventListener("mouseover", function (e) {
    if (el.classList.contains(`card-${i}`)) {
      el.classList.add("isFliped");
    }
  });
  el.addEventListener("mouseout", function (e) {
    if (!e.target.classList.contains(`card-${i}`)) {
      el.classList.remove("isFliped");
    }
  });
});

// imam niz elemenata kojima treba da dodam klasu opacity -1
// svaki element treba nakon odredjenog vremena da dobije klasu
// i nakon odredjenog vremena da skine klasu

// treba mi vreme
// treba mi petlja

let width = window.innerWidth;
let height = window.innerHeight;

console.log(width, height);

// Wrap every letter in a span
var textWrapper = document.querySelector(".ml2");
textWrapper.innerHTML = textWrapper.textContent.replace(
  /\S/g,
  "<span class='letter'>$&</span>"
);

anime
  .timeline({ loop: true })
  .add({
    targets: ".ml2 .letter",
    scale: [4, 1],
    opacity: [0, 1],
    translateZ: 0,
    easing: "easeOutExpo",
    duration: 950,
    delay: (el, i) => 70 * i,
  })
  .add({
    targets: ".ml2",
    opacity: 0,
    duration: 1000,
    easing: "easeOutExpo",
    delay: 1000,
  });

var wrapText = document.querySelector(".ml3");
wrapText.innerHTML = wrapText.textContent.replace(
  /\S/g,
  "<span class='letter'>$&</span>"
);

anime
  .timeline({ loop: true })
  .add({
    targets: ".ml3 .letter",
    scale: [4, 1],
    opacity: [0, 1],
    translateZ: 0,
    easing: "easeOutExpo",
    duration: 950,
    delay: (el, i) => 70 * i,
  })
  .add({
    targets: ".ml3",
    opacity: 0,
    duration: 1000,
    easing: "easeOutExpo",
    delay: 1000,
  });

var wraped = document.querySelector(".ml5");
wraped.innerHTML = wraped.textContent.replace(
  /\S/g,
  "<span class='letter'>$&</span>"
);

anime
  .timeline({ loop: true })
  .add({
    targets: ".ml5 .letter",
    scale: [4, 1],
    opacity: [0, 1],
    translateZ: 0,
    easing: "easeOutExpo",
    duration: 950,
    delay: (el, i) => 70 * i,
  })
  .add({
    targets: ".ml5",
    opacity: 0,
    duration: 1000,
    easing: "easeOutExpo",
    delay: 1000,
  });

var wraText = document.querySelector(".ml6");
wraText.innerHTML = wraText.textContent.replace(
  /\S/g,
  "<span class='letter'>$&</span>"
);

anime
  .timeline({ loop: true })
  .add({
    targets: ".ml6 .letter",
    scale: [4, 1],
    opacity: [0, 1],
    translateZ: 0,
    easing: "easeOutExpo",
    duration: 950,
    delay: (el, i) => 70 * i,
  })
  .add({
    targets: ".ml6",
    opacity: 0,
    duration: 1000,
    easing: "easeOutExpo",
    delay: 1000,
  });

var ml4 = {};
ml4.opacityIn = [0, 1];
ml4.scaleIn = [0.2, 1];
ml4.scaleOut = 3;
ml4.durationIn = 800;
ml4.durationOut = 600;
ml4.delay = 500;

anime
  .timeline({ loop: true })
  .add({
    targets: ".ml4 .letters-1",
    opacity: ml4.opacityIn,
    scale: ml4.scaleIn,
    duration: ml4.durationIn,
  })
  .add({
    targets: ".ml4 .letters-1",
    opacity: 0,
    scale: ml4.scaleOut,
    duration: ml4.durationOut,
    easing: "easeInExpo",
    delay: ml4.delay,
  })
  .add({
    targets: ".ml4 .letters-2",
    opacity: ml4.opacityIn,
    scale: ml4.scaleIn,
    duration: ml4.durationIn,
  })
  .add({
    targets: ".ml4 .letters-2",
    opacity: 0,
    scale: ml4.scaleOut,
    duration: ml4.durationOut,
    easing: "easeInExpo",
    delay: ml4.delay,
  })
  .add({
    targets: ".ml4 .letters-3",
    opacity: ml4.opacityIn,
    scale: ml4.scaleIn,
    duration: ml4.durationIn,
  })
  .add({
    targets: ".ml4 .letters-3",
    opacity: 0,
    scale: ml4.scaleOut,
    duration: ml4.durationOut,
    easing: "easeInExpo",
    delay: ml4.delay,
  })
  .add({
    targets: ".ml4",
    opacity: 0,
    duration: 500,
    delay: 500,
  });

let explore = document.querySelector(".fromLeft");
let section2 = document.querySelector(".section-2");
let navList = document.querySelector(".nav-list");
let menuContainer = document.querySelector(".menu-container");
let listContainer = document.querySelector(".list-container");

menuContainer.addEventListener("click", function (e) {
  e.preventDefault();
  listContainer.classList.toggle("active");
});

explore.addEventListener("click", function (e) {
  e.preventDefault();

  section2.scrollIntoView({ behavior: "smooth" });
});

navList.addEventListener("click", function (e) {
  e.preventDefault();
  if (e.target.classList.contains("nav-link")) {
    let se = e.target.getAttribute("href");
    document.querySelector(se).scrollIntoView({ behavior: "smooth" });
  }
});
let section1 = document.querySelector(".section-1");
let nav = document.querySelector(".navigation");

let moveNavigation = function (enteries, opt) {
  let [entry] = enteries;

  if (!entry.isIntersecting) {
    nav.classList.add("sticky");
  } else {
    nav.classList.remove("sticky");
    listContainer.classList.remove("active");
  }
};

let observer = new IntersectionObserver(moveNavigation, {
  root: null,
  // how much is vervport intersecting sections for sticky navigation
  threshold: 0.01,
  rootMargin: "95px",
});

observer.observe(section1);

let handleLinks = function (e) {
  if (e.target.classList.contains("nav-link")) {
    let target = e.target;

    // search links only in nav
    let siblings = target.closest(".navigation").querySelectorAll(".nav-link");
    let logo = document.querySelector(".logo");

    console.log(siblings);

    // for bind must be arrow function
    siblings.forEach((el) => {
      if (el !== target) {
        el.style.opacity = this;
      }
      logo.style.opacity = this;
    });
  }
};

nav.addEventListener("mouseover", handleLinks.bind(0.5));
nav.addEventListener("mouseout", handleLinks.bind(1));

let reveal = function (text, time) {
  setTimeout(function () {
    text.classList.add("reveal");
  }, time * 1000);
};
// let revealImg = function (text, time) {
//   setTimeout(function () {
//     text.classList.add("revealImg");
//   }, time * 1000);
// };

reveal(nav, 0.5);
