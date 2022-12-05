const textInput = document.querySelector("#name-input");
const nameOutput = document.querySelector("#name-output");

textInput.addEventListener("input", changeName);

function changeName(event) {
    if (event.currentTarget.value === "") {
        nameOutput.textContent = "Anonymous";
    } else {
    nameOutput.textContent = event.currentTarget.value;
    }

    console.log(event.currentTarget.value)
}