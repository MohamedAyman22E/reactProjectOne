import React from "react";
import "./Resume.css";
import Card from "./Card";
import ResumeApi from "./ResumeApi";

function Resume() {
  return (
    <div>
      <section className="resume">
        <div className="container">
          <div className="heading">
            <span className="uppercase ">7+ years of experience</span>
            <h2>my Resume</h2>
          </div>
          <div className="allBoxResume">
            <div className="left">
              <div className="heading_left">
                <span>2007-2008</span>
                <h2>education quality</h2>
              </div>
              <div className="content">
                {ResumeApi.map((val, id) => {
                  if (val.category === "education") {
                    return (
                      <Card
                        key={id}
                        year={val.year}
                        title={val.title}
                        desc={val.desc}
                        rate={val.rate}
                      />
                    );
                  }
                })}
              </div>
            </div>
            <div className="right">
              <div className="heading_left">
                <span>2007-2008</span>
                <h2>job experience</h2>
              </div>
              <div className="content">
                {ResumeApi.map((val, id) => {
                  if (val.category === "experience") {
                    return (
                      <Card
                        key={id}
                        year={val.year}
                        title={val.title}
                        desc={val.desc}
                        rate={val.rate}
                      />
                    );
                  }
                })}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Resume;
