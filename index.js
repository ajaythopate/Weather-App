let data;
let forceCastOutput;


const inputeBox = document.getElementById("InputBox");
const headTime = document.getElementById("current-time");
const countryName = document.getElementById("country-name");
const cityName = document.getElementById("city-name");
const stateName = document.getElementById("state-name");
const dateTime = document.getElementById("timeDate");
const logoImage = document.getElementById("logoImage");
const humidity = document.getElementById("humidity-con");
const windSpeed = document.getElementById("Wind");
const rain = document.getElementById("rain");
const temprature = document.getElementById("current-temp");
const weatherStatus = document.getElementById("weather-condition");
const highTemp = document.getElementById("high-temp");
const lowTemp = document.getElementById("low-temp");
const sunRise = document.getElementById("sunrise");
const Sunset = document.getElementById("sunset");




const getData = async (event) => {
    event.preventDefault();
    if (!inputBox.value) {
        alert("please Enter The City Name:");
        return;
    }
    const city = inputBox.value;

    // Fetch Details 


    const fetchData = await fetch(
        `http://api.weatherapi.com/v1/current.json?key=5561db968c54476780e172557232502&q=${city}`
        
    );

    const orgData = await fetchData.json();
    data = orgData;
    console.log(data);



    // Displaying the data in HTML
    headTime.innerHTML = data.location.localtime;
    cityName.innerHTML = data.location.name;
    countryName.innerText = data.location.country;
    stateName.innerHTML = data.location.region;
    dateTime.innerHTML = data.location.localtime;
    temprature.innerHTML = data.current.temp_c;
    weatherStatus.innerHTML = data.current.condition.text;
    logoImage.src = data.current.condition.icon;
    humidity.innerHTML = data.current.humidity;
    windSpeed.innerHTML = data.current.wind_kph;
    rain.innerHTML = data.current.cloud;
    logoImage.src = data.current.condition.icon;


};