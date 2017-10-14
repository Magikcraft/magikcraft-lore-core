const gulp = require("gulp");
const rename = require("gulp-rename");
const translatePO = require("./l10n/translate-po");
const fs = require("fs");
const buildMD = require('./l10n/generate-md');

gulp.task(
  "generate-po-files", () =>
  ["ja", "no", "da"].map(lang => {
    gulp
      .src("pot/*")
      .pipe(
        rename(function(path) {
          path.basename = path.basename.replace(".en", `.${lang}`);
          path.extname = ".po";
        })
      )
      .pipe(gulp.dest(`po/${lang}`));
  })
);

gulp.task("translate-ja", done => doPOTranslate("ja", done));
gulp.task("translate-da", done => doPOTranslate("da", done));

gulp.task("build-da", done => buildMD("da"));

function doPOTranslate(lang, cb) {
  const files = fs.readdirSync(`po/${lang}`);
  Promise.all(
    files.map(file =>
      translatePO({
        lang,
        poFile: `po/${lang}/${file}`,
        outputFile: `po/${lang}/${file}`
      })
    )
  )
    .then(() => cb())
    .catch(err => cb(console.log("Error", err)));
}
