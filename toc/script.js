const toc = document.getElementById("toc");
const mainHeadings = document.getElementsByTagName("h2");

let tocHeading = document.createElement("h2");
tocHeading.appendChild(document.createTextNode("Table of Contents"));
let tocList = document.createElement("ol");
tocList.id = "tocList";
toc.append(tocHeading, tocList);

for (let index = 0; index < mainHeadings.length; index++) {
  let heading = mainHeadings[index];
  // Generates an ID from the first letter of the words and the index in the list
  let firstLettersRegex = /\b[a-zA-Z]/g;
  let id = heading.innerText.match(firstLettersRegex).join("") + index;
  heading.id = id;
  let tocElement = document.createElement("li");
  tocElement.innerHTML = `<a href="#${heading.id}">${heading.textContent}</a>`
  tocList.appendChild(tocElement);
}