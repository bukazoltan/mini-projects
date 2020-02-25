const sliders = document.querySelectorAll('.slider');
const box = document.querySelector('.box');
const textarea = document.querySelector('.textbox');
const successText = document.querySelector('.copypaste>p')

const updateTextbox = () => {
    let lines = []
    sliders.forEach(slider => {
        lines.push(`border-${slider.id}-radius: ${slider.value}px;`);
    })
    textarea.value = lines.join("\n")
};

updateTextbox();

const handleSlider = (e) => {
    let propertyName = `border-${e.target.id}-radius`;
    box.style[propertyName] = `${e.target.value}px`;
    updateTextbox();
};

const handleTextbox = () => {
    textarea.select();
    textarea.setSelectionRange(0, 99999); /*For mobile devices*/
    document.execCommand("copy");
    successText.classList.remove('invisible');
    successText.classList.add('success-text');
    setInterval(() => successText.classList.add('invisible'), 1000)
}

textarea.addEventListener('click', handleTextbox);
textarea.addEventListener('selectionchange', handleTextbox);
sliders.forEach(slider => slider.addEventListener('input', handleSlider));