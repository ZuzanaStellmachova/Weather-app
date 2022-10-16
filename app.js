let currentTime = new Date();
let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday"
];
let currentDay = days[currentTime.getDay()];
let day = document.querySelector(".current-weekday");
day.innerHTML = currentDay;

let hours = currentTime.getHours();
let minutes = currentTime.getMinutes();
if (minutes < 10) {
  minutes = "0" + minutes;
}
let time = document.querySelector(".time");
time.innerHTML = hours + ":" + minutes;

// function weatherCurrentLocation (event) {
//     event.preventDefault();
// }


function searchCity(event) {
    event.preventDefault();
    // currentCity.innerHTML = cityInput.value;
    getWeatherFromSearch(cityInput.value);
    cityInput.value = " ";
}
let searchButton = document.querySelector("#search-button");
let cityInput = document.querySelector("#city-input");
let currentCity = document.querySelector(".current-city");
let currentTemperature = document.querySelector(".current-temperature");

searchButton.addEventListener("click", searchCity);


let currentLocationButton = document.querySelector("#btn-location");
currentLocationButton.addEventListener("click", getCurrentPosition);

function getCurrentPosition() {
    navigator.geolocation.getCurrentPosition(getWeatherFromLocation);
}

function getWeatherFromLocation(position) {
    let lat = position.coords.latitude;
    let lon = position.coords.longitude;
    console.log(lat);
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;
    // console.log(apiUrl);
    
    console.log(lon);
    axios.get(apiUrl).then(showWeather);
}

let apiKey = `5863935ee9cca4c02ed68203f807c65b`;

function getWeatherFromSearch(city) {
    console.log(city);
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
    axios.get(apiUrl).then(showWeather);
}


function showWeather(response) {
    console.log(response);
    let temperature = Math.round(response.data.main.temp);
    let currentTemperature = document.querySelector(".current-temperature");
    currentTemperature.innerHTML = temperature + "°";
    // console.log(temperature);
    // console.log("dfrtgyhuj"+response.data.name)
    let city = document.querySelector(".current-city");
    city.innerHTML = response.data.name;
    let weatherDescription = document.querySelector(".weather-description");
    weatherDescription.innerHTML = response.data.weather[0].description;
    console.log(response.data.weather[0].description);
}





