import React from "react";

function Card(props) {
  return <div>
    <div className="box">
<div className="img">
    <img src={props.image} alt="" />
</div>
<div className="title">
    <h3>{props.category}</h3>
    <span className=""><i class='bx bx-heart'></i> {props.totalLike} </span>
</div>
<h2 className=""> {props.title}</h2>

    </div>
  </div>;
}

export default Card;
