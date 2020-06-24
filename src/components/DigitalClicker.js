import React, { Component } from 'react'

export default class DigitalClicker extends Component {
    constructor() {
        super();
        this.state = {
                    timesClicked: 0
        }
    }

    incClicker = () => {
        this.setState(prev => {return {timesClicked: prev.timesClicked + 1}});
    }

    render() {
        return (
            <button onClick={this.incClicker}>{this.state.timesClicked}</button>
        )
    }
}