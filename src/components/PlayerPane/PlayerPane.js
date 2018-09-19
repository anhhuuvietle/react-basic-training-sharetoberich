import React, { Component } from 'react';
import './PlayerPane.css';

class PlayerPane extends Component {
    render() {
        // if - else 
        return (
            <div className={this.props.playing? "player-pane active" : "player-pane"}>
                <div className="player-name"> {this.props.playerScore > 20 ? `WINNER` : `PLAYER ${this.props.player}`} </div>
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