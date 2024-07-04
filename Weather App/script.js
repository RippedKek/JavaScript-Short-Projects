const apiKey = '9c1c74887bdb89db1e16d54da2c7db2a';

async function checkWeather(city){
    const apiURL = `https://api.openweathermap.org/data/2.5/weather?units=metric&q=${city}`;
    const response = await fetch(apiURL + `&appid=${apiKey}`);
    var data = await response.json();
    console.log(data);
    document.querySelector('.city').innerHTML = data.name;
    document.querySelector('.country').innerHTML = data.sys.country;
    document.querySelector('.temp').innerHTML = data.main.temp + '°C';
    document.querySelector('.humidity').innerHTML = data.main.humidity + '%';
    document.querySelector('.wind').innerHTML = data.wind.speed + ' kmph';
    const weatherIcon = document.querySelector('.weather-icon');
    weatherIcon.src = `images/${data.weather[0].main.toLowerCase()}.png`;
}

checkWeather('Dhaka');

const searchBtn = document.querySelector('.search button');
const searchInput = document.querySelector('.search input');
searchBtn.addEventListener('click',()=>{
    searchCity();
});
searchInput.addEventListener('keydown',(event)=>{
    if(event.key === 'Enter')
        searchCity();
});

function searchCity(){
    const city = searchInput.value;
    checkWeather(city);
}