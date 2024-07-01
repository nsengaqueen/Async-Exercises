async function getCountryAndWeather(countryName) {
  try {
  
    const countryResponse = await fetch(
      `https://restcountries.com/v3.1/name/${countryName}`
    );
    if (!countryResponse.ok) throw new Error("Country not found");
    const countryData = await countryResponse.json();

   
    const country = countryData[0];
    const name = country.name.common;
    const capital = country.capital[0];
    const [lat, lon] = country.capitalInfo.latlng;

  
    const weatherResponse = await fetch(
      `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current_weather=true`
    );
    if (!weatherResponse.ok) throw new Error("Weather data not available");
    const weatherData = await weatherResponse.json();

   
    const temperature = weatherData.current_weather.temperature;
    console.log(`Country: ${name}`);
    console.log(`Capital: ${capital}`);
    console.log(`Current Temperature: ${temperature}°C`);
  } catch (error) {
    console.error("Error:", error.message);
  }
}


getCountryAndWeather("France");
