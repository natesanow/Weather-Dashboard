var apiKey = "60e9d15a7fe0bd5c5d1e6e89808bc7c9";
//var cityInput = $("#city-input").val();
var searchBtn = document.querySelector("#search-btn");
var citySearchHistory = document.querySelector("#past-searches");

var city;

function getWeather() {
  searchBtn.disabled = true;
  var cityInput = document.getElementById("city-input").value;
  var requestUrl = `http://api.openweathermap.org/data/2.5/weather?q=${cityInput}&appid=${apiKey}`;
  
    fetch(requestUrl)
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        console.log(data)
        var lat = data.coord.lat
        var lon = data.coord.lon
        console.log(data)
        var requestUrl2 = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${apiKey}`;
        fetch(requestUrl2)
          .then(function (response) {
            return response.json();
          })
          .then(function (data) {
           console.log("2nd", data) 
          })
      }); 

    
}

searchBtn.addEventListener("click", getWeather);
  









