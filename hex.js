const color = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

const colr = document.querySelector(".color");
const btn = document.querySelector(".btn-hero");
const body = document.querySelector("body");

btn.addEventListener("click", function () {
  let hexColor = "#";
  for (let i = 0; i < 6; i++) {
    hexColor += color[randomGenerator()];
  }

  colr.textContent = hexColor;
  body.style.background = hexColor;
});

function randomGenerator() {
  return Math.floor(Math.random() * color.length);
}
