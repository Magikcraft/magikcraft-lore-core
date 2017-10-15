const buildMDFromPO = require('./lib/build-localised-md');
const googleTranslatePO = require('./lib/google-translate-po');
const generatePOTFromMD = require('./lib/generate-pot-from-md');
const updatePO = require('./lib/update-po-from-pot');

module.exports = ({poDir = 'scrolls/po', sourceDir = 'scrolls', potDir = 'scrolls/pot', fromLang = 'en'}) => ({
    generatePOTFromMD: generatePOTFromMD({potDir, sourceDir, fromLang}),
    googleTranslatePO: googleTranslatePO({poDir}),
    buildMDFromPO: buildMDFromPO({sourceDir, poDir}),
    updatePO: updatePO({poDir, potDir})
})