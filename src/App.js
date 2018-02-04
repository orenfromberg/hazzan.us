import React from 'react';
import { Phrase } from './Components';
import './App.css';

import audio from './01SofPasuk-MasterPhrase.ogg';
import audio2 from './02sofpasuk.ogg';
import audio3 from './03sofpasuk.ogg';
import audio4 from './04sofpasuk.ogg';

const phrase = 'מֵרְכָ֥א טִפְחָ֖א מֵרְכָ֥א סוֹף־פָּסוּֽק׃';
const phrase2 = 'מֵרְכָ֥א טִפְחָ֖א סוֹף־פָּסוּֽק׃';
const phrase3 = 'טִפְחָ֖א מֵרְכָ֥א סוֹף־פָּסוּֽק׃';
const phrase4 = 'טִפְחָ֖א סוֹף־פָּסוּֽק׃';

const App = (props) => {
  return (
    <div>
      <h1>Sof Pasuk/Siluk</h1>
      <Phrase audio={audio} phrase={phrase} />
      <Phrase audio={audio2} phrase={phrase2} hidden={true} />
      <Phrase audio={audio3} phrase={phrase3} hidden={true} />
      <Phrase audio={audio4} phrase={phrase4} hidden={true} />
    </div>
  );
}

export default App;
