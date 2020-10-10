const color = ["crimson", "blue", "gray", "rgb(231, 212, 198)", "#f12025"];

const colr = document.querySelector(".color");
const btn = document.querySelector(".btn-hero");
const body = document.querySelector("body");

// set addEventListener
btn.addEventListener("click", function () {
  const randomColor = randomGenerate();
  colr.textContent = color[randomColor];
  body.style.background = color[randomColor];
});

function randomGenerate() {
  return Math.floor(Math.random() * color.length);
}
