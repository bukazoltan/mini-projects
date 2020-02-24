const btn = document.querySelector('.submitBtn');
const textBox = document.querySelector('.textBox');
const result = document.querySelector('.result');

const validateInput(input) = () = {

}

const handleInput = (e) => {
    validateInput(textBox.value);
    result.innerHTML = textBox.value;
}

textBox.addEventListener('input', handleInput);