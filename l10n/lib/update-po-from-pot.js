var po = require("node-po");
var debug = require("debug")("po-merge");
const fs = require('fs-extra');
// debug = console.log;

/**
 * Adds new strings to po file from pot file
 * Does not remove old ones at this stage.
 *
*/

function main({ toLang, poDir, potDir }) {
    const poFileDir = `${poDir}/${toLang}`;
    const potFiles = fs.readdirSync(potDir);
    return Promise.all(potFiles.map(potFileName => {
        const potFile = `${potDir}/${potFileName}`;
        po.load(potFile, pot => {
            const poFile = `${poFileDir}/${potFileName.replace('.pot','.po')}`;
            if (fs.existsSync(poFile)) {
                pot.headers.Language = toLang;
                return mergePOTWithPO(pot, poFile);
            } else {
                return fs.copy(potFile, poFile)
                    .then(() => updateLanguageCode(poFile, toLang));
            }
        });
    }));
}

function updateLanguageCode(poFilePath, toLang) {
    return new Promise((resolve, reject) => {
        po.load(poFilePath, poFile => {
            poFile.headers.Language = `${toLang}`;
            poFile.save(poFilePath, result => resolve(result));
        })
    });
}

function mergePOTWithPO(pot, poFilePath) {
    return new Promise((resolve, reject) => {
        const potItems = {};
        po.load(poFilePath, poFileObject => {
            const poItems = {};
            poFileObject.items.forEach(poItem => poItems[poItem.msgid] = poItem.msgstr);
            pot.items.forEach(item => {
                if (poItems[item.msgid]) {
                    item.msgstr = poItems[item.msgid];
                }
            });
            pot.save(poFilePath, result => resolve(result));
        });
    });
}

module.exports = ({poDir, potDir}) => toLang => main({toLang, poDir, potDir});
