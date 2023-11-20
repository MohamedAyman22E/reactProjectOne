import React from "react";
import "./Features.css";
import Card from "./Card";
import data from "./FeaturesApi";

function Features() {
  return <>
  <div className="features container">
    <div className="">
        <div className="heading">
            <span>Features</span>
            <h2>what i do</h2>
        </div>
    </div>
    <div className="allBoxFeatures">
        {data.map((val,index)=>{
        return <Card key={index} image={val.image} title={val.title} desc={val.desc} />
        })}
       
     
    </div>
  </div>
  
  </>;
}

export default Features;
