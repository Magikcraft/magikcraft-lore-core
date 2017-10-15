const gulp = require("gulp");
const rename = require("gulp-rename");
const scrollsl10n = require('./l10n')({
    poDir: 'scrolls/po',
    sourceDir: 'scrolls',
    fromLang: 'en',
    potDir: 'scrolls/pot',
});
const fs = require("fs");

gulp.task("update-pot", () => scrollsl10n.generatePOTFromMD());

gulp.task("update-po-files", () =>
  ["ja", "nb", "da", "ru"].map(lang => scrollsl10n.updatePO(lang)));

gulp.task("google-translate-ja", done => scrollsl10n.googleTranslatePO("ja", done));
gulp.task("google-translate-da", done => scrollsl10n.googleTranslatePO("da", done));
gulp.task("google-translate-nb", done => scrollsl10n.googleTranslatePO("nb", done));
gulp.task("google-translate-ru", done => scrollsl10n.googleTranslatePO("ru", done));

gulp.task("google-translate-all", [
  "google-translate-ja",
  "google-translate-da",
  "google-translate-nb",
  "google-translate-ru"
]);

gulp.task("build-da", done => scrollsl10n.buildMDFromPO("da"));
gulp.task("build-ja", done => scrollsl10n.buildMDFromPO("ja"));
gulp.task("build-nb", done => scrollsl10n.buildMDFromPO("nb"));
gulp.task("build-ru", done => scrollsl10n.buildMDFromPO("ru"));

gulp.task("update-scrolls", ["google-translate-all", "build-scrolls"]);

gulp.task("build-scrolls", ["build-da", "build-ja", "build-nb", "build-ru"]);
