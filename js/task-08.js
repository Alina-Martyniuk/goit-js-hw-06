const form = document.querySelector(".login-form");
let userData = {}

form.addEventListener("submit", handleSubmit)

function handleSubmit(event) {
    event.preventDefault(); 
    if (!form.email.value || !form.password.value) {
        alert(`Please fill email and password`);
    } else {
        userData.email = form.email.value;
        userData.password = form.password.value;
        form.reset();
    }
    console.log(userData)
}


