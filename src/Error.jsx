import React from "react";
import {Helmet} from "react-helmet";
import Loader from "react-js-loader";

const Error=()=>{
    return(
        <>
                    <div className="visme_d" data-title="Custom Form" data-url="76n3jojn-custom-form?fullPage=true" data-domain="forms" data-full-page="true" data-min-height="100vh" data-form-id="20594"></div>
            <Helmet><script src="https://static-bundles.visme.co/forms/vismeforms-embed.js"></script></Helmet>
        
        <div style={{display:"flex",height:"100vh", justifyContent:"center", fontSize:"90px"}}>
            <Loader type="heart" bgColor="RED" color="white" size={300} />
</div>

        </>
    )
}

export default Error;