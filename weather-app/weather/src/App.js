
import { useState } from 'react';
import './App.css';

function App() {

  const api = {

    key : 'dcc059d17c9a05934e757ee60bd35192',
    base : 'https://api.openweathermap.org/data/2.5/'

  };

  const [value, setValues]= useState("")           //onchange values in input field 
  const [weather,setWeather] = useState({})       //weather values and setting state 

  const SearchLoc = () => {
    fetch(`${api.base}weather?q=${value}&units=metric&APPID=${api.key}`)
    .then((res) => res.json())
    .then((data)=>{
      setWeather(data);
      console.log(data)
    })
  }

  return (
    <div className="App">
      <header className="App-header">

        <h1>Weather App</h1>
        <div>
        <input
        type="text"
        placeholder='Enter Location'
        onChange={(e)=> setValues(e.target.value)}
        
        />
        <button onClick={SearchLoc}>Search</button>
        </div>

        

      {typeof weather.main!=='undefined' ? (
      
      <div>

      {/*Location */ }
      <p><h2>Location : {weather.name}</h2></p>

      {/*Temperature */ }
      <p><h3>Temperature : {weather.main.temp}</h3></p>

      {/*Conditions */ }
      <p><h4>Condition : {weather.weather[0].main}</h4></p>
      
      <p><h5>Wind Speed : {weather.wind.speed}</h5></p>

      </div>
      ) : ("")}

      </header>
    </div>
  );
}

export default App;
