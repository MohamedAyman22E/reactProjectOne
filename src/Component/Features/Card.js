import React from "react";

function Card(props) {
  return (
    <>
      <div className="box">
        <img src={props.image} alt="" />
        <h2>{props.title}</h2>
        <p>
         {props.desc}
        </p>
        <div className="icon_right">
          <i class="bx bx-right-arrow-alt"></i>
        </div>
      </div>
    </>
  );
}

export default Card;
