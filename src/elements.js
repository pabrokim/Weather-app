//populate weather elements

export default function populateWeatherElements(obj) {
  const forecast = document.querySelector("#forecast");

  const windElement = document.createElement("p");
  windElement.classList.add("elements");
  const humidElement = document.createElement("p");
  humidElement.classList.add("elements");
  const visElement = document.createElement("p");
  visElement.classList.add("elements");
  const presElement = document.createElement("p");
  presElement.classList.add("elements");

  windElement.textContent = `Wind: ${obj.current.wind_kph} km/h`;
  humidElement.textContent = `Humidity: ${obj.current.humidity}%`;
  visElement.textContent = `Visibility: ${obj.current.vis_km} km`;
  presElement.textContent = `Pressure: ${obj.current.pressure_mb} mb`;

  forecast.appendChild(windElement);
  forecast.appendChild(humidElement);
  forecast.appendChild(visElement);
  forecast.appendChild(presElement);
}
