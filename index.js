function getCurrentDate() {
  let currentDate = new Date();
  let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  let day = days[currentDate.getDay()];
  let months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  let month = months[currentDate.getMonth()];
  let date = currentDate.getDate();
  let hours = currentDate.getHours();
  let minutes = currentDate.getMinutes();
  return `${day}, ${month} ${date}, ${hours}:${minutes}`;
}

// current date
let putCurrentDate = document.querySelector("h2");
putCurrentDate.innerHTML = getCurrentDate();

// dates for next five days (from d1 - d5)
let d1 = new Date();
let d1Date = document.querySelector("#d1-date");
d1.setDate(d1.getDate() + 1);
d1Date.innerHTML = String(d1).slice(0, 3) + ", " + String(d1).slice(3, 10);

let d2 = new Date();
let d2Date = document.querySelector("#d2-date");
d2.setDate(d2.getDate() + 2);
d2Date.innerHTML = String(d2).slice(0, 3) + ", " + String(d2).slice(3, 10);

let d3 = new Date();
let d3Date = document.querySelector("#d3-date");
d3.setDate(d3.getDate() + 3);
d3Date.innerHTML = String(d3).slice(0, 3) + ", " + String(d3).slice(3, 10);

let d4 = new Date();
let d4Date = document.querySelector("#d4-date");
d4.setDate(d4.getDate() + 4);
d4Date.innerHTML = String(d4).slice(0, 3) + ", " + String(d4).slice(3, 10);

let d5 = new Date();
let d5Date = document.querySelector("#d5-date");
d5.setDate(d5.getDate() + 5);
d5Date.innerHTML = String(d5).slice(0, 3) + ", " + String(d5).slice(3, 10);

// current weather function (all elements)
function showWeather(response) {
  let temperatureElement = document.querySelector("#celsius");
  let temperatureFeelsElement = document.querySelector("#feels-like");
  let humidityElement = document.querySelector("#humidity");
  let windElement = document.querySelector("#wind");
  let iconElement = document.querySelector("#current-weather-icon");
  let temperature = Math.round(response.data.main.temp);
  temperatureElement.innerHTML = `${temperature}°C`;
  let temperatureFeels = Math.round(response.data.main.feels_like);
  temperatureFeelsElement.innerHTML = `${temperatureFeels}°C`;
  let humidity = response.data.main.humidity;
  humidityElement.innerHTML = `${humidity}%`;
  let wind = Math.round(response.data.wind.speed);
  windElement.innerHTML = `${wind}m/s`;
  let icon = `<img src="https://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png">${response.data.weather[0].main}`;
  iconElement.innerHTML = icon;
}
// city name and current weather on the page
function search(event, city) {
  event.preventDefault();
  let cityInput = document.querySelector("#search-text-input");
  let cityName = document.querySelector("#current-city");
  cityName.innerHTML = cityInput.value;
  let apiKey = "616b14cbd38253313b3b8852fa77335d";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityInput.value}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(showWeather);
}
let submitCity = document.querySelector("#search-form");
submitCity.addEventListener("submit", search);

// change to fahrenheit
function changeUnit(event) {
  let celsius = document.querySelector("#celsius");
  let fahrenheit = document.querySelector("#fahrenheit");
  celsius.innerHTML = "55°F";
  fahrenheit.innerHTML = null;
}

let change = document.querySelector("#fahrenheit");
change.addEventListener("click", changeUnit);
