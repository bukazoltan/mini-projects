let hello = ""
let text = document.querySelector('.hello');
let title = document.querySelector('title');

fetch('https://api.ipify.org/')
    .then(response => response.text())
    .then(response => fetch(`http://ip-api.com/json/${response}`)
        .then(response => response.json())
        .then(response => fetch(`https://fourtonfish.com/hellosalut/?lang=${response['countryCode']}`)
            .then(response => response.json())
            .then(response => {
                hello = response.hello;
                text.innerHTML = `<p class="hello-text">${hello}!<p>`
                title.textContent = `${hello}!`
            })));