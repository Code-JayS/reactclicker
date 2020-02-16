import React, { Component } from "react";
import Gameboard from "../Gameboard/index";
import Scoreboard from "../Scoreboard";
import characters from "../characterList.json";
import "./style.css";

const display = [
  "Click on a Movie Poster to begin the game",
  "Keep clicking!",
  "Start over!",
  "You Won"
];

class Container extends Component {
  state = {
    direction: display[0],
    charactersArray: characters,
    justClicked: "",
    clicked: [],
    currentScore: 0,
    highScore: 0,
    winScore: 3,
    outcome: 1
  };

  handleClick = (id, name) => {
    const clickedArray = [...this.state.clicked];
    let score = this.state.currentScore;
    let currentHighScore = this.state.highScore;
    if (currentHighScore <= score) {
      currentHighScore = score;
    } 
    if (clickedArray.includes(id)) {
      this.setState({
        direction: display[2],
        highScore: currentHighScore,
        currentScore: 0,
        clicked: [],
        justClicked: name,
        charactersArray: this.arrayShuffle(),
        outcome: 0
      });
    }
    else if (score === 16) {
      this.setState({
        direction: display[3],
        currentScore: 0,
        clicked: [],
        justClicked: name,
        charactersArray: this.arrayShuffle(),
        outcome: 0
      });
    } else {
      score++;
      clickedArray.push(id);

      this.setState({
        direction: display[1],
        currentScore: score,
        clicked: clickedArray,
        justClicked: name,
        charactersArray: this.arrayShuffle(),
        outcome: 1
      });
    }
  };

  arrayShuffle() {
    let tempArray = [...characters];
    for (let i = tempArray.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      let temp = tempArray[i];
      tempArray[i] = tempArray[j];
      tempArray[j] = temp;
    }
    return tempArray;
  }

  render() {
    console.log(this.state.currentScore);
    return (
      <div className="container">
        <div className="row">
          <Gameboard
            justClicked={this.state.justClicked}
            charactersArray={this.state.charactersArray}
            handleClick={this.handleClick}
            outcome={this.state.outcome}
          />
          <Scoreboard
            direction={this.state.direction}
            highScore={this.state.highScore}
            currentScore={this.state.currentScore}
          />
        </div>
      </div>
    );
  }
}

export default Container;
