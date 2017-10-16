const supportedLangs = ["ja", "nb", "da", "ru", "fr", "ko", "es"];

const gulp = require("gulp");
const po2json = require('gulp-po2json');

/**
 * Gulp task to extract strings from the lore
 * Creates a gulp task `gtx:locale-update` that extracts the gettext strings
 */
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

const updatePOFiles = l10nProvider => Promise.all(supportedLangs.map(lang => l10nProvider.updatePO(lang)));

const googleTranslate = l10nProvider => Promise.all(supportedLangs.map(lang => l10nProvider.googleTranslatePO(lang)));

const buildLocalisedScrolls = () => Promise.all(supportedLangs.map(lang => scrollsl10n.buildMDFromPO(lang)));

const lore_po2json = () => gulp.src(['lore-locale/**/*.po'])
		.pipe(po2json())
		.pipe(gulp.dest('dst/translations/'));

// The complete localisation task for the scrolls
gulp.task("scrolls:update-translations", done =>
	scrollsl10n.generatePOTFromMD()
	  .then(() => updatePOFiles(scrollsl10n))
	  .then(() => googleTranslate(scrollsl10n))
	  .then(() => buildLocalisedScrolls())
	  .then(() => done())
);

// The complete localisation task for the lore
gulp.task("lore:update-translations", ["gtx:locale-update"], done =>
	updatePOFiles(lorel10n)
		.then(() => googleTranslate(lorel10n))
		.then(() => lore_po2json())
);


/**
 * These gulp tasks perform parts of the localisation pipeline.
 * They are not used - they are here for reference, for testing, and for
 * doing parts of the pipeline, like re-building without pulling google translations
 */
gulp.task("lore:update-pot", ["gtx:update-locale"]);
gulp.task('lore:update-po-files', done => updatePOFiles(lorel10n).then(() => done()));
gulp.task("lore:google-translate-all", done => googleTranslate(lorel10n).then(() => done()));
gulp.task("lore:build-localised-strings", () => lore_po2json());
gulp.task("scrolls:update-pot", done => scrollsl10n.generatePOTFromMD().then(() => done()));
gulp.task("scrolls:update-po-files", done => updatePOFiles(scrollsl10n).then(() => done()));
gulp.task("scrolls:google-translate-all", done => googleTranslate(scrollsl10n).then(() => done()));
gulp.task('scrolls:po2json', lore_po2json);
gulp.task("scrolls:build-localised-md", done => buildLocalisedScrolls().then(() => done()));
