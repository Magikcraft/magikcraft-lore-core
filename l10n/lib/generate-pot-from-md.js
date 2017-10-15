const fs = require('fs');
const gmd = require('./gettext-markdown');

module.exports = ({potDir, sourceDir, fromLang}) => () => {
    const sourceBaseDir = `${sourceDir}/${fromLang}`;
    const files = fs.readdirSync(sourceBaseDir).filter(file => file.indexOf('.md') !== -1);

    const potfiles = files.map(file => ({ filename: `${potDir}/${file.replace('.md', '.pot')}`, pot: gmd.md2pot(`${sourceBaseDir}/${file}`) }));
    if (!fs.existsSync(potDir)) {
        fs.mkdirSync(potDir)
    }
    potfiles.forEach(file => fs.writeFileSync(file.filename, file.pot));
}