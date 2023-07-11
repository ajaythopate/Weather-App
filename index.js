// let data;
// let forceCastOutput;


const inputeBox = document.getElementById("InputBox");
const headTime = document.getElementById("current-time");
const countryName = document.getElementById("country-name");
const cityName = document.getElementById("city-name");
const stateName = document.getElementById("state-name");
const dateTime = document.getElementById("timeDate");
const logoImage = document.getElementById("logoImage");
const humidity = document.getElementById("humidity");
const windSpeed = document.getElementById("wind");
const rain = document.getElementById("rain");
const temprature = document.getElementById("current-temp");
const wetherstatus = document.getElementById("wether-condition");
const highTemp = document.getElementById("high-temp");
const lowTemp = document.getElementById("low-temp");
const sunRise = document.getElementById("sunrise");
const sunset = document.getElementById("sunset");




const getData = async (event) => {
    event.preventDefault();
    if (!inputeBox.value) {
        alert("please Enter The City Name");
        return;
    }
    const city  = inputeBox.value;

// Fetch Details 


    const fetchData = await fetch(
        `http://api.weatherapi.com/v1/current.json?key=5561db968c54476780e172557232502&q=${city}`
        
    );

    const orgData = await fetchData.json();
    data = orgData;
    console.log(data);

}