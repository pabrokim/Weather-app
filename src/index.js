import populateLocation from "./location";
import populateCondition from "./condition";
import populateWeatherElements from "./elements";

const searchBtn = document.querySelector("#searchBtn");
searchBtn.addEventListener("click", getWeatherData);

async function getWeatherData() {
  const container = document.querySelector("#container");
  const searchTerm = document.querySelector("#searchLoc").value;
  if (searchTerm.trim() === "") {
    alert("Enter a search term");
    return;
  }

  const weatherApiKey = "95ab83f590514564a1572344230308";
  const giphyApiKey = "hW0ipU5eE3wLaTa7C9u8vSLcbiEJLAIN";

  const weatherRequestUrl = `https://api.weatherapi.com/v1/current.json?key=${weatherApiKey}&q=${searchTerm}`;
  const weatherRequest = new Request(weatherRequestUrl);
  const response = await fetch(weatherRequest, { mode: "cors" });
  const weatherData = await response.json();
  console.log(weatherData);

  populateLocation(weatherData);
  populateCondition(weatherData);
  populateWeatherElements(weatherData);

  const weatherCondition = weatherData.current.condition.text;

  const giphyRequestUrl = `https://api.giphy.com/v1/gifs/random?api_key=${giphyApiKey}&tag=${weatherCondition}`;
  const giphyResponse = await fetch(giphyRequestUrl, { mode: "cors" });
  const giphyData = await giphyResponse.json();
  console.log(giphyData);
  const gifUrl = giphyData.data.images.original.url;

  container.style.background = `
        url(${gifUrl}) center / cover no-repeat, 
        rgba(255, 255, 255, 0.5)
      `;

  return weatherData;
}
