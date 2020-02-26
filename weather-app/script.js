const output = document.querySelector('.output');
const city = document.querySelector('.city');
const btn = document.querySelector('.searchBtn');


async function getWeather() {
  const response = await fetch('http://api.weatherstack.com/current?access_key=6b236b011fcc1ef180f7285df7ef1ca9&query=budapest')
  return response.json();     
};
