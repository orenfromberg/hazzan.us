import React, { Component } from 'react';
import './App.css';
import audio from './01SofPasuk-MasterPhrase.ogg';

const play = '▶️';
const stop = '⏹️';

const merkha = () => (
  <span className="word">
    מֵרְכָ
    <span className="mark">&#1445;</span>
    א
  </span>
);

const tipeha = () => (
  <span className="word">
    טִפְחָ
    <span className="mark">&#1430;</span>
    א
  </span>  
);

const sofPasuk = () => (
  <span className="word">
    סוֹף&#1470;פָּסוּ<span className="mark">&#1469;</span>ק
    <span className="mark">&#1475;</span>
  </span>
);

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      buttonText: play
    };

    this.toggleAudio = this.toggleAudio.bind(this);
    this.onAudioEnded = this.onAudioEnded.bind(this);
  }

  toggleAudio() {
    if (this.state.buttonText === play) {
      this.setState({
        buttonText: stop
      });
      this.audio.play();
    } else {
      this.setState({
        buttonText: play
      });
      this.audio.load();
    }
  }

  onAudioEnded() {
    this.setState({
      buttonText: play
    })
  }

  render() {
    return (
      <div>
        <h1>Sof Pasuk/Siluk</h1>
        <div className="text">
          {merkha()} {tipeha()} {merkha()} {sofPasuk()}
        </div>
        <audio 
          onEnded={this.onAudioEnded}
          src={audio} 
          ref={(input) => this.audio = input }
          // controls 
          />
        <button type="button" onClick={this.toggleAudio}>{this.state.buttonText}</button>
      </div>
    );
  }
}

export default App;
