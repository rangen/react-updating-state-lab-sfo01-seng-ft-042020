import React, { Component } from 'react'

export default class YouTubeDebugger extends Component {
    constructor() {
        super();
        this.state = {
            errors: [],
            user: null,
            settings: {
              bitrate: 8,
              video: {
                resolution: '1080p'
              }
            }
          }
    }

    setBitrate = () => {
        this.setState(prev => {
            prev.settings.bitrate = 12;
            return prev;    
        })
    }

    setResolution = () => {
        this.setState(prev => {
            prev.settings.video.resolution = '720p'
            return prev
        })
    }

    render() {
        return (
            <div>
                <button onClick={this.setBitrate} className='bitrate'>Bitrate: {this.state.settings.bitrate}</button>
                <button onClick={this.setResolution} className='resolution'>Resolution: {this.state.settings.video.resolution}</button>
            </div>
        )
    }
}