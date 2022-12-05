// Option 1

// const incrementButton = document.querySelector('button[data-action="increment"]');
// const decrementButton = document.querySelector('button[data-action="decrement"]');

// const valueElement = document.querySelector('#value');

// let counter = 0;

// const incrementCounter = () => {
//     counter++;
//     valueElement.textContent = `${counter}`;
// }

// const decrementCounter = () => {
//     counter--;
//     valueElement.textContent = `${counter}`;
// }


// incrementButton.addEventListener("click", incrementCounter);
// decrementButton.addEventListener("click", decrementCounter);


// Option 2

const buttons = document.querySelectorAll('button');
const valueElement = document.querySelector('#value');

let counter = 0;

const counterHandler = (event) => {
    const action = event.currentTarget.getAttribute("data-action");
    if (action === "decrement") {
        counter--;
    } else if (action === "increment") {
        counter++;
    } else {
        console.log(`Unexpected action ${action}`)
    }
    valueElement.textContent = `${counter}`;
}

buttons.forEach(button => button.addEventListener("click", counterHandler));
