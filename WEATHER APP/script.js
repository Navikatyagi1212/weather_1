var inputvalue = document.querySelector("#cityinput");
var btn = document.querySelector("#add");
var city = document.querySelector("#cityoutput");
var descri = document.querySelector("#description");
var temp = document.querySelector("#temp");
var wind = document.querySelector("#wind");
apik = "4fd22e914a789597b09c1fb8c1b67f2a";
function conversion(val) {
  return (val - 273).toFixed(3);
}

btn.addEventListener("click", function () {
  fetch(
    "https://api.openweathermap.org/data/2.5/weather?q=" +
      inputvalue.value+
      '&appid='+
      apik
  )
    .then((res) => res.json())

    .then((data) => {
      var nameval = data["name"];
      var descri = data["weather"]["0"]["description"];
      var temperature = data["main"]["temp"];
      var wndspeed = data["wind"]["speed"];

      city.innerHTML = `Weather of <span>${nameval}</span>`;
      temp.innerHTML = `Temperature: <span>${conversion(temperature)} C</span>`;
      description.innerHTML = `Sky Conditions:<span>${descri}</span>`;
      wind.innerHTML = `Wind Speed:<span>${wndspeed}km/h</span>`;
    })

    .catch(err=> alert('You entered Wrong city name'))
});
