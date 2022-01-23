var APIKey = "f0f85309843e99526e61a02c79ea8cea";
var city = document.getElementById("city-input");
var searchBtn = document.querySelector('#search-btn');


// Replace HTML id "current-date" with Moments.js current date
var dayMonth = moment().format("MM/DD/YYYY");
$("#current-date").text(dayMonth);

var cityEl = document.getElementById("city");
var todayTempEl = document.getElementById("today-temp");
var todayWindEl = document.getElementById("today-wind");
var todayHumidEl = document.getElementById("today-humidity");
var todayUVEl = document.getElementById("today-uv-index");

var day01El = document.getElementById("day-1");
var day02El = document.getElementById("day-2");
var day03El = document.getElementById("day-3");
var day04El = document.getElementById("day-4");
var day05El = document.getElementById("day-5");

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





/*
function printResults(resultObj) {
    console.log(resultObj);


    // Replace HTML id "city" with cityInput
    // Replace HTML id "current-date" with Moments.js current date
    // Replace HTML id "today-temp" with today's temperature for the searched city.
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



}
*/




function searchApi(searchInputVal) {
    var queryURL = "api.openweathermap.org/data/2.5/weather?q=" + searchInputVal + "&appid=" + APIKey;

    fetch(queryURL)
      .then(function (response) {
        if (response.ok) {
          console.log(response);
          response.json().then(function (data) {
            console.log(data);
          //  displayWeather(data, city);
          });
        } else {
          alert('Error: ' + response.statusText);
        }
      })
      .catch(function (error) {
        alert('Unable to connect to OpenWeather');
      });


}




// Search button event listener to commit to local storage, add a searched city button, and populate "today-card" and forecast cards.

function handleSearchFormSubmit(event) {
    event.preventDefault();
  
    var searchInputVal = document.querySelector('#city-input').value;
    localStorage.setItem(cityEl,searchInputVal);

    if (!searchInputVal) {
      console.error('You need a search input value!');
      return;
    }
  

    console.log(searchInputVal);

    searchApi(searchInputVal);
}




searchBtn.addEventListener('click', handleSearchFormSubmit);



