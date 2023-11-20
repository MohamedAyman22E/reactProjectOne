import React from "react";

function Card(props) {
  return (
    <div>
      <div className="box  btn_shadow">
        <div className="title_content">
          <div className="title">
            <h2>{props.title}</h2>
            <span>{props.year}</span>
          </div>
          <a href="#" className="btn btn_shadow">
            {props.rate}
          </a>
        </div>
        <hr />

        <p>{props.desc}</p>
      </div>
    </div>
  );
}

export default Card;
