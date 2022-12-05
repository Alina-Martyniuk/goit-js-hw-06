const sizeInput = document.getElementById("font-size-control");
const textChanged = document.getElementById("text");

sizeInput.addEventListener("input", changeSize)

function changeSize(event) {
    textChanged.style.fontSize = event.currentTarget.value + "px";
    console.log(sizeInput.value)

}

