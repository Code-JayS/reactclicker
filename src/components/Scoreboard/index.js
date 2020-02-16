import React from "react";
import "./style.css";

function Scoreboard(props) {
  return (
    <div className="col-sm-3 mt-5 ml-5 scoreboard">
      <h2 className="mt-5 text-center">Memory Game</h2>
      <p className="mt-5">
        Click on a Movie Poster. Try to remember each one you've picked. You lose the
        round when you pick the same Movie twice. You get a point for each time
        you click a unique card. Good luck!
      </p>
      <h4 className="mt-5 text-center">{props.direction}</h4>
      <h4 className="mt-5 text-center">High Score: {props.highScore}</h4>
      <h4 className="mt-5 mb-5 text-center">
        Current Score: {props.currentScore}
      </h4>
    </div>
  );
}

export default Scoreboard;
