// $(document).ready(function(){
//    getWeather();
// })

function getWeather(){
var url ="http://api.openweathermap.org/data/2.5/weather?q=Boston&units=imperial&APPID="+apiKey;

$.ajax(url,{success: function(data){
  $(".city").text(data.name);
  $(".temp").text(data.main.temp);
}, error: function(error){
  $(".error-message").text("An error occured");
}})
}

function searchWeather(){
  var searchQuery = ${".search"}.val();
  getWeather(searchQuery);
}