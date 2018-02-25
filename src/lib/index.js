// https://unicodelookup.com/#hebrew/1
const markCodes = {
    merkha: '\u{5a5}',
    tipeha: '\u{596}',
    meteg: '\u{5bd}',
    sofPasuk: '\u{5c3}',
    munah: '\u{5a3}',
    etnahta: '\u{591}',
    mahapakh: '\u{5a4}',
    pashta: '\u{599}',
    zaqefQatan: '\u{594}',
    darga: '\u{5a7}',
    tvir: '\u{59b}',
    rvii: '\u{597}',
    // gershayim: '',
    // kadma: '',
    // azla: '',
    // tlishaGdola: '',
    // tlishaKtana: '',
    // pazeir: '',
    // zakefGadol: '',
    // ytiv: '',
    // zarka: '',
    // segol: ''
}

// var vals = Object.keys(countries).map(function(key) {
//     return countries[key];
// });

const marks = Object.keys(markCodes).map((key) => markCodes[key]);

// const marks = Object.values(markCodes);

const markRegexes = marks.map((code) => {
    return new RegExp(code, 'gu');
})

const parsePhrase = (phrase) => {
    // first put span tags around words
    let temp = phrase.replace(/(\S+)/g, '<span class="word">$&</span>');

    // for each mark, search and replace in string.
    markRegexes.forEach(re => {
        temp = temp.replace(re, '<span lang="he" dir="rtl" class="mark">$&</span>')
    });

    return temp;
}

export {
    parsePhrase
}
