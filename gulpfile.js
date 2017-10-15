const gulp = require("gulp");
const rename = require("gulp-rename");
const apikey = require("./APIKEY.json").apikey;
const scrollsl10n = require('./l10n')({
    poDir: 'scrolls/po',
    sourceDir: 'scrolls',
    fromLang: 'en',
    potDir: 'scrolls/pot',
    apikey
});
const fs = require("fs");
const uncaught = require("uncaught");
uncaught.start();
uncaught.addListener(function (error) {
    console.log('Uncaught error or rejection: ', error);
});

const supportedLangs = ["ja", "nb", "da", "ru", "fr", "ko"];

const updatePOFiles = () => Promise.all(supportedLangs.map(lang => scrollsl10n.updatePO(lang)));

const googleTranslate = () => Promise.all(supportedLangs.map(lang => scrollsl10n.googleTranslatePO(lang)));

const buildScrolls = () => Promise.all(supportedLangs.map(lang => scrollsl10n.buildMDFromPO(lang)));

gulp.task("update-pot", done => scrollsl10n.generatePOTFromMD().then(() => done));

gulp.task("update-po-files", done => updatePOFiles().then(() => done));

gulp.task("google-translate-all", done => googleTranslate().then(() => done));

gulp.task("build-scrolls", done => buildScrolls().then(() => done));

gulp.task("update-translations", done => {
    scrollsl10n.generatePOTFromMD()
      .then(() => updatePOFiles())
      .then(() => googleTranslate())
      .then(() => buildScrolls())
      .then(() => done());
});


