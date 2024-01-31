var apiKey = "60e9d15a7fe0bd5c5d1e6e89808bc7c9";
var cityInputEl = document.querySelector("#city-input");
var searchBtnEl = document.querySelector("#search-btn");
var citySearchHistory = document.querySelector("#past-searches");

var city;

function getWeather(data) {
  var requestUrl = "http://api.openweathermap.org/data/2.5/weather?q=Sacramento&appid=60e9d15a7fe0bd5c5d1e6e89808bc7c9";

    fetch(requestUrl)
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        console.log(data)
      }); 
}

getWeather();








