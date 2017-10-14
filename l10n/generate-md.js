const gmd = require('gettext-markdown');
const fs = require('fs');

module.exports = lang => {
    const files = fs.readdirSync(`./po/${lang}/`);
    files.forEach(file => {
        let po = fs.readFileSync(`./po/${lang}/${file}`, 'utf-8');
        gmd.po2md(`./po/${lang}/${file}`, po, {lang})
        .then(r => {
            for (let i in r) {
                let filename = r[i].fn;
                let pofilename = r[i].po;
                let lang = r[i].lang;
                let data = r[i].data;
                // fn contains the original markdown file name
                // po contains the PO file name
                // lang contains the language name for this PO
                // data contains the localized markdown contents
                fs.writeFileSync(`./scrolls/${file.replace('.po', '.md')}`, data);
            }
        })
        .catch(e => console.error(e));
    });
}