const gmd = require('./gettext-markdown');
const fs = require('fs');

module.exports = ({sourceDir, poDir}) => lang => {
    const inputDir = `${poDir}/${lang}/`;
    const outputDir = `${sourceDir}/${lang}`;
    if (!fs.existsSync(outputDir)) {
        fs.mkdirSync(outputDir);
    }
    const files = fs.readdirSync(inputDir);
    files.forEach(file => {
        const inputFileName = `${inputDir}/${file}`;
        const outputFileName = `${outputDir}/${file.replace('.po', '.md')}`;
        let poFile = fs.readFileSync(inputFileName, 'utf-8');
        gmd.po2md(inputFileName, poFile, {lang})
        .then(r => {
            for (let i in r) {
                // let filename = r[i].fn;
                // let pofilename = r[i].po;
                // let lang = r[i].lang;
                let markdown = r[i].data;
                // fn contains the original markdown file name
                // po contains the PO file name
                // lang contains the language name for this PO
                // data contains the localized markdown contents
                fs.writeFileSync(outputFileName, markdown);
            }
        })
        .catch(e => console.error(e));
    });
}