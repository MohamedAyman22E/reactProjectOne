import React from "react";
import './Portfolio.css'
import Card from "./Card";
import Portfolio_data from "./Portfolio_data";

function Portfolio() {
  return <div>
    <section className="portfolio" id="portfolio">
        <div className="container">
        <div className="heading">
            <span className="uppercase ">visit my portfolio keep your feedback</span>
            <h2>my portfolio</h2>
        </div>
        <div className="allBoxPortfolio">
            {Portfolio_data.map((val,index)=>{
                return <Card key={index} image={val.image}  category={val.category}  totalLike={val.totalLike} title={val.title } />

            })}
            
        </div>

        </div>
    </section>

  </div>;
}

export default Portfolio;
