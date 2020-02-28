const tabs = document.querySelectorAll('.tabs > li > a');
let activeId = tabs[0].attributes[0].value.replace(/#/g, ""); // set default active tab

const contents = document.querySelectorAll('div');

showActive = () => {
  contents.forEach(element => {
    if (element.id !== activeId) {
      element.classList.add("inactive");
    } else {
      element.classList.remove("inactive");
    }
  });
}

showActive();

selectTab = (e) => {
  let tabId = e.target.attributes[0].value.replace(/#/g, "");
  e.target.classList,
  activeId = tabId;
  showActive();
}

tabs.forEach(tab => {
  tab.addEventListener('click', selectTab)
});