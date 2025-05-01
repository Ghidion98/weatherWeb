const apiKey = "8bd68b1a4be3275536e4aab8ae64367b";
const getWeatherBtn = document.getElementById('getWeatherBtn');
getWeatherBtn.addEventListener('click',() => {
      const city = document.getElementById('cityInput').value.trim();
      const resultDiv = document.getElementById('weatherResult');

      if(!city) {
         resultDiv.innerHTML = `<p>Please enter city name<p>`;
      }

      fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`)
      .then(response => response.json())
      .then(data => {
            console.log(data);

            if(data.cod !== 200) {
               resultDiv.innerHTML = `<p> City not found. Please try again.</p>`;
            }else {
               resultDiv.innerHTML = `
                  <h2>Weather in ${data.name}, ${data.sys.country}</h2>
                  <p>Temprature: ${data.main.temp}˚C </p>
                  <p>Condition: ${data.weather[0].description}</p>
                  <p>Wind: ${data.wind.speed}km/h</p>
                  `;
               }
            })
            .catch(error => {
               console.error('Error fetching data:', error);
               resultDiv.innerHTML = `<p>Something went wrong. Please try again later.</P>`;
            });
         });

         window.addEventListener('load',() => {
            document.getElementById('cityInput').value = '';
            document.getElementById('weatherResult').innerHTML = '';
         })