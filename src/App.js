import React from 'react';
import { Phrase } from './Components';
import './App.css';

// import audio1 from './01SofPasuk-MasterPhrase.ogg';
// import audio2 from './02sofpasuk.ogg';
// import audio3 from './03sofpasuk.ogg';
// import audio4 from './04sofpasuk.ogg';

import audio01 from './Audio/01 Sof Pasuk - Master Phrase.mp3';
import audio02 from './Audio/02 Sof Pasuk.mp3';
import audio03 from './Audio/03 Sof Pasuk.mp3';
import audio04 from './Audio/04 Sof Pasuk.mp3';
import audio05 from './Audio/05 Etnachta - Master Phrase.mp3';
import audio06 from './Audio/06 Etnachta.mp3';
import audio07 from './Audio/07 Etnachta.mp3';
import audio08 from './Audio/08 Etnachta.mp3';
import audio09 from './Audio/09 Katon - Master Phrase.mp3';
import audio10 from './Audio/10 Katon.mp3';
import audio11 from './Audio/11 Katon.mp3';
import audio12 from './Audio/12 Katon.mp3';
import audio13 from './Audio/13 Katon.mp3';
// import audio14 from './Audio/14 Tvir.mp3';


const merkha = 'מֵרְכָ֥א';
const tipeha = 'טִפּ‬ְחָ֖א';
const sofPasuk = 'סוֹף־פּ‬ָסוּֽק׃';
const munah = 'מוּנַ֣ח';
const etnahta = 'אֶתְנַחְתָּ֑א';
const mahapakh = 'מַהְפַּ֤ךְ';
const pashta = 'פּ‬ַשׁטָא֙';
const qaton = 'קָטוֹ֔ן';

const phrase1 = `${merkha} ${tipeha} ${merkha} ${sofPasuk}`;
const phrase2 = `${merkha} ${tipeha} ${sofPasuk}`;
const phrase3 = `${tipeha} ${merkha} ${sofPasuk}`;
const phrase4 = `${tipeha} ${sofPasuk}`;
const phrase5 = `${merkha} ${tipeha} ${munah} ${etnahta}`;
const phrase6 = `${merkha} ${tipeha} ${etnahta}`;
const phrase7 = `${tipeha} ${munah} ${etnahta}`;
const phrase8 = `${tipeha} ${etnahta}`;
const phrase9 = `${mahapakh} ${pashta} ${munah} ${qaton}`;
const phrase10 = `${mahapakh} ${pashta} ${qaton}`;
const phrase11 = `${pashta} ${qaton}`;
const phrase12 = `${pashta} ${munah} ${qaton}`;
const phrase13 = `${munah} ${qaton}`;

const App = (props) => {
  return (
    <div>
      <h1>Basic Torah Trope Groups</h1>
      <p>
        Tropes (or Te'amim, meaning "flavor" or "taste") tell us many things about the groupings such as:
      </p>
      <ol>
        <li>Music</li>
        <li>Accents</li>
        <li>Punctuation and Phrasing</li>
      </ol>
      <p>
        In the examples below, the box indicates the hebrew word. Notice that some tropes appear under a word, and some appear on top.
      </p>
      <p>
        The group takes its name from the last trope in the group.
      </p>
      <h2>Master Phrases</h2>
      <ol>Sof Pasuk/Siluk
        <li>
          <Phrase audio={audio01} phrase={phrase1} />
        </li>
        <li>
          <Phrase audio={audio02} phrase={phrase2} hidden={true} />
        </li>
        <li>
          <Phrase audio={audio03} phrase={phrase3} hidden={true} />
        </li>
        <li>
          <Phrase audio={audio04} phrase={phrase4} hidden={true}/>
        </li>
      </ol>
      <ol start="5">Etnachta
        <li>
          <Phrase audio={audio05} phrase={phrase5} />
        </li>
        <li>
          <Phrase audio={audio06} phrase={phrase6} hidden={true} />
        </li>
        <li>
          <Phrase audio={audio07} phrase={phrase7} hidden={true} />
        </li>
        <li>
          <Phrase audio={audio08} phrase={phrase8} hidden={true}/>
        </li>
      </ol>
      <ol start="9">Zakef Katon
        <li>
          <Phrase audio={audio09} phrase={phrase9} />
        </li>
        <li>
          <Phrase audio={audio10} phrase={phrase10} hidden={true} />
        </li>
        <li>
          <Phrase audio={audio11} phrase={phrase11} hidden={true} />
        </li>
        <li>
          <Phrase audio={audio12} phrase={phrase12} hidden={true}/>
        </li>
        <li>
          <Phrase audio={audio13} phrase={phrase13} hidden={true}/>
        </li>
      </ol>
    </div>
  );
}

export default App;
