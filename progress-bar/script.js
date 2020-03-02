const formElements = document.querySelectorAll("#autosave > div > textarea, #autosave > div > input");
const progressBar = document.getElementsByTagName("progress");
const percentage = document.querySelector('#percentage');

let readyItems = [];

const checkForm = (e) => {
  // Checks if the form has a value (truthy) and it's not in the tracking array.
  if (e.target.value && !(readyItems.includes(e.target.id)) && e.target.checkValidity()) {
    readyItems.push(e.target.id);
  } else if (!e.target.value || !(e.target.checkValidity())) {
    readyItems = readyItems.filter(element => element !== e.target.id);
  }
  let itemCount = formElements.length;
  // Changes the progress bar's value based on the filled-in items.
  progressBar[0].value = (100 / itemCount) * readyItems.length;
  percentage.textContent = `${(100 / itemCount) * readyItems.length}%`;
}

formElements.forEach(element => {
  element.addEventListener('input', checkForm)
});