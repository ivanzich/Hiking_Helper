// For scrolliong window //
$(".navBtn").on("click", scrollWin);

function scrollWin(event) {
    event.preventDefault();
    var sectionName = $(this).data("name");
    $('html, body').animate({
        scrollTop: $("." + sectionName).offset().top
    }, 1000);

}
//APIKey for weatherUnderground
var APIKey = "62728fafacbc4b15";


//--------------- 5 day Forecast Based on User search; city or zipcode  -------------------//
$("#weatherForecastButton").on("click", function(event) {
event.preventDefault();
//removes the previous data to display new data
$(".locationForecast").remove();
$(".inputWarning").hide();
//gets user input value
var zipOrCity = $("#weatherZipCode").val();
// query base on user input
var queryURL = "https://api.wunderground.com/api/" + APIKey + "/forecast10day/q/" + zipOrCity + ".json";

//ajax call to fetch data
$.ajax({
	url: queryURL,
	method: 'GET',
	data: {}, // Additional parameters here
	dataType: 'json'
})
.done(function(response) {
	$(".dailyForecast").empty();	
	// if the user input does not match any city
	if (response.response.results) {
		$(".inputWarning").show();     
	}
     if (response.response.error) {
		 $(".inputWarning").show();
	 }
	 //gets average weather 
	 var avgtempforecast = [];
	 for (var i = 0; i < 5; i++) {
		 var a = [];
		 a[i] = (parseInt(response.forecast.simpleforecast.forecastday[i].high.fahrenheit) + 
		 parseInt(response.forecast.simpleforecast.forecastday[i].low.fahrenheit));
		 avgtempforecast[i] = a[i] / 2;
                
// display data
var forecast = $(".dailyForecast").append("<div class=\"todayForecast\" ><h5>" + 
response.forecast.simpleforecast.forecastday[i].date.weekday +
"</h5><h6><b>" + response.forecast.simpleforecast.forecastday[i].date.monthname + " " + 
response.forecast.simpleforecast.forecastday[i].date.day +
"</b></h6><h4>" + avgtempforecast[i] +
"<sup>o</sup>F</h4><img id =\"weatherIcon\" src=" + 
response.forecast.simpleforecast.forecastday[i].icon_url +
"><h6>" + response.forecast.simpleforecast.forecastday[i].conditions +
" </h6><p>Humid " + response.forecast.simpleforecast.forecastday[i].avehumidity +
"  %</p><p>H: " + response.forecast.simpleforecast.forecastday[i].high.fahrenheit +
" <sup>o</sup>F</p>" + " " + "<p>L: " + response.forecast.simpleforecast.forecastday[i].low.fahrenheit 
+ " <sup>o</sup>F</p></div>");
var p = $(".dailyForecast").append(forecast);
	}
        });
});

