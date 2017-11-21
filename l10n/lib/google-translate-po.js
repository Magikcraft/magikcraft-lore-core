/**
 * Sends strings in a po file to Google Cloud Translate API
 * for machine translation.
 *
 * Does not translate strings that are enclosed in backticks
 */

var po = require("node-po");
var async = require("async");
var debug = require("debug")("translate-po");
// debug = console.log;
const fs = require("fs");
var googleTranslate;

function main({ poFile, toLang, outputFile, apikey }) {
	if (typeof googleTranslate == "undefined") {
		googleTranslate = require("google-translate")(apikey);
	}
	debug("poFile:", poFile);
	debug("toLang:", toLang);
	debug("outputFile:", outputFile);

	return new Promise((resolve, reject) => {
		po.load(poFile, po =>
			translate(po.items, toLang)
				.then(({ translations, items }) => {
					items.forEach((item, index) => {
						if (translations[index] && item.msgstr[0].length === 0)
							item.msgstr = translations[index].translatedText;
					});
					po.save(outputFile, result => resolve(result));
				})
				.catch(reject)
		);
	});
}

function translate(items, toLang, fromLang = "en") {
	return new Promise((resolve, reject) => {
		var q = async.queue(doTranslate, 1);

		function doTranslate(item, _cb) {
			const toTranslate = item.msgid;
			const length = toTranslate ? toTranslate.length : 0;
			// If the string is a word in backticks, don't translate it
			// The last check deals with strings that start and end with backticked words
			// Those ones split, whereas a single back-ticked word doesn't split
			if (
				length &&
				toTranslate[0] === "`" &&
				toTranslate[length - 1] === "`" &&
				!toTranslate.split["`"]
			) {
				return _cb(null, {
					translatedText: toTranslate,
					originalText: toTranslate
				});
			}
			// Don't machine translate anything with an existing translation
			if (item.msgstr && item.msgstr[0].length) {
				return _cb(null, {
					translatedText: item.msgstr,
					originalText: item.msgid
				});
			}
			googleTranslate.translate(item.msgid, fromLang, toLang, _cb);
		}

		var translations = [];
		q.push(items, function(err, data) {
			if (err) return reject(err);
			translations.push(data);
		});

		q.drain = function() {
			return resolve({ translations, items });
		};
	});
}

function googleTranslatePO({ poDir, toLang, apikey }) {
	console.log(`Google Translate ${toLang}`);
	const baseDir = `${poDir}/${toLang}`;
	const files = fs.readdirSync(baseDir);
	return Promise.all(
		files.map(file =>
			main({
				toLang,
				poFile: `${baseDir}/${file}`,
				outputFile: `${baseDir}/${file}`,
				apikey
			})
		)
	);
}

module.exports = ({ poDir, apikey }) => (toLang, cb) =>
	googleTranslatePO({ poDir, toLang, apikey });
