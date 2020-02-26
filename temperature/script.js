// celsius = (fahrenheit - 32) / 1.8

const fahrenheit = document.querySelector('#fahrenheit');
const celsius = document.querySelector('#celsius');

const valueChanged = (e) => {
    if (e.target.id === "fahrenheit") {
        let cel = (e.target.value - 32) / 1.8;
        celsius.value = cel;
    } else if (e.target.id === "celsius") {
        let fa = e.target.value * 1.8 + 32
        fahrenheit.value = fa;
    }
}

fahrenheit.addEventListener('input', valueChanged);
celsius.addEventListener('input', valueChanged);