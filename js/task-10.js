function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const buttonCreate = document.querySelector("button[data-create]");
const buttonDestroy = document.querySelector("button[data-destroy]");
const counter = document.querySelector(`input[type="number"]`);

buttonCreate.addEventListener("click", createBoxes);
buttonDestroy.addEventListener("click", destroyBoxes);

function createBoxes() {
  for (let i = 0; i < counter.value; i++) {
    let newEl = document.createElement("div");
    newEl.classList = "newCard";
    newEl.style.backgroundColor = getRandomHexColor();
    newEl.style.width = (30 + i * 10) + `px`;
    newEl.style.height = (30 + i * 10) + `px`;
    document.getElementById("boxes").append(newEl);
    console.log(newEl)
  }
}

function destroyBoxes() {
  document.querySelectorAll(".newCard").forEach((element) => element.remove());
}