import React from "react";
import "./style.css";

function Card(props) {
  let imgClasses;
  if (props.outcome === 0) {
    imgClasses = "character-image img-fluid animated bounce";
  } else {
    imgClasses = "character-image img-fluid animated pulse";
  }
  return (
    <div className="col-lg-3 img-holder mb-3">
      <img
        className={imgClasses}
        src={props.img}
        alt={props.name}
        key={props.id}
        onClick={() => props.handleClick(props.id, props.name)}
      />
    </div>
  );
}
export default Card;
