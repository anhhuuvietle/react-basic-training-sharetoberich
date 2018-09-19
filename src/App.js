import React, { Component } from 'react';
import PlayerPane from './components/PlayerPane/PlayerPane';
import Action from './components/Action/Action';
import { imgs } from './constants/constants';
import './App.css';


class App extends Component {
  state = {
    playerScore: [0, 0],
    curScore: [0, 0],
    img: null,
    playing: false // false => 1 , true => 2
  }

  handleNewGame = () => {
    this.setState({
      playerScore: [0, 0],
      curScore: [0, 0],
      img: null,
      playing: false

    });
  }
  handleRollDice = () => {
    const { playerScore } = this.state;
    // Prevent user click when there is a person win
    if (playerScore[0] >= 20 || playerScore[1] >= 20) return;
    // Random point when roll dice
    const point = Math.floor(Math.random() * 6 + 1); // => (1, 7) => [1,6]
    if (point !== 1) {
      // who are playing?
      const { curScore, playing } = this.state;
      let { img } = this.state;
      // Update current point of person who are playing
      // const curScore = this.state.curScore;
      // const playing = this.state.playing;
      // destructuring
      curScore[+playing] += point;
      // const -> can not change value -> primitive type, number, string
      // const -> can not change ref, address , -> object, array

      // Update dice image
      img = imgs[point];

      // Update state 

      this.setState({
        curScore,
        img
      });
    }
    else {
      this.setState(prevState => {
        return {
          playing: !prevState.playing,
          curScore: [0, 0],
          img: null,
        }
      });
    }
  }
  handleHold = () => {
    const { curScore, playing } = this.state;

    const playerScore = { ...this.state.playerScore }; // Prevent mutate directly state


    // Prevent user click when there is a person win
    if (playerScore[0] >= 20 || playerScore[1] >= 20) return;

    // Update score
    //mutable
    playerScore[+playing] += curScore[+playing];

    // Update state
    this.setState(prevState => {
      return {
        playing: !prevState.playing,
        curScore: [0, 0],
        img: null,
        playerScore
      }
    });
  }
  render() {
    return (
      <div className="app">
        <PlayerPane
          playerScore={this.state.playerScore[0]}
          curScore={this.state.curScore[0]}
          player="1"
          playing={!this.state.playing}
        />

        <Action
          new={this.handleNewGame}
          roll={this.handleRollDice}
          hold={this.handleHold}
          img={this.state.img}
        />

        <PlayerPane
          playerScore={this.state.playerScore[1]}
          curScore={this.state.curScore[1]}
          player="2"
          playing={this.state.playing}
        />
      </div>
    );
  }
}

export default App;
