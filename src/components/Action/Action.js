import React, { Component } from 'react';
import './Action.css';
import Image from '../../assets/img/dice-6.png';

class Action extends Component {
    render() {
        return (
            <div className="action">
                {/* NGUYÊN TẮC BEM - BLOCK ELEMENT MODIFIER */}
                <div className="btn action__new-game" onClick={this.props.new}>
                    <i className="ion-ios-plus-outline"></i>
                        NEW GAME
                </div>
                <div className="img-dice">
                    <img src={Image} alt="dice"/>
                </div>
                <div className="btn action__roll-dice">
                    <i className="ion-ios-loop"></i>
                    ROLL DICE
                </div>
                <div className="btn action__hold">
                    <i className="ion-ios-download-outline"></i>
                    HOLD
                </div>
            </div>
        );
    }
}

export default Action;