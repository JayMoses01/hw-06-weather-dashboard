var APIKey = "f0f85309843e99526e61a02c79ea8cea";
var city = document.getElementById("city-input");
var searchBtn = document.querySelector('#search-btn');


// Replace HTML id "current-date" with Moments.js current date
/* var dayMonth = moment().format("MM/DD/YYYY");
$("#current-date").text(dayMonth); */

var cityEl = document.getElementById("city");
var todayTempEl = document.getElementById("today-temp");
var todayWindEl = document.getElementById("today-wind");
var todayHumidEl = document.getElementById("today-humidity");
var todayUVEl = document.getElementById("today-uv-index");

var day00El = document.getElementById("current-date");
var day01El = document.getElementById("card-1-header");
var day02El = document.getElementById("card-2-header");
var day03El = document.getElementById("card-3-header");
var day04El = document.getElementById("card-4-header");
var day05El = document.getElementById("card-5-header");

var day01TempEl = document.getElementById("day-1-temp");
var day02TempEl = document.getElementById("day-2-temp");
var day03TempEl = document.getElementById("day-3-temp");
var day04TempEl = document.getElementById("day-4-temp");
var day05TempEl = document.getElementById("day-5-temp");

var day01WindEl = document.getElementById("day-1-wind");
var day02WindEl = document.getElementById("day-2-wind");
var day03WindEl = document.getElementById("day-3-wind");
var day04WindEl = document.getElementById("day-4-wind");
var day05WindEl = document.getElementById("day-5-wind");

var day01HumidEl = document.getElementById("day-1-humidity");
var day02HumidEl = document.getElementById("day-2-humidity");
var day03HumidEl = document.getElementById("day-3-humidity");
var day04HumidEl = document.getElementById("day-4-humidity");
var day05HumidEl = document.getElementById("day-5-humidity");

var searchInputVal = document.querySelector('#city-input').value;




function searchApiCurrent(searchInputVal) {
    var queryURL = "https://api.openweathermap.org/data/2.5/weather?q=" + searchInputVal + "&appid=" + APIKey;

    fetch(queryURL)
      .then(function(response) {
        return response.json();
      })
      .then(function(data) {
        console.log(data);

        // Today's forecast details
        var cityName = data.name;
        cityEl.textContent = cityName;

        var unixDay00 = data.dt;
        var unixFormatDay00 = moment.unix(unixDay00).format("MM/DD/YYYY");

        var weatherIconCurrent = data.weather[0].icon;
        // Fix the code below. I should be creating or appending the HTML element instead--not the concat like I'm currently doing.
        var iconURL = "img src=" + "http://openweathermap.org/img/wn/" + weatherIconCurrent + "@.png" + "width='20' height='20'>";
        day00El.textContent = unixFormatDay00 + " " + iconURL;

        var todayTemp = data.main.temp_max;
        todayTempEl.textContent = "Temp: " + todayTemp;

        var todayWind = data.wind.speed;
        todayWindEl.textContent = "Wind: " + todayWind + " MPH";

        var todayHumid = data.main.humidity;
        console.log(todayHumid);
        todayHumidEl.textContent = "Humidity: " + todayHumid + "%";

        var cityLon = data.coord.lon;
        var cityLat = data.coord.lat;


        searchApiOneCall(cityLat, cityLon);

        /*
        var weatherIconCurrent = data.weather[0].icon;
        getIcon(weatherIconCurrent); */

      })
      .catch(function (error) {
        alert('Unable to connect to OpenWeather');
      });

}


function searchApiOneCall(cityLat, cityLon) {
  var queryURLOne = "https://api.openweathermap.org/data/2.5/onecall?lat=" + cityLat + "&lon=" + cityLon + "&appid=" + APIKey;
  
  fetch(queryURLOne)
    .then(function(response) {
      return response.json();
    })
    .then(function(data) {
      console.log(data);
      var todayUVI = data.current.uvi;
      todayUVEl.textContent = "UV Index: " + todayUVI;

      // 5-day forecast: day 1 details
      var unixDay01 = data.daily[1].dt;
      var unixFormatDay01 = moment.unix(unixDay01).format("MM/DD/YYYY");
      day01El.textContent = unixFormatDay01;

      var day01Temp = data.daily[1].temp.max;
      day01TempEl.textContent = "Temp: " + day01Temp;

      var day01Wind = data.daily[1].wind_speed;
      day01WindEl.textContent = "Wind: " + day01Wind + " MPH";

      var day01Humid = data.daily[1].humidity;
      day01HumidEl.textContent = "Humidity: " + day01Humid + "%";

      // 5-day forecast: day 2 details
      var unixDay02 = data.daily[2].dt;
      var unixFormatDay02 = moment.unix(unixDay02).format("MM/DD/YYYY");
      day02El.textContent = unixFormatDay02;

      var day02Temp = data.daily[2].temp.max;
      day02TempEl.textContent = "Temp: " + day02Temp;

      var day02Wind = data.daily[2].wind_speed;
      day02WindEl.textContent = "Wind: " + day02Wind + " MPH";

      var day02Humid = data.daily[2].humidity;
      day02HumidEl.textContent = "Humidity: " + day02Humid + "%";

      // 5-day forecast: day 3 details
      var unixDay03 = data.daily[3].dt;
      var unixFormatDay03 = moment.unix(unixDay03).format("MM/DD/YYYY");
      day03El.textContent = unixFormatDay03;

      var day03Temp = data.daily[3].temp.max;
      day03TempEl.textContent = "Temp: " + day03Temp;

      var day03Wind = data.daily[3].wind_speed;
      day03WindEl.textContent = "Wind: " + day03Wind + " MPH";

      var day03Humid = data.daily[3].humidity;
      day03HumidEl.textContent = "Humidity: " + day03Humid + "%";

      // 5-day forecast: day 4 details
      var unixDay04 = data.daily[4].dt;
      var unixFormatDay04 = moment.unix(unixDay04).format("MM/DD/YYYY");
      day04El.textContent = unixFormatDay04;

      var day04Temp = data.daily[4].temp.max;
      day04TempEl.textContent = "Temp: " + day04Temp;

      var day04Wind = data.daily[4].wind_speed;
      day04WindEl.textContent = "Wind: " + day04Wind + " MPH";

      var day04Humid = data.daily[4].humidity;
      day04HumidEl.textContent = "Humidity: " + day04Humid + "%";


      // 5-day forecast: day 5 details
      var unixDay05 = data.daily[5].dt;
      var unixFormatDay05 = moment.unix(unixDay05).format("MM/DD/YYYY");
      day05El.textContent = unixFormatDay05;

      var day05Temp = data.daily[5].temp.max;
      day05TempEl.textContent = "Temp: " + day05Temp;

      var day05Wind = data.daily[5].wind_speed;
      day05WindEl.textContent = "Wind: " + day05Wind + " MPH";

      var day05Humid = data.daily[5].humidity;
      day05HumidEl.textContent = "Humidity: " + day05Humid + "%";


    })
    .catch(function (error) {
      alert('Unable to connect to OpenWeather');
    });



}


/*
function getIcon (weatherIconCurrent) {
  var iconURL = "http://openweathermap.org/img/wn/" + weatherIconCurrent + "@.png";

  fetch(iconURL)
    .then(function(response) {
      return response.json();
    })
    .then(function(data) {
      console.log(data);

      console.log(weatherIcon);
      day00El.textContent = unixFormatDay00 + " " + weatherIcon;

    })
    .catch(function (error) {
      alert('Unable to connect to OpenWeather icon API');
    });



}
*/






/*
function printResults() {
  console.log();
  searchApiCurrent();

  // Replace HTML id "city" with cityInput
  cityEl.textContent = searchInputVal;

  // Replace HTML id "current-date" with Moments.js current date
  // Replace HTML id "today-temp" with today's temperature for the searched city.
  todayTempEl.textContent = todayTemp;

  // Replace HTML id "today-wind" with today's temperature for the searched city.
  // Replace HTML id "today-humidity" with today's temperature for the searched city.
  // Replace HTML id "today-uv-index" with today's temperature for the searched city.


  // Replace HTML id "day-1" with forecast day 1 date for searched city.
  // Replace HTML id "day-2" with forecast day 2 date for searched city.
  // Replace HTML id "day-3" with forecast day 3 date for searched city.
  // Replace HTML id "day-4" with forecast day 4 date for searched city.
  // Replace HTML id "day-5" with forecast day 5 date for searched city.


  // Replace HTML id "day-1-temp" with forecast day 1 temp for searched city.
  // Replace HTML id "day-2-temp" with forecast day 2 temp for searched city.
  // Replace HTML id "day-3-temp" with forecast day 3 temp for searched city.
  // Replace HTML id "day-4-temp" with forecast day 4 temp for searched city.
  // Replace HTML id "day-5-temp" with forecast day 5 temp for searched city.


  // Replace HTML id "day-1-wind" with forecast day 1 wind for searched city.
  // Replace HTML id "day-2-wind" with forecast day 2 wind for searched city.
  // Replace HTML id "day-3-wind" with forecast day 3 wind for searched city.
  // Replace HTML id "day-4-wind" with forecast day 4 wind for searched city.
  // Replace HTML id "day-5-wind" with forecast day 5 wind for searched city.


  // Replace HTML id "day-1-humidity" with forecast day 1 humidity for searched city.
  // Replace HTML id "day-2-humidity" with forecast day 2 humidity for searched city.
  // Replace HTML id "day-3-humidity" with forecast day 3 humidity for searched city.
  // Replace HTML id "day-4-humidity" with forecast day 4 humidity for searched city.
  // Replace HTML id "day-5-humidity" with forecast day 5 humidity for searched city.


  // ORRRRRRR DO THIS: create new class="forecast-card" with the data
  // Create 

  // Create searched buttons
  /*var buildSearchBtn = document.createElement("button");
  var citySearched = localStorage.getItem("city");
  buildSearchBtn.setAttribute("class", "buildSearchBtn");
  buildSearchBtn.textContent = citySearched; */


/*
}
*/



// Search button event listener to commit to local storage, add a searched city button, and populate "today-card" and forecast cards.

function handleSearchFormSubmit(event) {
    event.preventDefault();
  
    var searchInputVal = document.querySelector('#city-input').value;
    localStorage.setItem("city",searchInputVal);

    if (!searchInputVal) {
      console.error('You need a search input value!');
      return;
    }
  

    console.log(searchInputVal);

    searchApiCurrent(searchInputVal);
   /* searchApiOneCall(); */
   /* printResults(); */

}




searchBtn.addEventListener('click', handleSearchFormSubmit);



