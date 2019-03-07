$( document ).ready(function() {
  function callingApi(city) {
$.get("https://api.openweathermap.org/data/2.5/weather?q="+city+"&APPID=edffadac5eab7eea07b7479fa0409053&units=metric", function(cities) {
  document.getElementById("current_city").innerText = cities.name
  document.getElementById("city_temp").innerText = cities.main.temp
  });
}
function updateTemperature () {
  temperature = document.getElementById("temperature")
  temperature.innerText = thermostat.temperature
}
function updateUsage () {
  usage = document.getElementById("usage")
  usage.innerText = thermostat.usage()
  $('#usage').attr('class', thermostat.usage());
}

$( "#temperature-reset" ).click(function( event ) {
  thermostat.reset(); console.log(1)
  updateTemperature()
  updateUsage()

})
$( "#temperature-up" ).click(function( event ) {
  thermostat.up(); console.log(2)
  updateTemperature()
  updateUsage()

})
$( "#temperature-down" ).click(function( event ) {
  thermostat.down(); console.log(3)
  updateTemperature()
  updateUsage()

})
$( "#powersaving-on" ).click(function( event ) {
  thermostat.powersave('on'); console.log(4)
  document.getElementById("power-saving-status").textContent = 'on'
  updateTemperature()
  updateUsage()

})
$( "#powersaving-off" ).click(function( event ) {
  thermostat.powersave('off'); console.log(4)
  document.getElementById("power-saving-status").textContent = 'off'
  updateTemperature()
  updateUsage()

})
var thermostat = new Thermostat();
updateTemperature();
updateUsage();
  $( "#show_weather" ).click(function( event ) {
    city = document.getElementById("city")
    callingApi(city.value)
  });

});
