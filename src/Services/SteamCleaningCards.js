import React, { Component } from 'react';

class SteamCleaningCards extends Component {
    constructor(props) {
        super(props);
      }
    render() {
        return (
            <div className="steamcleaning-cards">
                <img className="steam-icons" src={this.props.steamimg}></img>
                <h5>{this.props.steamhead}</h5>
            </div>
        );
    }
}

export default SteamCleaningCards;