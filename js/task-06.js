const textInput = document.querySelector("#validation-input");


const symbolCheck = function (event) {
    if (textInput.value.length === Number(event.currentTarget.getAttribute("data-length"))) {
        textInput.className = "valid";
    } else {
        textInput.className = "invalid";
    }
}

textInput.addEventListener("blur", symbolCheck) 
