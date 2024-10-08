const weatherIcon = document.querySelector('.weather-icon')
const temperature = document.querySelector('.temperature')
const weatherDescription = document.querySelector('.weather-description')
const wind = document.querySelector('.wind')
const humidity = document.querySelector('.humidity')
const weatherError = document.querySelector('.weather-error')
const cityVal = document.querySelector('.city')

async function getWeather(cityValue = 'Minsk') {
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityValue}&lang=en&appid=0b758fa196c64f814ddd05a8bedc75f2&units=metric`
  const result = await fetch(url)
  if (result.ok) {
    // отрисовывает погоду при првильном запросе
    const data = await result.json()

    weatherIcon.className = 'weather-icon owf'
    weatherIcon.classList.add(`owf-${data.weather[0].id}`)
    temperature.textContent = `${Math.floor(data.main.temp)}°C`
    weatherDescription.textContent = data.weather[0].description
    wind.textContent = `Wind speed: ${Math.floor(data.wind.speed)} m/s`
    humidity.textContent = `Humidity: ${data.main.humidity}%`
    weatherError.textContent = ''
  } else {
    //когда запрос не верный или пустой инпут отрисовывает ошибку
    weatherIcon.className = ''
    temperature.textContent = ''
    weatherDescription.textContent = ''
    wind.textContent = ''
    humidity.textContent = ''
    weatherError.textContent = 'Error! Nothing to geocode for!'
  }
}
getWeather()

/* Добавление в html обработчика событий onchange заменяет всю эту конструкцию! */
// const city = document.querySelector('.city')
// function setCity(event) {
//   if (event.code === 'Enter') {
//     getWeather()
//     city.blur()
//   }
// }

// document.addEventListener('DOMContentLoaded', getWeather)
// city.addEventListener('keypress', setCity)
