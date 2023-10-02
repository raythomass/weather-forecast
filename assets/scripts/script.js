var nav = document.querySelector(".nav");
var searchBar = document.querySelector(".enter-search");
var submitSearch = document.querySelector(".submit-search");
var searchHistory = document.querySelector(".search-history");
var weather = document.querySelector(".weather");
var weatherBox = document.querySelector('.weather-box');

var fiveDay = 'api.openweathermap.org/data/2.5/forecast?lat={lat}&lon={lon}&appid=dd649f598f60a0ddabbf4268e47efe79';
// var getCity = 'http://api.openweathermap.org/geo/1.0/direct?q=' + cityName + '&limit=5&appid=dd649f598f60a0ddabbf4268e47efe79';


submitSearch.addEventListener("click", function(){
    localStorage.setItem("search-item", searchBar.value);
    setHistory();
    setDashboardCity();

    var cityName = searchBar.value;
    var getCity = 'http://api.openweathermap.org/geo/1.0/direct?q=' + cityName + '&limit=5&appid=dd649f598f60a0ddabbf4268e47efe79';
    fetch(getCity)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data);
      })
      .then(function(data){
        for(i = 0; i < data.length; i++){
            console.log(data[i].lat);
        }
      })
});

function setHistory(){
    var historyButton = document.createElement('li');
    historyButton.textContent = localStorage.getItem("search-item");
    searchHistory.appendChild(historyButton);
}

function setDashboardCity(){
    weatherBox.textContent = searchBar.value;
}

// function testing(){
//     var test = 'api.openweathermap.org/data/2.5/forecast?lat=33.4484367&lon=-112.074141&appid=dd649f598f60a0ddabbf4268e47efe79';
//     weather.setAttribute('api.openweathermap.org/data/2.5/forecast?lat=33.4484367&lon=-112.074141&appid=dd649f598f60a0ddabbf4268e47efe79');
//     fetch(test)
//     .then(function (response) {
//       return response.json();
//     })
//     .then(function (data) {
//       console.log(data);

//       });

// }

