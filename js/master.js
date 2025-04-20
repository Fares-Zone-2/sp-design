let landing_page = document.querySelector(`.landing-page`);

// Background Settings
let landBackground = [
  "../imgs/img-01.jpg",
  "../imgs/img-02.jpg",
  "../imgs/img-03.jpg",
];

let trueFals = false;
let theInterval;
function randommaiz() {
  theInterval = setInterval(() => {
    let random = Math.ceil(Math.random() * landBackground.length);
    landing_page.style.backgroundImage = `url(../imgs/img-0${random}.jpg)`;
  }, 1000);
}
// randommaiz();

// Background Settings

// Settings Box
let gearSet = document.querySelector(".setIcon");
let setBox = document.querySelector(".setting-box");
gearSet.onclick = () => {
  setBox.classList.toggle("show");
  gearSet.children[0].classList.toggle("fa-spin");
};
// Settings Box

// Colors Options
let colorsLi = document.querySelectorAll(".options li");

colorsLi.forEach((li) => {
  li.addEventListener("click", (e) => {
    colorsLi.forEach((ele) => {
      ele.classList.remove("active");
    });
    e.target.classList.add("active");
    window.localStorage.setItem("backG", e.target.dataset.color);
    document.documentElement.style.setProperty(
      "--main-color",
      e.target.dataset.color
    );
  });
});

function checkLocalBack() {
  let newColor = window.localStorage.getItem("backG");
  if (newColor) {
    document.documentElement.style.setProperty("--main-color", newColor);
    colorsLi.forEach((li) => {
      if (li.dataset.color == newColor) {
        colorsLi.forEach((ele) => {
          ele.classList.remove("active");
        });
        li.classList.add("active");
      }
    });
  }
}
checkLocalBack();
// window.localStorage.clear();

// Random Background

let backSettings = document.querySelector(".random-set");
let yes = document.querySelector(".random-set .yes");
let no = document.querySelector(".random-set .no");

document.querySelectorAll(".random-set span").forEach((ele) => {
  ele.addEventListener("click", (e) => {
    window.localStorage.setItem("yesOrno", e.target.dataset.active);
    document.querySelectorAll(".random-set span").forEach((ele) => {
      ele.classList.remove("active");
    });
    e.target.classList.add("active");
    if (e.target.dataset.active == "yes") {
      trueFals = true;
    } else {
      trueFals = false;
    }
    if (trueFals) {
      randommaiz();
    } else {
      // randommaiz();
      clearInterval(theInterval);
    }
  });
});
// Random Background

set(window.localStorage.getItem("yesOrno"));
function set(target) {
  if (window.localStorage.getItem("yesOrno")) {
    document.querySelectorAll(".random-set span").forEach((span) => {
      span.classList.remove("active");
      if (span.className == target) {
        span.classList.add("active");
        console.log(span);
      }
    });
  }
}

// Colors Options
