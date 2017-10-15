const gulp = require("gulp");
const fs = require("fs");
var pipeline = require('promise-sequence/lib/pipeline');

const TranslationTasks = require('gettext-js/lib/build/tasks').default;
const sourceJs = 'dst/lore/*.js';
const localeMainFile = 'lore-locale/lore.pot';
const sourceLocale = 'lore-locale/*.po';
const destLocale = 'dst/locale';
const gettextJsTasks = new TranslationTasks(gulp, sourceJs, localeMainFile, sourceLocale, destLocale);

gettextJsTasks.load();

// gulp gtx:locale-update

const apikey = require("./APIKEY.json").apikey;
const scrollsl10n = require('./l10n')({
    poDir: 'scrolls/po',
    sourceDir: 'scrolls',
    fromLang: 'en',
    potDir: 'scrolls/pot',
    apikey
});

const lorel10n = require('./l10n')({
    poDir: 'lore-locale',
    potDir: 'lore-locale',
    fromLang: 'en',
    sourceDir: 'dst',
    apikey
});

process
.on('unhandledRejection', (reason, p) => {
  console.error(reason, 'Unhandled Rejection at Promise', p);
  console.error(p);
})
.on('uncaughtException', err => {
  console.error(err, 'Uncaught Exception thrown');
  console.error(err);
  process.exit(1);
});
const supportedLangs = ["ja", "nb", "da", "ru", "fr", "ko"];

const updatePOFiles = l10nProvider => Promise.all(supportedLangs.map(lang => l10nProvider.updatePO(lang)));


const googleTranslate = l10nProvider => Promise.all(supportedLangs.map(lang => l10nProvider.googleTranslatePO(lang)));

const buildScrolls = () => Promise.all(supportedLangs.map(lang => scrollsl10n.buildMDFromPO(lang)));

gulp.task("lore:update-pot", ["gtx:update-locale"]);

gulp.task('lore:update-po-files', done => updatePOFiles(lorel10n).then(() => done()));

gulp.task("lore:google-translate-all", done => googleTranslate(lorel10n).then(() => done()));

gulp.task("scrolls:update-pot", done => scrollsl10n.generatePOTFromMD().then(() => done()));

gulp.task("scrolls:update-po-files", done => updatePOFiles(scrollsl10n).then(() => done()));

gulp.task("scrolls:google-translate-all", done => googleTranslate(scrollsl10n).then(() => done()));

gulp.task("build-scrolls", done => buildScrolls().then(() => done()));

gulp.task("scrolls:update-translations", done => {
    scrollsl10n.generatePOTFromMD()
      .then(() => updatePOFiles(scrollsl10n))
      .then(() => googleTranslate(scrollsl10n))
      .then(() => buildScrolls())
      .then(() => done());
});

gulp.task("lore:update-translations", ["gtx:locale-update"], done => {
    updatePOFiles(lorel10n)
        .then(() => googleTranslate(lorel10n))
})

