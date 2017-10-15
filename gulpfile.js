const gulp = require("gulp");
const rename = require("gulp-rename");
const scrollsl10n = require('./l10n')({
    poDir: 'scrolls/po',
    sourceDir: 'scrolls',
    fromLang: 'en',
    potDir: 'scrolls/pot',
});
const fs = require("fs");

const supportedLangs = ["ja", "nb", "da", "ru", "fr"];

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


