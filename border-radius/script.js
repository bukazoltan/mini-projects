const sliders = document.querySelectorAll('.slider');
const box = document.querySelector('.box');
const textarea = document.querySelector('.textbox');
const oneLine = document.querySelector('.one-line');
const successText = document.querySelector('.copypaste>p');

const updateTextbox = () => {
    let lines = []
    sliders.forEach(slider => {
        lines.push(`border-${slider.id}-radius: ${slider.value}px;`);
    })
    textarea.value = lines.join("\n");
    oneLine.value = `border-radius: ${sliders[0].value}px ${sliders[1].value}px ${sliders[2].value}px ${sliders[3].value}px;`;
    console.log(oneLine);
};

updateTextbox();

const handleSlider = (e) => {
    let propertyName = `border-${e.target.id}-radius`;
    box.style[propertyName] = `${e.target.value}px`;
    updateTextbox();
};

const handleTextbox = (e) => {
    console.log(e);
    e.target.select();
    e.target.setSelectionRange(0, 99999); /*For mobile devices*/
    document.execCommand("copy");
    successText.classList.remove('invisible');
    successText.classList.add('success-text');
    setInterval(() => successText.classList.add('invisible'), 1000)
}

textarea.addEventListener('click', handleTextbox);
textarea.addEventListener('selectionchange', handleTextbox);
oneLine.addEventListener('click', handleTextbox);
oneLine.addEventListener('selectionchange', handleTextbox);
sliders.forEach(slider => slider.addEventListener('input', handleSlider));