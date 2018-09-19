import React, { Component } from 'react';
import './PlayerPane.css';

class PlayerPane extends Component {
    render() {
        return (
            <div className="player-pane">
                <div className="player-name"> PLAYER {this.props.player} </div>
                <div className="player-score">{this.props.playerScore}</div>
                <div className="current-score">
                    <p>Current</p>
                    <div>{this.props.curScore}</div>
                </div>
            </div>
        );
    }
}

export default PlayerPane;