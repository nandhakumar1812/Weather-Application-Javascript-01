const APIkey = "6ce5bfc07cf68fd998cc850596aad268"

const APIUrl = "https://api.openweathermap.org/data/2.5/weather?&units=metric&q="

let cityInput = document.querySelector(".city-input")

const searchButton = document.querySelector("#search-button")

var cityName = "";

const weatherIcon = document.querySelector(".weather-icon")

const weatherContainer = document.querySelector(".weather")

const errorContainer = document.querySelector(".error")

const invalidContainer = document.querySelector(".error-city-name")

var responseStatus;

async function checkWeather(city) {

    const response = await fetch(APIUrl + city + `&appid=${APIkey}`);

    var data = await response.json();

    responseStatus = response.status;

    if(responseStatus == 404){

        errorContainer.style.display = "none"

        invalidContainer.style.display = "block"

        weatherContainer.style.display = "none"

    }

    else{
    
        console.log(data);

        document.querySelector(".city").innerHTML = data.name;

        document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°c";

        document.querySelector(".humidity").innerHTML = data.main.humidity + " %";

        document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";

        if (data.weather[0].main == "Clouds"){

            weatherIcon.src = "./images/clouds.png"

        }

        else if (data.weather[0].main == "Clear"){

            weatherIcon.src = "./images/clear.png"

        }

        else if (data.weather[0].main == "Drizzle"){

            weatherIcon.src = "./images/drizzle.png"

        }

        else if (data.weather[0].main == "Mist"){

            weatherIcon.src = "./images/mist.png"

        }

        else if (data.weather[0].main == "Rain"){

            weatherIcon.src = "./images/rain.png"

        }

        else if (data.weather[0].main == "Snow"){

            weatherIcon.src = "./images/snow.png"

        }

        errorContainer.style.display = "none"

        invalidContainer.style.display = "none"

        weatherContainer.style.display = "block"

        cityInput.value = ""
    }

}

searchButton.addEventListener("click" , () => {

    cityName = cityInput.value;

    if (cityName == ""){

        errorContainer.style.display = "block"  
        
        weatherContainer.style.display = "none"

        invalidContainer.style.display = "none"

    }

    else{

        checkWeather(cityName)

    }

})


// checkWeather();