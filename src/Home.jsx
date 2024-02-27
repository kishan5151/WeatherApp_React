import React from "react";
import NavB from "./NavB";
import { Typewriter } from 'react-simple-typewriter';
import { useState } from 'react';
import ReactiveButton from 'reactive-button';
import ParticlesBg from 'particles-bg';
import { useNavigate } from "react-router-dom";

const Home=()=>{
    const [state, setState] = useState('idle');
    const navigate=useNavigate()
    const onClickHandler = () => {
      setState('loading');
  
      // send an HTTP request
      setTimeout(() => {
        navigate("/weather")
      }, 2000);
    };
  
    return(
        <>{}
            <ParticlesBg color="#FF4433" num={200} type="random" bg={true}/>
            <NavB/>
            <div className="box">
                <div className="boxele">
                <h1 className=""><Typewriter words={['Welcome to our Weather App','😊 You are Special for Us 😊']} typeSpeed={50} deleteSpeed={30} loop="true" cursor="true"/></h1>
                <p>You can easily detect Weather Information Acoording to a city name</p>
                    <div className="btndiv">
                        <ReactiveButton
                            buttonState={state}
                            idleText="Get Started"
                            loadingText="Loading"
                            successText="Done"
                            onClick={onClickHandler}
                            outline
                            className="reactive-btn green outline shadow"
                            style={{fontSize:"15px",fontWeight:"bolder" , color:"white"}}
                        />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home;