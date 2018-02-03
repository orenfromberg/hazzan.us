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

export default App;
