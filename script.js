const searchBox = document.querySelector('.inp');
const searchBtn = document.querySelector('.btn');
const weatherIcon = document.querySelector('.weathericon');
const key = "518971881d40436e2e51b411e9b254c3";
const url = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

async function checkWeather(city){
    const response = await fetch(url + city + `&appid=${key}`);
        if(response.status == 404){
        alert("You Entered Invalid City Name\nPlease Enter Correct City Name");
    }
    else{
    var data = await response.json();

document.querySelector('.temp').innerHTML = Math.round(data.main.temp) + "°C";
document.querySelector('.city').innerHTML = data.name;
document.querySelector('.humidity').innerHTML = data.main.humidity + "%";
document.querySelector('.wind').innerHTML = data.wind.speed + "km/h";

if(data.weather[0].main == "Clouds"){
weatherIcon.src = "images/clouds.png";
}
else if(data.weather[0].main == "Clear"){
weatherIcon.src = "images/clear.png";
}
else if(data.weather[0].main == "Rain"){
weatherIcon.src = "images/rain.png";
}
else if(data.weather[0].main == "Drizzle"){
weatherIcon.src = "images/drizzle.png";
}
else if(data.weather[0].main == "Mist"){
weatherIcon.src = "images/mist.png";
}

document.querySelector(".weather").style.display = "block";

}
}

searchBtn.addEventListener("click",()=>{
    checkWeather(searchBox.value);
});
