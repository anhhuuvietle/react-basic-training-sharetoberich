import React, { Component } from 'react';
import './Action.css';

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
                    { this.props.img? <img src={this.props.img} alt="dice"/> : null }
                </div>
                <div className="btn action__roll-dice" onClick={this.props.roll}>
                    <i className="ion-ios-loop"></i>
                    ROLL DICE
                </div>
                <div className="btn action__hold" onClick={this.props.hold}>
                    <i className="ion-ios-download-outline"></i>
                    HOLD
                </div>
            </div>
        );
    }
}

export default Action;