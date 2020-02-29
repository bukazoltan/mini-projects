const app = document.getElementById('app');

const URL = 'https://api.github.com/users/bukazoltan/repos';

renderData = (data) => {
    data.forEach(element => {
        let div = document.createElement('div');
        div.classList.add('repo');
        let name = document.createElement('h2');
        let link = document.createElement('a');
        link.setAttribute("href", element.html_url);
        link.appendChild(document.createTextNode(element.name));
        name.appendChild(link);

        div.appendChild(name);

        if (element.description) {
            let description = document.createElement('p');
            description.appendChild(document.createTextNode(element.description));
            div.append(description);
        }
        app.appendChild(div);
    });
}

fetch(URL)
    .then(promise => promise.json())
    .catch(err => console.log(err))
    .then(json => renderData(json))