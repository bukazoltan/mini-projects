// Necessary elements selected
let submitBtn = document.querySelector('#submitBtn');
let textBox = document.querySelector('#textBox');
let output = document.querySelector('#output')

// Validtor, returns true if input only has 0 and 1
const validateInput = (input) => {
    if (/^[0-1]+$/.test(input)) {
        return true;
    } else {
        return false;
    }
};

// Converts binary input to decimal
const convertInput = (input) => {
    let acc = 0;
    let counter = 0;
    for (let i = input.length - 1; i >= 0; i--) {
        let number = parseInt(input[i]);
        let value = number * (Math.pow(2, counter));
        counter++;
        acc += value;
    }
    return acc;
}

// Handles clicking the button - runs conversion if the validation return truthy
const clickHandler = (e) => {
    e.preventDefault();
    if (validateInput(textBox.value)) {
        output.classList.remove('error');
        output.textContent = `That is ${convertInput(textBox.value)} in decimal.`;
    } else {
        // display an error message with the proper class
        output.classList.add('error');
        output.textContent = `This is not a binary number!`
    }
};

// Event listeners
submitBtn.addEventListener('click', clickHandler);