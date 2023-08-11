

import populateLocation from "./location";
import populateCondition from "./condition";
import populateWeatherElements from "./elements";

const searchBtn = document.querySelector('#searchBtn');
searchBtn.addEventListener('click', getWeatherData);

async function getWeatherData(){
  
    const searchTerm = document.querySelector('#searchLoc').value;
    if(searchTerm.trim() === ''){
        alert('Enter a search term');
        return;
    }
       
    const requestUrl = 'https://api.weatherapi.com/v1/current.json?key=95ab83f590514564a1572344230308&q=nairobi';
    const request = new Request(requestUrl);
    const response = await fetch(request, {mode:"cors"});
    const weatherData = await response.json();
    
    populateLocation(weatherData);
    populateCondition(weatherData);
    populateWeatherElements(weatherData);
    
    return weatherData;
}





