//get prevailing condition
export default function populateCondition(obj) {
  const condition = document.querySelector("#condition");

  const feelsLike = document.createElement("div");
  feelsLike.classList.add("feelsLike");

  const iconElement = document.createElement("img");
  const tempElement = document.createElement("p");
  tempElement.classList.add("temp");
  const textElement = document.createElement("p");
  textElement.classList.add("conditionNow");
  const tempFeel = document.createElement("p");

  iconElement.src = obj.current.condition.icon;
  tempElement.textContent = `${obj.current.temp_c}°C`;
  textElement.textContent = obj.current.condition.text;
  tempFeel.textContent = `Feels like: ${obj.current.feelslike_c}°C`;

  feelsLike.appendChild(textElement);
  feelsLike.appendChild(tempFeel);

  condition.appendChild(iconElement);
  condition.appendChild(tempElement);
  condition.appendChild(feelsLike);
}
