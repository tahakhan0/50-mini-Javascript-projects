const prevButton = document.getElementById("prev");
const nextButton = document.getElementById("next");
const circles = document.querySelectorAll(".circle");
const progressBar = document.querySelector(".progress");
const panels = document.querySelectorAll(".panel");

let currentIndex = 1;
prevButton.addEventListener("click", function () {
  currentIndex > 0 ? currentIndex-- : 0;
  handleChangeCurrentIndex();
});

nextButton.addEventListener("click", function () {
  currentIndex < circles.length ? currentIndex++ : circles.length;
  handleChangeCurrentIndex();
});

function handleChangeCurrentIndex() {
  circles.forEach((circle, index) => {
    if (index < currentIndex) {
      circle.classList.add("active");
    } else {
      circle.classList.remove("active");
    }
  });

  const actives = document.querySelectorAll(".active");
  progressBar.style.width =
    ((actives.length - 1) / (circles.length - 1)) * 100 + "%";

  if (currentIndex === 1) {
    prevButton.disabled = true;
  } else if (currentIndex === circles.length) {
    nextButton.disabled = true;
  } else {
    prevButton.disabled = false;
    nextButton.disabled = false;
  }
  updatePanels();
  makePanelActive();
}

function updatePanels() {
  panels.forEach((panel) => {
    panel.classList.remove("activePanel");
  });
}

function makePanelActive() {
  panels[currentIndex - 1].classList.add("activePanel");
}
