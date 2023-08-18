const apiKey = '78fd246e87860448426aac8ea0c5233e';

document.getElementById('getWeather').addEventListener('click', () => {
  const city = document.getElementById('city').value;
  
  fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`)
    .then(response => response.json())
    .then(data => {
      const weatherData = document.getElementById('weatherData');
      weatherData.innerHTML = `
        <h2>Weather in ${data.name}, ${data.sys.country}</h2>
        <p>Temperature: ${data.main.temp}°C</p>
        <p>Weather: ${data.weather[0].description}</p>
        <p>Humidity: ${data.main.humidity}%</p>
        <p>Wind Speed: ${data.wind.speed} m/s</p>
      `;
    })
    .catch(error => {
      const weatherData = document.getElementById('weatherData');
      weatherData.innerHTML = '<p class="error-message">Invalid city</p>';
    })
});