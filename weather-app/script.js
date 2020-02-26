const output = document.querySelector('.output');
const city = document.querySelector('.city');
const btn = document.querySelector('.searchBtn');


async function getWeather() {
    const response = await fetch('url');
    return response.json();
};