const API_KEY = "669c9ef5a59ad63bf4ab19e15e8ec04c"


function geoOk(position) {
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
    fetch(url).then((response) => response.json()).then((data) => {
        const city = document.querySelector("#weather span:first-child")
        const weather = document.querySelector("#weather span:last-child")
        city.innerText = data.name;
        weather.innerText = `(${data.weather[0].main} / ${data.main.temp})`;
    });
}

function geoError() {
    alert("We can't find your location")
}

navigator.geolocation.getCurrentPosition(geoOk, geoError);