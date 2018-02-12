import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setPlayingAudio } from '../../Actions';
import uuidv4 from 'uuid/v4';
import './style.css';

const parsePhrase = (phrase) => {
  let words = phrase.split(/\s+/);
  // https://unicodelookup.com/#hebrew/1
//   const merkha = '\u{5a5}';
//   const tipeha = '\u{596}';
//   const meteg = '\u{5bd}';
//   const sofPasuk = '\u{5c3}';
// const munah = '\u{5a3}'
// const etnahta = '\u{591}'
// const mahapakh = '\u{5a4}'
// const pashta = '\u{599}'
// const zaqefQatan = '\u{594}'
  let marks = /[\u{5a5}|\u{596}|\u{5bd}|\u{5c3}|\u{5a3}|\u{591}|\u{5a4}|\u{599}|\u{594}]/u;
  return words.map((word, index) =>
    (<span key={word + '_' + index}>
      <span className="word">
      {
        word.split('').map((letter, j) => {
          let type = marks.test(letter) ? 'mark' : 'letter';
          return <span key={j} className={type}>{letter}</span>;
        })
      }
      </span>
      <span>{index === words.length - 1 ? '' : ' '}</span>
    </span>)
  )
}

class Phrase extends Component {
  constructor(props) {
    super(props);

    this.audioId = uuidv4();
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.currentPlayingAudio === this.audioId) {
      if(nextProps.currentPlayingAudio !== this.audioId) {
        this.audio.load();
      }
    }
  }

  render() {
    return (
      <div>
        <div className={`text ${this.props.hidden?'hidden':''}`}
            onClick={
              (() => {
                this.audio.paused ? this.audio.play() : this.audio.pause();
                this.props.setPlayingAudio(this.audioId)
              })
              }>
        {
          parsePhrase(this.props.phrase)
        }
        </div>
        <audio
          id={this.audioId}
          onEnded={this.onAudioEnded}
          src={this.props.audio}
          ref={(input) => this.audio = input }
          controls
          />
      </div>
    );
  }
}

export default connect(
  (state) => ({
    currentPlayingAudio: state.currentPlayingAudio
  }),
  (dispatch) => ({
    setPlayingAudio: (id) => dispatch(setPlayingAudio(id))
  })
)(Phrase);
