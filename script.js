var api = "https://api.openweathermap.org/data/2.5/forecast?lat=44.34&lon=10.99&appid=7314d9fbeae6a7a404de26fe55694226"
var searchBtn = document.querySelector('.searchBtn')
var Apikey='7314d9fbeae6a7a404de26fe55694226'
searchBtn.addEventListener('click', searchCity)
function searchCity() {
    var search = document.querySelector('.search')
    searchApi(search.value)
}
function searchApi(cityname){
    var Api=`https://api.openweathermap.org/data/2.5/weather?q=London&appid=${APIkey}`
}
