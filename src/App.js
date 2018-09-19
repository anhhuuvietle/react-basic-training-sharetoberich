import React, { Component } from 'react';
import PlayerPane from './components/PlayerPane/PlayerPane';
import Action from './components/Action/Action';
import './App.css';

class App extends Component {
  state = {
    playerScore: [1, 0],
    curScore: [0, 0],
    img: null,
    playing: true
  }

  handleNewGame = () => {
    this.setState({
      playerScore: [0, 0],
      curScore: [0, 0],
      img: null,
      playing: true
    });
  }

  render() {
    return (
      <div className="app">
        <PlayerPane
          playerScore={this.state.playerScore[0]}
          curScore={this.state.curScore[0]}
          player="1"
        />

        <Action new={this.handleNewGame} />

        <PlayerPane
          playerScore={this.state.playerScore[1]}
          curScore={this.state.curScore[1]}
          player="2"
        />
      </div>
    );
  }
}

export default App;
