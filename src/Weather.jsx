import React, { useEffect, useState } from "react";
import NavB from "./NavB";
import ParticlesBg from 'particles-bg';
import ReactiveButton from 'reactive-button';
import axios from 'axios';
import { useNavigate } from "react-router-dom";

const Weather=()=>{

    
    const [search,setSearch]= useState("");
    const [city,setCity]= useState("")
    const [post2,setPost2]=useState(null);
    const [post,setPost]=useState(null);
    // useEffect(()=>{
        // const featchdata=async()=>{
                // const api=`https://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=e866fd44bcf3f84b2dc4f86c22388bbe`;
                // const data=await fetch(api);
                // const actualdata=await data.json()
                // setPost(actualdata.main);
                // setPost2(actualdata.weather[0])
                // console.log(post.temp);
        // }
        // featchdata();
    // },[search])

    const [state, setState] = useState('idle');
    const navigate=useNavigate()
    const onClickHandler = () => {
        if(search == ""){
            alert("Please Enter City Name");
        }
        else{

        
      setState('loading');
      // send an HTTP request
      setTimeout(async() => {
        // setState('xyz');
        setState('success');
        setCity(search);
        const api=`https://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=e866fd44bcf3f84b2dc4f86c22388bbe`;
        const data=await fetch(api);
        const actualdata=await data.json()
        setPost(actualdata.main);
        setPost2(actualdata.weather[0])
        // console.log(post.temp);
      }, 500);
    }
    };

    return(

        <>
            <ParticlesBg color="#FF4433" num={200} type="cobweb" bg={true}/>
            <NavB/>
            <header className="maincon">
                <div className="inputbox">
                    <input type="text" placeholder="Enter City Name"
                        onChange={(event)=>{
                            setSearch(event.target.value);
                        }}
                        value={search}
                    />
                    <ReactiveButton
                        buttonState={state}
                        idleText="Search"
                        loadingText="Loading"
                        successText="Done"
                        onClick={onClickHandler}
                        outline
                        className="reactive-btn green outline shadow"
                        style={{fontSize:"15px",fontWeight:"bolder" , color:"white"}}
                    />
                </div>
                <div className="resultBox">
                {
                    !post2 ? (
                        <h1 className="weatherLogo" style={{color:"black"}}>Status</h1>
                        
                    ):(
                        <>
                        <h1 className="weatherLogo" style={{color:"black"}}>{post2.main} {(post2.main)== "Clouds" ? (<i className="fa-solid fa-cloud effect" style={{color: "black"}} id="csize"></i>) : (post2.main)=="Sunny" ? (<i className="fa-solid fa-sun fa-beat-fade effect" id="csize" style={{color:  "black"}}></i>): (post2.main)=="Rain" ? (<i className="fa-solid fa-cloud-bolt effect" id="csize"></i>):(<i className="fa-solid fa-cloud effect" style={{color: "black"}} id="csize"></i>)}</h1>
                        {/* {post2.main} */}
                        </>
                    )
                }{
                    !post ? (
                        <>
                        <div className="innerInfo">
                                 <div className="xyz" ><h1 className="temp">℃</h1><p className="city"> {city}</p></div>
                                 <div className="time"><p>Pressure</p><h1></h1></div>
                            </div>
                            <div className="extrainfo">
                                <div style={{color:"green"}}>
                                    <p>Temp_min</p><p>℃</p>
                                </div>
                                <div style={{color:"black"}}>
                                    <p>Feel_Like</p><p>℃</p>
                                </div>
                                 <div style={{color:"red"}}>
                                     <p>Humidity</p><p>℃</p>
                                 </div>
                            </div>
                        </>
                    ):(
                        <>
                            <div className="innerInfo">
                                 <div className="xyz" ><h1 className="temp">{post.temp}℃</h1><p className="city"> {search}</p></div>
                                 <div className="time"><p>Pressure</p><h1>{post.pressure}</h1></div>
                            </div>
                            <div className="extrainfo">
                                <div style={{color:"green"}}>
                                    <p>Temp_min</p><p>{post.temp_min}</p>
                                </div>
                                <div style={{color:"black"}}>
                                    <p>Feel_Like</p><p>{post.feels_like}</p>
                                </div>
                                 <div style={{color:"red"}}>
                                     <p>Humidity</p><p>{post.humidity}</p>
                                 </div>
                            </div>
                        </>
                    )
                }
                </div>
            </header>
        </>
    )
}

export default Weather;