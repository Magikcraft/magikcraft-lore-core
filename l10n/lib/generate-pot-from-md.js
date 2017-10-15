const fs = require('fs-extra');
const gmd = require('./gettext-markdown');

module.exports = ({potDir, sourceDir, fromLang}) => () => {
    console.log('Generate POT from MD');
    return new Promise((resolve, reject) => {
        const sourceBaseDir = `${sourceDir}/${fromLang}`;
        const files = fs.readdirSync(sourceBaseDir).filter(file => file.indexOf('.md') !== -1);

        const potfiles = files.map(file => ({ filename: `${potDir}/${file.replace('.md', '.pot')}`, pot: gmd.md2pot(`${sourceBaseDir}/${file}`) }));
        if (!fs.existsSync(potDir)) {
            fs.mkdirSync(potDir)
        }
        Promise.all(potfiles.map(file => fs.writeFile(file.filename, file.pot))).then(resolve);
    });
}