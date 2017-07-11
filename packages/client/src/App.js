import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
var websocket = require('websocket-stream')
var getUserMedia = require('get-user-media-promise');
    var MicrophoneStream = require('microphone-stream');


class App extends Component {
  constructor () {
    super()
    this._startListening = this._startListening.bind(this)
    this.state = {
      socketInitialized: false
    }
   this.ws = websocket('ws://localhost:8080')

    this.ws.on('data', (handShakeResponse) => {
      console.log('connected')
      this.setState({socketInitialized: true})
    })
  }
  _startListening () {
    getUserMedia({ video: false, audio: true })
    .then((stream) => {
      this.micStream = new MicrophoneStream(stream);
      this.micStream.pipe(this.ws)
    })
  }
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        {this.state.socketInitialized &&
           <button onClick={this._startListening}>
            Start Listening
          </button>
        }
      </div>
    );
  }
}

export default App;
