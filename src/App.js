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
import audio14 from './Audio/14 Tvir.mp3';
import audio15 from './Audio/15 Tvir.mp3';
import audio16 from './Audio/16 Tvir.mp3';
import audio17 from './Audio/17 Rvii.mp3';
import audio18 from './Audio/18 Rvii.mp3';
import audio19 from './Audio/19 Final Phrase.mp3';

// from http://opensiddur.org/wp-content/uploads/fonts/display-font-charmap.php?fnt=Shlomo
// קַדְמָ֨א מֻנַּ֣ח זַרְקָא֮ מֻנַּ֣ח סֶגּוֹל֒ מֻנַּ֣ח ׀ מֻנַּ֣ח רְבִ֗יע מַהְפַּ֤ך פַּשְׁטָא֙ זָקֵף־קָטָ֔ן זָקֵף־גָּד֕וֹל מֵרְכָ֥א טִפְּחָ֖א מֻנַּ֣ח אֶתְנַחְתָּ֑א פָּזֵ֡ר תְּלִישָא־קְטַנָּה֩ תְּ֠לִישָא גְדוֹלָה קַדְמָ֨א וְאַזְלָ֜א אַזְלָא־גֵּ֜רֵשׁ גֵּרְשַׁ֞יִם דַּרְגָּ֧א תְּבִ֛יר יְ֚תִיב פְּסִיק׀ מֵרְכָ֥א טִפְּחָ֖א מֵרְכָ֥א סוֹף פָּסֽוּק׃ שַׁלְשֶׁ֓לֶת מֵרְכָא כְּפוּלָ֦ה יֵרֶח בֶּן יוֹמ֪וֹ קַרְנֵי פָרָ֟ה׃


const merkha = 'מֵרְכָ֥א';
const tipeha = 'טִפְּחָ֖א';
// const sofPasuk = 'סוֹף פָּסֽוּק׃';
const sofPasuk = 'סוֹף־פּ‬ָסֽוּק׃'
const munah = 'מוּנַ֣ח';
const etnahta = 'אֶתְנַחְתָּ֑א';
const mahapakh = 'מַהְפַּ֤ךְ';
const pashta = 'פַּשְׁטָא֙';
const qaton = 'קָטוֹ֔ן';
const darga = 'דַּרְגָּ֧א';
const tvir = 'תְּבִ֛יר';
const rvii = 'רְבִ֗יע';
const gershayim = 'גֵּרְשַׁ֞יִם';

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
const phrase14 = `${darga} ${tvir}`;
const phrase15 = `${tvir}`;
const phrase16 = `${merkha} ${tvir}`;
const phrase17 = `${munah} ${rvii}`;
const phrase18 = `${rvii}`;
const phrase19 = phrase1;
// const phrase20 = `${}`

const App = (props) => {
  return (
    <div className="container">
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
      <hr />
      <h2>Master Phrases</h2>
      <h3>Sof Pasuk/Siluk</h3>
      <ol className="tropes">
        <li>
          <em>Merkha tipḥa merkha sof pasuk</em>
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
      <h3>Etnachta</h3>
      <ol className="tropes" start="5">
        <li>
          <em>Merkha tipḥa munaḥ etnaḥta</em>
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
      <h3>Zakef Katon</h3>
      <ol className="tropes" start="9">
        <li>
          <em>Mahapakh pashta munaḥ katon</em>
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
      <h3>T'vir</h3>
      <ol className="tropes" start="14">
        <li>
          <em>Darga tvir</em>
          <Phrase audio={audio14} phrase={phrase14} />
        </li>
        <li>
          <Phrase audio={audio15} phrase={phrase15} hidden={true}/>
        </li>
      </ol>
      <h3>T'vir</h3>
      <ol className="tropes" start="16">
        <li>
          <em>Merkha tvir</em>
          <Phrase audio={audio16} phrase={phrase16} />
        </li>
      </ol>
      <h3>R'vi-i</h3>
      <ol className="tropes" start="17">
        <li>
          <em>Munaḥ R'vi-i</em>
          <Phrase audio={audio17} phrase={phrase17} />
        </li>
        <li>
          <Phrase audio={audio18} phrase={phrase18} hidden={true}/>
        </li>
      </ol>
    </div>
  );
}

export default App;
