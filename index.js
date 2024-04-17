
const city = document.getElementById('city_Name');
const Submit = document.getElementById("Submit");
const Temperature = document.getElementById("temp");
const weatherCondition = document.getElementById("weather");
const Feel = document.getElementById("feel")
const Country = document.getElementById("Country")
const City = document.getElementById("City")
// const Data = document.getElementById("Data");
const humidity = document.getElementById("Humidity")
const pressure =document.getElementById("Pressure")
const Visibility = document.getElementById("Visibility")
const speed = document.getElementById("WindSpeed")
const lucknow = document.getElementById("lucknow");
const gujarat = document.getElementById("gujarat");
const mumbai = document.getElementById("mumbai");
const bengaluru = document.getElementById("Bengaluru");


getWeather("Delhi");
Submit.addEventListener('click', function(){
    event.preventDefault();
    console.log(city.value);
console.log("clicked");
getWeather(city.value);
city.value = "";
})


lucknow.addEventListener('click' , function(){
   event.preventDefault();
  console.log("lucknow clicked")
  getWeather("Lucknow");
})

gujarat.addEventListener('click' , function(){
   event.preventDefault();
  console.log("Gujarat clicked")
  getWeather("Gujarat");
})

mumbai.addEventListener('click' , function(){
   event.preventDefault();
  console.log("Mumbai clicked")
  getWeather("Mumbai");
})

bengaluru.addEventListener('click' , function(){
   event.preventDefault();
  console.log("Bengaluru clicked")
  getWeather("Bengaluru");
})



async function getWeather(city){

const apiKey = 'fec579312566e07af528a3ad339ac40b'; 
const cityName = city; 

const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}`;

fetch(apiUrl)
  .then(response => {
    
    if (response.ok) {
      return response.json(); 
    } else {
      throw new Error('Weather data not available');
    }
  })
  .then(data => {
    
    console.log('Weather Data:', data);
      const temperature = data.main.temp;
      const weather = data.weather[0].description ;
      const feelsLike = data.main.feels_like;
      const cityCountry = data.sys.country;
      const cityName = data.name;
      const cityHumidity = data.main.humidity;
      const cityPressure = data.main.pressure;
      const citySpeed = data.wind.speed;
      const cityVisibility =data.visibility

    
    console.log('Temperature:', temperature);
    console.log('Weather:', feelsLike);

    Temperature.innerHTML = Math.round(temperature - 273)
    weatherCondition.innerHTML = weather;
    Feel.innerHTML = Math.round(feelsLike - 273);
    Country.innerHTML = cityCountry;
    City.innerHTML = cityName;
    humidity.innerHTML =cityHumidity;
    pressure.innerHTML = cityPressure;
    speed.innerHTML = Math.ceil(citySpeed);
    Visibility.innerHTML = cityVisibility



  })
  .catch(error => {
    // Handle any errors that occurred during the fetch
    console.error('Fetch Error:', error.message);
  });
  }




 