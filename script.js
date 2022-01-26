// Variables for Open Weather API key, city input, and search buttons.
var APIKey = "f0f85309843e99526e61a02c79ea8cea";
var city = document.getElementById("city-input");
var searchBtn = document.querySelector('#search-btn');
var searchedBtns = document.querySelectorAll('#searched-buttons');

// Variables to get various HTML file elements.
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



// Function to get data for Open Weather current weather API and then update the HTML/DOM.
function searchApiCurrent(searchInputVal) {
    var queryURL = "https://api.openweathermap.org/data/2.5/weather?q=" + searchInputVal + "&units=imperial" + "&appid=" + APIKey;

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
        day00El.textContent = "(" + unixFormatDay00 + ")";

        // Stores the weather icon for today into a variable
        var weatherIconCurrent = data.weather[0].icon;
        
        // Sets the weather icon for today
        var day00IconEl = document.getElementById("today-icon");
        var newIconToday = document.createElement("img");
        newIconToday.src="https://openweathermap.org/img/wn/" + weatherIconCurrent + ".png";
        day00IconEl.appendChild(newIconToday);

        var todayTemp = data.main.temp_max;
        todayTempEl.textContent = "Temp: " + todayTemp + "\xB0" + "F";

        var todayWind = data.wind.speed;
        todayWindEl.textContent = "Wind: " + todayWind + " MPH";

        var todayHumid = data.main.humidity;
        console.log(todayHumid);
        todayHumidEl.textContent = "Humidity: " + todayHumid + "%";

        var cityLon = data.coord.lon;
        var cityLat = data.coord.lat;


        searchApiOneCall(cityLat, cityLon);



      })
      .catch(function (error) {
        alert('Unable to connect to OpenWeather');
      });

}

// Function to get data for Open Weather One Call weather API and then update the HTML/DOM.
function searchApiOneCall(cityLat, cityLon) {
  var queryURLOne = "https://api.openweathermap.org/data/2.5/onecall?lat=" + cityLat + "&lon=" + cityLon + "&units=imperial" + "&appid=" + APIKey;
  
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

      // Storing the weather icon code into a variable
      var weatherIconDay01 = data.daily[1].weather[0].icon;
      
      // Sets the weather icon for today
      var day01IconEl = document.getElementById("day1-icon");
      // day01IconEl.parentNode.removeChild(day01IconEl); // I just added this trying to remove previous icons
      var newIconDay01 = document.createElement("img");
      newIconDay01.src="https://openweathermap.org/img/wn/" + weatherIconDay01 + ".png";
      day01IconEl.appendChild(newIconDay01);

      var day01Temp = data.daily[1].temp.max;
      day01TempEl.textContent = "Temp: " + day01Temp + "\xB0" + "F";

      var day01Wind = data.daily[1].wind_speed;
      day01WindEl.textContent = "Wind: " + day01Wind + " MPH";

      var day01Humid = data.daily[1].humidity;
      day01HumidEl.textContent = "Humidity: " + day01Humid + "%";

      // 5-day forecast: day 2 details
      var unixDay02 = data.daily[2].dt;
      var unixFormatDay02 = moment.unix(unixDay02).format("MM/DD/YYYY");
      day02El.textContent = unixFormatDay02;

      // Storing the weather icon code into a variable
      var weatherIconDay02 = data.daily[2].weather[0].icon;
        
      // Sets the weather icon for today
      var day02IconEl = document.getElementById("day2-icon");
      var newIconDay02 = document.createElement("img");
      newIconDay02.src="https://openweathermap.org/img/wn/" + weatherIconDay02 + ".png";
      day02IconEl.appendChild(newIconDay02);


      var day02Temp = data.daily[2].temp.max;
      day02TempEl.textContent = "Temp: " + day02Temp + "\xB0" + "F";

      var day02Wind = data.daily[2].wind_speed;
      day02WindEl.textContent = "Wind: " + day02Wind + " MPH";

      var day02Humid = data.daily[2].humidity;
      day02HumidEl.textContent = "Humidity: " + day02Humid + "%";

      // 5-day forecast: day 3 details
      var unixDay03 = data.daily[3].dt;
      var unixFormatDay03 = moment.unix(unixDay03).format("MM/DD/YYYY");
      day03El.textContent = unixFormatDay03;

      // Storing the weather icon code into a variable
      var weatherIconDay03 = data.daily[3].weather[0].icon;
        
      // Sets the weather icon for today
      var day03IconEl = document.getElementById("day3-icon");
      var newIconDay03 = document.createElement("img");
      newIconDay03.src="https://openweathermap.org/img/wn/" + weatherIconDay03 + ".png";
      day03IconEl.appendChild(newIconDay03);


      var day03Temp = data.daily[3].temp.max;
      day03TempEl.textContent = "Temp: " + day03Temp + "\xB0" + "F";

      var day03Wind = data.daily[3].wind_speed;
      day03WindEl.textContent = "Wind: " + day03Wind + " MPH";

      var day03Humid = data.daily[3].humidity;
      day03HumidEl.textContent = "Humidity: " + day03Humid + "%";

      // 5-day forecast: day 4 details
      var unixDay04 = data.daily[4].dt;
      var unixFormatDay04 = moment.unix(unixDay04).format("MM/DD/YYYY");
      day04El.textContent = unixFormatDay04;

      // Storing the weather icon code into a variable
      var weatherIconDay04 = data.daily[4].weather[0].icon;
        
      // Sets the weather icon for today
      var day04IconEl = document.getElementById("day4-icon");
      var newIconDay04 = document.createElement("img");
      newIconDay04.src="https://openweathermap.org/img/wn/" + weatherIconDay04 + ".png";
      day04IconEl.appendChild(newIconDay04);

      var day04Temp = data.daily[4].temp.max;
      day04TempEl.textContent = "Temp: " + day04Temp + "\xB0" + "F";

      var day04Wind = data.daily[4].wind_speed;
      day04WindEl.textContent = "Wind: " + day04Wind + " MPH";

      var day04Humid = data.daily[4].humidity;
      day04HumidEl.textContent = "Humidity: " + day04Humid + "%";


      // 5-day forecast: day 5 details
      var unixDay05 = data.daily[5].dt;
      var unixFormatDay05 = moment.unix(unixDay05).format("MM/DD/YYYY");
      day05El.textContent = unixFormatDay05;

      // Storing the weather icon code into a variable
      var weatherIconDay05 = data.daily[5].weather[0].icon;
        
      // Sets the weather icon for today
      var day05IconEl = document.getElementById("day5-icon");
      var newIconDay05 = document.createElement("img");
      newIconDay05.src="https://openweathermap.org/img/wn/" + weatherIconDay05 + ".png";
      day05IconEl.appendChild(newIconDay05);

      var day05Temp = data.daily[5].temp.max;
      day05TempEl.textContent = "Temp: " + day05Temp + "\xB0" + "F";

      var day05Wind = data.daily[5].wind_speed;
      day05WindEl.textContent = "Wind: " + day05Wind + " MPH";

      var day05Humid = data.daily[5].humidity;
      day05HumidEl.textContent = "Humidity: " + day05Humid + "%";


    })
    .catch(function (error) {
      alert('Unable to connect to OpenWeather');
    });



}

// Function to create searched city buttons and to make them re-searchable
function searchedCityButtons() {
    // Creates a searched button
    var searchedCitiesSection = document.getElementById("searched-cities");
    var searchedCity = localStorage.getItem("city");
    var newSearchedButton = document.createElement("button");
    newSearchedButton.classList = "searched-buttons";
    newSearchedButton.addEventListener("click", function(event) {
      console.log(event.currentTarget.innerHTML);
      searchApiCurrent(event.currentTarget.innerHTML);
    })

    searchedCitiesSection.appendChild(newSearchedButton);
    newSearchedButton.textContent = searchedCity;

}




// Search button event listener to commit the search city name to local storage, get weather details via API and run those functions, and run the function to add searched city buttons.
function handleSearchFormSubmit(event) {
    event.preventDefault();
  

    // Clear weather icons
    // var day01IconEl = document.getElementById("day1-icon");
    // day01IconEl.removeChild(newIconDay01);

    var searchInputVal = document.querySelector('#city-input').value;
    localStorage.setItem("city",searchInputVal);

    if (!searchInputVal) {
      console.error('You need a search input value!');
      return;
    }
  

    console.log(searchInputVal);

    searchApiCurrent(searchInputVal);


    searchedCityButtons();

}


function handleSearchFormSubmitBtns(event) {
  event.preventDefault();


  // Clear weather icons
  // var day01IconEl = document.getElementById("day1-icon");
  // day01IconEl.removeChild(newIconDay01);

  var searchInputVal = searchedBtns.textContent;
  localStorage.setItem("city",searchInputVal);

  if (!searchInputVal) {
    console.error('You need a search input value!');
    return;
  }


  console.log(searchInputVal);

  searchApiCurrent(searchInputVal);


  searchedCityButtons();

}




searchBtn.addEventListener('click', handleSearchFormSubmit);



