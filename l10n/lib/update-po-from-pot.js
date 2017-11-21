var po = require("node-po");
var debug = require("debug")("po-merge");
const fs = require("fs-extra");
// debug = console.log;

/**
 * Adds new strings to po file from pot file, removes deleted ones.
 * Preserves existing translations.
*/

module.exports = ({ poDir, potDir }) => toLang =>
  main({ toLang, poDir, potDir });

function main({ toLang, poDir, potDir }) {
  console.log(`Update PO Files ${toLang}`);
  const poFileDir = `${poDir}/${toLang}`;
  const potFiles = fs.readdirSync(potDir);
  if (!fs.existsSync(poFileDir)) {
    fs.mkdirpSync(poFileDir);
  }
  return Promise.all(
    potFiles.filter(file => file.indexOf('.pot') !== -1).map(potFileName => {
      return new Promise((resolve, reject) => {
        const potFile = `${potDir}/${potFileName}`;
        po.load(potFile, pot => {
          const poFile = `${poFileDir}/${potFileName.replace(".pot", ".po")}`;
          if (fs.existsSync(poFile)) {
            pot.headers.Language = toLang;
            return mergePOTWithPO(pot, poFile)
                .then(() => resolve());
          } else {
            fs
              .copy(potFile, poFile)
              .then(() => updateLanguageCode(poFile, toLang))
              .then(() => resolve());
          }
        });
      });
    })
  );
}

function updateLanguageCode(poFilePath, toLang) {
  return new Promise((resolve, reject) => {
    po.load(poFilePath, poFile => {
      poFile.headers.Language = `${toLang}`;
      poFile.save(poFilePath, result => resolve(result));
    });
  })
  .catch(err => console.log('updateLanguageCode', err));
}

function mergePOTWithPO(pot, poFilePath) {
  return new Promise((resolve, reject) => {
    const potItems = {};
    po.load(poFilePath, poFileObject => {
      const poItems = {};
      poFileObject.items.forEach(
        poItem => (poItems[poItem.msgid] = poItem.msgstr)
      );
      pot.items.forEach(item => {
        if (poItems[item.msgid]) {
          item.msgstr = poItems[item.msgid];
        }
      });
      pot.save(poFilePath, result => resolve(result));
    });
  })
  .catch(err => console.log('mergePOTWithPO', err));
}
