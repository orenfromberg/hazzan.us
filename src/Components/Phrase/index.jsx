import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setPlayingAudio } from '../../Actions';
import uuidv4 from 'uuid/v4';
import './style.css';
import { parsePhrase } from '../../lib/index';

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
        <button className={`text ${this.props.hidden?'hidden':''}`}
            onClick={
              (() => {
                this.audio.paused ? this.audio.play() : this.audio.pause();
                this.props.setPlayingAudio(this.audioId)
              })
              }>
        {
          <span dir="rtl" className="text" lang="he" dangerouslySetInnerHTML={{
            __html: parsePhrase(this.props.phrase)
          }} />
        }
        </button>
        <audio
          id={this.audioId}
          onEnded={() => this.audio.load() }
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
