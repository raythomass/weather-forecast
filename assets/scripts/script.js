var nav = document.querySelector(".nav");
var searchBar = document.querySelector(".enter-search");
var submitSearch = document.querySelector(".submit-search");
var searchHistory = document.querySelector(".search-history");
var searchList = document.querySelector('.search-list');
var weather = document.querySelector(".weather");
var date = document.getElementById('current-date');
var weatherBox = document.querySelector('.weather-box');
var currentTemp = document.querySelector('.current-temp');
var currentHumid = document.querySelector('.current-humid');
var currentWind = document.querySelector('.current-wind');

var oneTemp = document.querySelector('.one-t');
var oneHumid = document.querySelector('.one-h');
var oneWind = document.querySelector('.one-w');

var twoTemp = document.querySelector('.two-t');
var twoHumid = document.querySelector('.two-h');
var twoWind = document.querySelector('.two-w');

var threeTemp = document.querySelector('.three-t');
var threeHumid = document.querySelector('.three-h');
var threeWind = document.querySelector('.three-w');

var fourTemp = document.querySelector('.four-t');
var fourHumid = document.querySelector('.four-h');
var fourWind = document.querySelector('.four-w');

var fiveTemp = document.querySelector('.five-t');
var fiveHumid = document.querySelector('.five-h');
var fiveWind = document.querySelector('.five-w');



// var fiveDay = 'api.openweathermap.org/data/2.5/forecast?lat=' + lat + '&lon=' + lon + '&appid=dd649f598f60a0ddabbf4268e47efe79';
// var getCity = 'https://api.openweathermap.org/geo/1.0/direct?q=' + cityName + '&limit=5&appid=dd649f598f60a0ddabbf4268e47efe79';


submitSearch.addEventListener("click", function(){
    localStorage.setItem("search-item", searchBar.value);
    setHistory();
    setDashboardCity();

    var dayDate = dayjs().format('DD/MM/YYYY');
    $('#current-date').text(dayDate);

    var cityName = searchBar.value;
    var getCity = 'https://api.openweathermap.org/geo/1.0/direct?q=' + cityName + '&limit=5&appid=dd649f598f60a0ddabbf4268e47efe79';
    fetch(getCity)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      var lat = data[0].lat;
      var lon = data[0].lon;
      var fiveDay = 'https://api.openweathermap.org/data/2.5/forecast?lat=' + lat + '&lon=' + lon + '&appid=dd649f598f60a0ddabbf4268e47efe79&units=imperial';
      // console.log(fiveDay);

      fetch(fiveDay)
      .then(function(response){
        return response.json();
      })
      .then(function(data){
        console.log(data);
        console.log(data.list[0].main.temp);
        currentTemp.textContent = data.list[0].main.temp + " degrees";
        currentHumid.textContent = data.list[0].main.humidity + " humidity";
        currentWind.textContent = data.list[0].wind.speed + " wind speed";

        oneTemp.textContent = data.list[0].main.temp + " degrees";
        oneHumid.textContent = data.list[0].main.humidity + " humidity";
        oneWind.textContent = data.list[0].wind.speed + " wind speed";

        twoTemp.textContent = data.list[6].main.temp + " degrees";
        twoHumid.textContent = data.list[6].main.humidity + " humidity";
        twoWind.textContent = data.list[6].wind.speed + " wind speed";

        threeTemp.textContent = data.list[14].main.temp + " degrees";
        threeHumid.textContent = data.list[14].main.humidity + " humidity";
        threeWind.textContent = data.list[14].wind.speed + " wind speed";

        fourTemp.textContent = data.list[22].main.temp + " degrees";
        fourHumid.textContent = data.list[22].main.humidity + " humidity";
        fourWind.textContent = data.list[22].wind.speed + " wind speed";

        fiveTemp.textContent = data.list[30].main.temp + " degrees";
        fiveHumid.textContent = data.list[30].main.humidity + " humidity";
        fiveWind.textContent = data.list[30].wind.speed + " wind speed";
      })
      // .then(function(data){
      //   oneTemp.textContent = data.list[0].main.temp + " degrees";
      //   oneHumid.textContent = data.list[0].main.humidity + " humidity";
      //   oneWind.textContent = data.list[0].wind.speed + " wind speed";
      // })
      })
      
      // fetch(fiveDay)
      // .then(function(response){
      //   return response.json();
      // })
      // .then(function(data){
      //   console.log(data);
      // })
});

function setHistory(){
    var historyButton = document.createElement('li');
    historyButton.textContent = localStorage.getItem("search-item");
    searchHistory.appendChild(historyButton);

    historyButton.addEventListener('click', function(){
      localStorage.setItem('search-item', historyButton.textContent);
      setDashboardCity();
      var cityName = historyButton.textContent;
        var getCity = 'https://api.openweathermap.org/geo/1.0/direct?q=' + cityName + '&limit=5&appid=dd649f598f60a0ddabbf4268e47efe79';
        fetch(getCity)
        .then(function (response) {
          return response.json();
        })
        .then(function (data) {
          var lat = data[0].lat;
          var lon = data[0].lon;
          var fiveDay = 'https://api.openweathermap.org/data/2.5/forecast?lat=' + lat + '&lon=' + lon + '&appid=dd649f598f60a0ddabbf4268e47efe79&units=imperial';
          // console.log(fiveDay);
    
          fetch(fiveDay)
          .then(function(response){
            return response.json();
          })
          .then(function(data){
            console.log(data);
            console.log(data.list[0].main.temp);
            currentTemp.textContent = data.list[0].main.temp + " degrees";
            currentHumid.textContent = data.list[0].main.humidity + " humidity";
            currentWind.textContent = data.list[0].wind.speed + " wind speed";
    
            oneTemp.textContent = data.list[0].main.temp + " degrees";
            oneHumid.textContent = data.list[0].main.humidity + " humidity";
            oneWind.textContent = data.list[0].wind.speed + " wind speed";
    
            twoTemp.textContent = data.list[6].main.temp + " degrees";
            twoHumid.textContent = data.list[6].main.humidity + " humidity";
            twoWind.textContent = data.list[6].wind.speed + " wind speed";
    
            threeTemp.textContent = data.list[14].main.temp + " degrees";
            threeHumid.textContent = data.list[14].main.humidity + " humidity";
            threeWind.textContent = data.list[14].wind.speed + " wind speed";
    
            fourTemp.textContent = data.list[22].main.temp + " degrees";
            fourHumid.textContent = data.list[22].main.humidity + " humidity";
            fourWind.textContent = data.list[22].wind.speed + " wind speed";
    
            fiveTemp.textContent = data.list[30].main.temp + " degrees";
            fiveHumid.textContent = data.list[30].main.humidity + " humidity";
            fiveWind.textContent = data.list[30].wind.speed + " wind speed";
          })
          })
    })
}



function setDashboardCity(){
    weatherBox.textContent = localStorage.getItem('search-item');
}



http