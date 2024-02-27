import React from "react";
import NavB from "./NavB";
import ParticlesBg from 'particles-bg';
// import './style.css'

const Info=()=>{
    return(
        <>
        <ParticlesBg color="#FF4433" type="cobweb" bg={true}/>
            <NavB/>
            <header>
            <div className="centerx">
                <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
              </div>
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <img src="img/banner.jpg" className="d-block w-100" alt="1st Slider"/>
                  <div className="carousel-caption">
                    <h5 className="text-warning">Morning</h5>
                    <p>" Just one small positive thought in the morning can change your whole day. "</p>
                  </div>
                </div>
                <div className="carousel-item">
                  <img src="./img/banner1.jpg" className="d-block w-100" alt="@nd Slider"/>
                  <div className="carousel-caption">
                    <h5 className="text-warning">Creator of your own Destiny</h5>
                    <p>" Opportunities don't happen, you create them. "</p>
                  </div>
                </div>
                <div className="carousel-item">
                  <img src="img/imresizer-1707121903144.jpg" className="d-block w-100" alt="#rd Slider"/>
                  <div className="carousel-caption">
                    <h5 className="text-warning">Defination of Success</h5>
                    <p>“ Success is not final; failure is not fatal: It is the courage to continue that counts. ” </p>
                  </div>
                </div>
              </div>
              <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
              </button>
              <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
              </button>
            </div>
        </div>
    </header>

    <header>
      <div className="text-center my-3">
        <h1 className="infoPaheHeading">Awareness <span className="text-primary">section</span></h1>
        <hr className="w-25 m-auto"/>
      </div>
      <div className=" row">
          <div className=" col-lg-6 col-sm-12 col-12 col-md-12">
              <img src="img/pexels-james-wheeler-417074.jpg" className=" img-fluid img"/>
          </div>
          <div className=" col-lg-6 col-sm-12 col-12 col-md-12 d-flex flex-column justify-content-center">
              <h1 className=" text-center text-success infoPaheHeading">What is Weather?</h1>
              <p className="para">Weather is the state of the atmosphere, including temperature, atmospheric pressure, wind, humidity, precipitation, and cloud cover. It differs from climate, which is all weather conditions for a particular location averaged over about 30 years. Weather is influenced by latitude, altitude, and local and regional geography. It impacts the way people dress each day and the types of structures built.</p>
              <br/>
              <p className="para">Weather is the mix of events that happen each day in our atmosphere. Weather is different in different parts of the world and changes over minutes, hours, days and weeks. Most weather happens in the troposphere, the part of Earth’s atmosphere that is closest to the ground.</p>
              <br/>
          </div>
      </div>
      </header>

      <hr></hr>
      <header className="mt-4">
        <div className=" row directionchange">
          <div className=" col-lg-6 col-sm-12 col-12">
              <h1 className=" text-center text-success infoPaheHeading">How is pollution affecting climate change?</h1>
              <p className="para">Pollutants not only severely impact public health, but also the earth’s climate and ecosystems globally. Most policies to reduce air pollution offer a “win-win” strategy for both health and climate. Lower levels of air pollution result in better cardiovascular and respiratory health of populations in both the long- and short-term. Reducing ambient and household air pollution can also reduce emissions of carbon dioxide (CO2) and short-lived climate pollutants, such as black carbon particles and methane, therefore contributing to the near- and long-term mitigation of climate change. </p>
              <br/>
              <p className="para">
              Black carbon, a component of fine particulate matter, is one of the largest contributors to global warming after CO2. Black carbon warms the earth’s atmosphere by absorbing sunlight, thereby accelerating the melting of snow and ice.  
              </p>
          </div>
          <div className=" col-lg-6 col-sm-12 col-12">
          <img src="img/spooky-forest-moody-sky-electricity-strikes-tree-generative-ai.jpg" className=" img-fluid img"/>
          </div>
        </div>
      </header>
      <hr/>

      <header>
      <div className=" row con">
          <div className=" col-lg-6 col-sm-12 col-12 col-md-12">
              <img src="https://i0.wp.com/allpicts.in/wp-content/uploads/2017/09/Beautiful-Nature-Wallpaper-for-Desktop-with-autumn-forest-picture-in-Morning.jpg?fit=1920%2C1080&ssl=1" className=" img-fluid img"/>
          </div>
          <div className=" col-lg-6 col-sm-12 col-12 col-md-12 d-flex flex-column justify-content-center">
              <h1 className=" text-center text-success infoPaheHeading">What is AQI 107 in weather?</h1>
              <p className="para">Think of the AQI as a yardstick that runs from 0 to 500. The higher the AQI value, the greater the level of air pollution and the greater the health concern. For example, an AQI value of 50 or below represents good air quality, while an AQI value over 300 represents hazardous air quality.</p>
              <br/>

              <p className="para">For each pollutant an AQI value of 100 generally corresponds to an ambient air concentration that equals the level of the short-term national ambient air quality standard for protection of public health. AQI values at or below 100 are generally thought of as satisfactory. When AQI values are above 100, air quality is unhealthy: at first for certain sensitive groups of people, then for everyone as AQI values get higher.</p>
              <br/>

              <p className="para">The AQI is divided into six categories. Each category corresponds to a different level of health concern. Each category also has a specific color. The color makes it easy for people to quickly determine whether air quality is reaching unhealthy levels in their communities.</p>
          </div>
      </div>
      <br/>
      <div className=" row">
        <div className="col-12 col-sm-12 col-lg-12">
          <img src="https://static.vecteezy.com/system/resources/previews/034/782/275/original/infographic-of-air-quality-index-chart-isolated-on-white-background-aqi-basics-for-ozone-particle-pollution-and-pm-2-5-levels-with-cute-cartoon-character-icon-set-illustration-vector.jpg" alt="AQI Basics for Ozone and Particle Pollution" className=" img-fluid" />
        </div>
      </div>
      </header>
      <footer className="footer">
        Created By Rana Kishan
      </footer>
        </>
    )
}


export default Info;