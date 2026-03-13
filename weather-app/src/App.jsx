import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const  [weather,setWeather]=useState(null);
  const [city, setCity] = useState("Quetta"); // default city
  const [isloading, setIsloading]=useState(true);

  const getWeather=async(searchCity)=>{
    setIsloading(true);
    try{
      const response = await fetch(
        `http://api.weatherapi.com/v1/current.json?key=4c3d9a39384044fcb9993911261203&q=${searchCity}`
      );
      const data = await response.json();
      setWeather(data);
    } catch(error){
      alert("City not found!");
      setWeather(null);
    }
    setIsloading(false);
  }

  // load default city on page load
  useEffect(()=>{
    getWeather(city);
  },[]);

  // handle search
  const handleSearch = (e) => {
    e.preventDefault(); // prevent page refresh
    if(city.trim() !== ""){
      getWeather(city);
    }
  }

  if(isloading){
    return(
      <div className='text-white text-center mt-5'>Loading........</div>
    )
  }

  function getIconByCondition(condition){
  if(condition.includes("Sunny")) return "/icons/sun.png";
  if(condition.includes("Cloud")) return "/icons/cloud.png";
  if(condition.includes("Rain")) return "/icons/rain.png";
  if(condition.includes("Snow")) return "/icons/snow.png";
  return "/icons/default.png";
}

  return (
    <div className="container-fluid p-4">
      <div className="row g-4">
        {/* LEFT PANEL */}
        <div className="col-lg-3">
          <div className="weather-left p-4 h-100">
            <form onSubmit={handleSearch}>
              <input
                type="text"
                className="form-control rounded-pill mb-3"
                placeholder="Search city..."
                value={city}
                onChange={(e)=>setCity(e.target.value)}
              />
              <button className="btn btn-primary w-100 mb-3" type="submit">Search</button>
            </form>
            {weather && (
              <div className="text-center">
                <img 
    src={`https:${weather.current.condition.icon}`} 
    alt={weather.current.condition.text} 
    className="img-fluid mb-3"
  />
                <h1 className="temp">{weather.current.temp_c}°C</h1>
                <p>{weather.location.name}</p>
                <p>Monday</p>
                <hr />
                <p>
                  <i className="bi bi-cloud-drizzle" /> {weather.current.condition.text}
                </p>
                <p>
                  <i className="bi bi-thermometer-low" />
                  Min Temperature - {weather.current.temp_c-2}°C
                </p>
                <p>
                  <i className="bi bi-thermometer-high" />
                  Max Temperature - {weather.current.temp_c+2}°C
                </p>
                <div className="d-flex justify-content-between mt-3">
                  <span>
                    <i className="bi bi-water fs-1" /> {weather.current.humidity}%
                  </span>
                  <span>
                    <i className="bi bi-wind fs-1" /> {weather.current.wind_kph} km/h
                  </span>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* RIGHT PANEL */}
        <div className="col-lg-9">
          {/* Rest of your right panel UI stays same */}
        </div>
      </div>
    </div>
  )
}

export default App