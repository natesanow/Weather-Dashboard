var apiKey = "60e9d15a7fe0bd5c5d1e6e89808bc7c9";
var searchBtn = document.querySelector("#search-btn");
var citySearchHistory = document.querySelector("#past-searches");
var cityNameHtml = document.querySelector("#city-name");
var todayDateHtml = document.querySelector("#current-date")
var tempFHtml = document.querySelector("#tempF")
var windSpeedHtml = document.querySelector("#wind-speed")
var humidityHtml = document.querySelector("#humidity")


function getWeather(event) {
  event.preventDefault();
  var cityInput = document.getElementById("city-input").value;
  var requestUrl = `http://api.openweathermap.org/data/2.5/weather?q=${cityInput}&appid=${apiKey}`;
  
  fetch(requestUrl)
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    // today's forecast
    console.log("first data", data)
    var lat = data.coord.lat;
    var lon = data.coord.lon;
    var cityName = data.name;
    cityNameHtml.textContent=cityName;
    console.log("name: ", cityName)
    var todayDate = dayjs().format("dddd MMM DD YYYY");
    todayDateHtml.textContent=todayDate
    console.log("today's date: ", todayDate);
    var tempK = data.main.temp;
    var tempF = Math.round(((tempK-273.15)*1.8)+32);
    tempFHtml.textContent=("Temp: " + [tempF] + "°F")
    console.log("tempF: ", tempF)
    var windSpeed = data.wind.speed;
    windSpeedHtml.textContent=("Wind: " + [windSpeed] + " MPH")
    console.log("wind speed: ", windSpeed);
    var humidity = data.main.humidity;
    humidityHtml.textContent= ("Humidity: " + [humidity] + "%")
    console.log("humidity: ", humidity);
    var iconURL = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
    console.log("icon url: ", iconURL);
    var requestUrl2 = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${apiKey}`;
    fetch(requestUrl2)
      .then(function (response){
        return response.json();
      })
      .then(function (data) {
        console.log(data)
        // 5 week forecast
        var separatedDays = [];
        for (let i=0; i < data.list.length; i++) {
          var dayForecast = data.list[i];
          
          separatedDays.push(dayForecast)
          i = i+7;
          
        }
        console.log("array: ", separatedDays);
        for (i in separatedDays) {
          var date = dayjs(separatedDays[i].dt_txt).format("dddd DD");
          console.log("day of week: ", date);
        }
        
      })
  });

    
}

searchBtn.addEventListener("click", getWeather);
localStorage.setItem(cityName, cityNameHtml);
  









