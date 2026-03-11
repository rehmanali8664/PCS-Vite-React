import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <section>
  <div className="container-fluid  ">
    <div className="row  m-3 justify-content-between column-gap-0">
      {/* 1st column */}
      
      <div className="col-12 col-md-3 d-flex flex-column  color1 rounded-4 ">
        <div>
          <form className="d-flex mb-3 ms-4 w-75" role="search">
            <div className="input-group">
              <span className="input-group-text rounded-start-4 search-color">
                <i className="bi bi-search" />
              </span>
              <input
                className="form-control rounded-end-4 search-color"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
            </div>
          </form>
        </div>
        <div className="text-center mb-3">
          <img
            src="Weather-image.png"
            alt="Weather"
            className="img-fluid mb-2"
            width={200}
          />
          <div className="h1 fw-bold fs-1 primary-color">
            30°<sup>C</sup>
          </div>
          <div className="primary-color fsize d-flex justify-content-around  ">
            <span>Kuala Lumpur</span> | <span>Monday</span>
          </div>
        </div>
        <hr />
        <div className='container'>
        <div className="mb-md-2 primary-color mt-s">
          <i className="bi bi-cloud-rain me-2 " /> <span className='left-font'>Light Rain</span>
        </div>
        <div className="mb-md-2 primary-color">
          <i className="bi bi-thermometer-low me-2" /><span className='left-font'> Temperature Low - 28°</span>
          <sup>C</sup>
        </div>
        <div className="mb-md-2 primary-color">
          <i className="bi bi-thermometer-high me-2" /><span className='left-font'> Temperature High - 31°</span>
          <sup>C</sup>
        </div>
        <div className="d-flex justify-content-around card-bg rounded-3 mt-s">
          <div className="d-flex align-items-center">
            <i className="bi bi-water me-md-2 text-white fs-1" />
            <div className="primary-color left-font">
             <b> 83%</b>
              <br />
              Humidity
            </div>
          </div>
          <div className="d-flex align-items-center">
            <i className="bi bi-wind me-2 text-white  fs-1" />
            <div className="primary-color left-font">
              <b>6 km/h</b>
              <br />
              Wind Speed
            </div>
          </div>
        
        </div>
      </div>
      </div>
      {/* 2nd column */}
      <div className="col-12 col-md-8 color1 rounded-4">
        <div className='container'>
        <div className="d-flex mb-md-5  primary-color">
          <span>Today</span>
          <span className='ms-md-3'>Week</span>
        </div>
        {/* 7-day forecast */}
        <div className="d-flex gap-2 mb-4">
          {/* Repeat for each day */}
          <div className="d-flex flex-column align-items-center card card-bg text-white">
            <div className='m-4 text-center primary-color'>
            <div>Sun</div>
            <img
              src="/1.png"
              alt="Sun"
              className="img-fluid mb-1 card-img"
            />
            <div>32°</div>
          </div></div>
          
          <div className="d-flex flex-column align-items-center card card-bg text-white">
             <div className='m-4 text-center primary-color'>
            <div>Mon</div>
            <img
              src="2.png"
              alt="Mon"
              className="img-fluid mb-1  card-img"
              width={50}
            />
            <div>31°</div>
          </div>
          </div>
          <div className="d-flex flex-column align-items-center card card-bg text-white">
            <div className=' m-4 text-center primary-color'>
            
            <div>Tue</div>
            <img
              src="3.png"
              alt="Tue"
              className="img-fluid mb-1  card-img"
              width={50}
            />
            <div>27°</div>
          </div></div>
          <div className="d-flex flex-column align-items-center card card-bg text-white">
            <div className='m-4 text-center primary-color'>
            <div>Wed</div>
            <img
              src="4.png"
              alt="Wed"
              className="img-fluid mb-1  card-img"
              width={50}
            />
            <div>31°</div>
          </div></div>
          <div className="d-flex flex-column align-items-center card card-bg text-white ">
            <div className='m-4 text-center primary-color'>
            <div>Thu</div>
            <img
              src="5.png"
              alt="Thu"
              className="img-fluid mb-1  card-img"
              width={50}
            />
            <div>25°</div>
          </div></div>
          <div className="d-flex flex-column align-items-center card card-bg text-white">
            <div className='m-4 text-center primary-color'>
            <div>Fri</div>
            <img
              src="5.png"
              alt="Fri"
              className="img-fluid mb-1  card-img"
              width={50}
            />
            <div>26°</div>
          </div></div>
          <div className="d-flex flex-column align-items-center card card-bg text-white">
            <div className='m-4 text-center primary-color'>
            <div>Sat</div>
            <img
              src="4.png"
              alt="Sat"
              className="img-fluid mb-1  card-img"
              width={50}
            />
            <div>30°</div>
          </div></div>
        </div>
        <div className="mb-3 primary-color">Today's Overview</div>
        {/* Air Quality, UV, Pressure */}
        
      <div className="container-fluid py-4">
  {/* Flex container */}
  <div className="d-flex flex-wrap justify-content-between">
    {/* Card 1 */}
    <div className="card card-bg1 primary-color flex-grow-1 me-2 mb-2 p-3">
      <div>Air Quality Index</div>
      <div className="fw-bold fs-3">53</div>
      <div className="d-flex justify-content-between mt-2">
        <span className='text-success'>Good</span>
        <img src="air-pollution.png" alt="" className='img-fluid'/>
      </div>
    </div>

    {/* Card 2 */}
    <div className="card card-bg1 primary-color flex-grow-1 mx-2 mb-2 p-3">
      <div>UV Index</div>
      <div className="fw-bold fs-3">3</div>
      <div className="d-flex justify-content-between mt-2">
        <span className='text-warning'>Moderate</span>
        <img src="uv.png" alt="" className='img-fluid'/>
      </div>
    </div>

    {/* Card 3 */}
    <div className="card card-bg1 primary-color flex-grow-1 ms-2 mb-2 p-3">
      <div>Pressure (hPa)</div>
      <div className="fw-bold fs-3">1006</div>
      <div className="d-flex justify-content-between mt-2">
        <span>Normal</span>
        <img src="barometer.png" alt="" className='img-fluid'/>
      </div>
    </div>
  </div>
</div>
        {/* Precipitation & Sunrise/Sunset */}
        <div className="d-flex justify-content-between">
          <div className='d-none d-md-block'>
            <div>Precipitation</div>
            <img
              src="Line Chart.png"
              alt="Precipitation"
              className="img-fluid"
              width={300}
            />
          </div>
          
            <div className='primary-color'>Sunrise &amp; Sunset</div>
            <div className="d-flex align-items-center mb-2  ">
              <i className="bi bi-sunrise me-2 fs-3 icon-color " />
              <div>
                <div className=" icon-color">Sunrise</div>
                <div>7:06 AM</div>
              </div>
            </div>
            <div className="d-flex align-items-center">
              <i className="bi bi-sunset me-2 fs-3 icon-color" />
              <div>
                <div className="icon-color">Sunset</div>
                <div>7:03 PM</div>
              </div>
            </div>
          </div>
        
      </div>
      </div>
    </div>
  </div>
</section>

    </>
  )
}

export default App
