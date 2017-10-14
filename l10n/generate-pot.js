const fs = require('fs');
const gmd = require('./lib/gettext-markdown');

const dir = 'scrolls';
const outputDir = 'pot';
const files = fs.readdirSync(dir).filter(file => file.indexOf('.en.md') !== -1);
console.log(files);

const potfiles = files.map(file => ({ filename: `${outputDir}/${file.replace('.md', '.pot')}`, pot: gmd.md2pot(`${dir}/${file}`) }));

potfiles.forEach(file => fs.writeFileSync(file.filename, file.pot));
