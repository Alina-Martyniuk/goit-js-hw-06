function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const changeColorButton = document.querySelector(".change-color");
const body = document.querySelector("body");
const colorNumber = document.querySelector(".color");

changeColorButton.addEventListener("click", changeColor)

function changeColor() {
  const randomColor = getRandomHexColor();
  body.style.backgroundColor = randomColor;
  colorNumber.textContent = randomColor;
}

