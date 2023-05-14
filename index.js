
//el codigo de la Api Key es el que va a permitir usa la API en la ubicación del usuario de la app, permite llamar a la API
const API_KEY = '98ce1f4d43f7e433bd57564b120680ee';

const fetchData = position =>{
    const {latitude, longitude} = position.coords;
    fetch(`https://api.openweathermap.org/data/2.5/weather?units=metric&lat=${latitude}&lon=${longitude}&appid=${ API_KEY}`)
    .then(response => response.json())
    .then(data => setWeatherData(data));
    
    console.log(position);
}

const setWeatherData =data=>{
    console.log(data);
    const weatherData ={
        location: data.name,
        description: data.weather[0].main,
        humidity: data.main.humidity,
        pressure: data.main.pressure,
        temperature: data.main.temp,
        date: getDate(),
    }

    Object.keys(weatherData).forEach(key => {
        document.getElementById(key).textContent = weatherData[key];
    });

}

const getDate =()=> {
    let date = new Date();
    return `${date.getDate()}-${('0' + (date.getMonth() +1)).slice(-2)}-${date.getFullYear()}`;
}

const onload = () =>{
    navigator.geolocation.getCurrentPosition(fetchData);
}


