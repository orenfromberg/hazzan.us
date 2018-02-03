import React, { Component } from 'react';
import { Phrase } from './Components';
import './App.css';
import audio from './01SofPasuk-MasterPhrase.ogg';

const phrase = 'מֵרְכָ֥א טִפְחָ֖א מֵרְכָ֥א סוֹף־פָּסוּֽק׃';

const App = (props) => {
  return (
    <div>
      <h1>Sof Pasuk/Siluk</h1>
      <Phrase audio={audio} phrase={phrase} hidden={true} />
    </div>
  );
}

// const parsePhrase = (phrase) => {
//   let words = phrase.split(/\s+/);
//   // https://unicodelookup.com/#hebrew/1
//   // merkha = 5a5
//   // tipeha = 596
//   // meteg = 5bd
//   // sof pasuk = 5c3
//   let marks = /[\u{5a5}|\u{596}|\u{5bd}|\u{5c3}]/u;
//   return words.map((word, index) => 
//     (<span>
//       <span className="word">
//       {
//         word.split('').map((letter) => {
//           let type = marks.test(letter) ? 'mark' : 'letter';
//           return <span className={type}>{letter}</span>;
//         })
//       }
//       </span>
//       <span>{index === words.length - 1 ? '' : ' '}</span>
//     </span>)
//   )
// }

// class App extends Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       isPlaying: false,
//     };

//     this.toggleAudio = this.toggleAudio.bind(this);
//     this.onAudioEnded = this.onAudioEnded.bind(this);
//   }

//   toggleAudio() {
//     if (this.state.isPlaying === false) {
//         this.setState({
//         isPlaying: true,
//       });
//       this.audio.play();
//     } else {
//       this.setState({
//         isPlaying: false,
//       });
//       this.audio.load();
//     }
//   }

//   onAudioEnded() {
//     this.setState({
//       isPlaying: false,
//     })
//   }

//   render() {
//     return (
//       <div>
//         <h1>Sof Pasuk/Siluk</h1>
//         <div className="text" onClick={this.toggleAudio}>
//         {
//           parsePhrase(phrase)
//         }
//         </div>
//         <audio 
//           onEnded={this.onAudioEnded}
//           src={audio} 
//           ref={(input) => this.audio = input }
//           controls 
//           />
//       </div>
//     );
//   }
// }

export default App;
