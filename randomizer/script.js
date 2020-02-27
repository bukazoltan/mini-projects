const app = document.getElementById('app');
app.innerHTML = `<ul class="options"></ul><input type="text" class="input"/><button class="add">Add</button>`
const addButton = document.querySelector('.add');
const textBox = document.querySelector('.input');
const optionsList = document.querySelector('.options');

let options = [];

// Add random button node, only attach if the list of options is not empty
let randomButton = document.createElement("button");
randomButton.appendChild(document.createTextNode('PICK RANDOM'));
randomButton.classList.add('random');
if (options.length > 0) {
    app.appendChild(randomButton);
}

const addText = (e) => {
    if (textBox.value) {
        let listitem = document.createElement("li");
        listitem.appendChild(document.createTextNode(textBox.value));
        optionsList.appendChild(listitem);
        options.push(textBox.value);
        textBox.value = '';
        app.appendChild(randomButton);
    }
}

const pickRandom = () => {
    let random = options[Math.floor(Math.random() * options.length)];
    alert(random);
}

// event listeners
addButton.addEventListener('click', addText);
textBox.addEventListener('submit', addText);
randomButton.addEventListener('click', pickRandom);