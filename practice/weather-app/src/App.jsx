import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="container-fluid p-4">
  <div className="row g-4">
    {/* LEFT PANEL */}
    <div className="col-lg-3">
      <div className="weather-left p-4 h-100">
        <input
          type="text"
          className="form-control rounded-pill mb-4"
          placeholder="Search city..."
        />
        <div className="text-center">
          <img
            src="/Weather-image.png"
            className="img-fluid mb-3"
          />
          <h1 className="temp">30°C</h1>
          <p>Kuala Lumpur</p>
          <p>Monday</p>
          <hr />
          <p>
            <i className="bi bi-cloud-drizzle" /> Light Rain
          </p>
          <p>
            <i className="bi bi-thermometer-low" />
            Min Temperature - 28°C
          </p>
          <p>
            <i className="bi bi-thermometer-high" />
            Max Temperature - 31°C
          </p>
          <div className="d-flex justify-content-between mt-3">
            <span>
              <i className="bi bi-water fs-1" /> 83%
            </span>
            <span>
              <i className="bi bi-wind fs-1" /> 6 km/h
            </span>
          </div>
        </div>
      </div>
    </div>
    {/* RIGHT PANEL */}
    <div className="col-lg-9">
      <div className="weather-right p-4">
        <div className="d-flex gap-3 mb-4">
          <span>Today</span>
          <span className="fw-bold">Week</span>
        </div>
        <div className="row g-3 mb-4">
          <div className="col">
            <div className="day-card text-center p-3">
              <p>Sun</p>
              <img src="/1.png" alt="" />
              <p>32°</p>
            </div>
          </div>
          <div className="col">
            <div className="day-card text-center p-3">
              <p>Mon</p>
              <img src="/2.png" alt="" />
              <p>31°</p>
            </div>
          </div>
          <div className="col">
            <div className="day-card text-center p-3">
              <p>Tue</p>
              <img src="3.png" alt="" />
              <p>27°</p>
            </div>
          </div>
          <div className="col">
            <div className="day-card text-center p-3">
              <p>Wed</p>
              <img src="/4.png" alt="" />
              <p>31°</p>
            </div>
          </div>
          <div className="col">
            <div className="day-card text-center p-3">
              <p>Thu</p>
              <img src="/5.png" alt="" />
              <p>25°</p>
            </div>
          </div>
          <div className="col">
            <div className="day-card text-center p-3">
              <p>Fri</p>
              <img src="/5.png" alt="" />
              <p>26°</p>
            </div>
          </div>
          <div className="col">
            <div className="day-card text-center p-3">
              <p>Sat</p>
              <img src="/4.png" alt="" />
              <p>30°</p>
            </div>
          </div>
        </div>
        <h5 className="mb-3">Today's Overview</h5>
        <div className="row g-3">
          <div className="col-md-4">
            <div className="info-card p-3">
              <p>Air Quality Index</p>
              <h3>53</h3>
              <div className="d-flex justify-content-between ">
                <span className="text-success mt-2">Good</span>
                <img src="air-pollution.png" alt="" />
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="info-card p-3">
              <p>UV Index</p>
              <h3>3</h3>
              <div className="d-flex justify-content-between ">
                <span className="text-warning mt-2">Moderate</span>
                <img src="uv.png" alt="" />
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="info-card p-3">
              <p>Pressure</p>
              <h3>1006</h3>
              <div className="d-flex justify-content-between ">
                <span className=" mt-2">Normal</span>
                <img src="barometer.png" alt="" />
              </div>
            </div>
          </div>
        </div>
        {/* {/* Precipitation & Sunrise/Sunset * /} */}
        <div className="mt-3" />
        <div className="row g-3">
          <div className="col-md-7">
            <div className="info-card p-3">
              <p>Precipation</p>
              <img
                src="Line Chart.png"
                alt=""
                className="img-fluid"
              />
            </div>
          </div>
          <div className="col-md-5">
            <div className="info-card p-3 py-4">
              <p>Sunrise &amp; Sunset</p>
              <div className="d-flex text-center">
                <i className="bi bi-sunrise fs-1 brwn-color" />{" "}
                <div className="d-flex flex-column ms-2 ">
                  <span className="brwn-color">Sunrise</span>{" "}
                  <span>7.04am</span>
                </div>
              </div>
              <div className="d-flex text-center">
                <i className="bi bi-sunrise fs-1 brwn-color" />{" "}
                <div className="d-flex flex-column ms-2 ">
                  <span className="brwn-color">Sunset</span> <span>6.04pm</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

    </>
  )
}

export default App
