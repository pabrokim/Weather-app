
//get location
export default function populateLocation(object){
    
    const city = document.querySelector('#city');
    const nameElement = document.createElement('p');
    const timeElement = document.createElement('p');
    
    nameElement.textContent = `${object.location.name}, ${object.location.country}`;
    timeElement.textContent = object.current.last_updated;
    
    city.appendChild(nameElement);
    city.appendChild(timeElement);
   
}