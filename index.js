
//el codigo de la Api Key es el que va a permitir usa la API en la ubicación del usuario de la app, permite llamar a la API
const API_KEY = '98ce1f4d43f7e433bd57564b120680ee';

const fetchData = position =>{
    const {latitude, longitude} = position.coords;
    fetch(`https://api.openweathermap.org/data/2.5/weather?units=metric&lat=${latitude}&lon=${longitude}&appid=${ API_KEY}`)
    .then(response => response.json())
    .then(data => console.log(data))
    
    console.log(position);
}


const onload = () =>{
    navigator.geolocation.getCurrentPosition(fetchData);
}


