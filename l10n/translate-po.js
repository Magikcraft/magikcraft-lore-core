var po = require("node-po");
var async = require("async");
var debug = require("debug")("translate-po");
// debug = console.log;
const { promisify } = require("util");
const fs = require('fs');
const APIKEY = require('./APIKEY.json').apikey;
var googleTranslate = require("google-translate")(APIKEY);

function main({ poFile, lang, outputFile }, cb) {
  debug("poFile:", poFile);
  debug("lang:", lang);
  debug("outputFile:", outputFile);

  return new Promise((resolve, reject) => {
	  po.load(poFile, po => translate(po.items, lang)
		.then(({translations, items}) => {
			items.forEach((item, index) => {
				if (translations[index] && item.msgstr[0].length === 0)
				item.msgstr = translations[index].translatedText;
			});
			po.save(outputFile, result => resolve(result));
		})
		.catch(reject));
	});
}

function translate(items, lang) {
  return new Promise((resolve, reject) => {
    var q = async.queue(doTranslate, 1);

    function doTranslate(item, _cb) {
      // debug("translating:", item);
      const toTranslate = item.msgid;
      const length = toTranslate ? toTranslate.length : 0;
      // If the entire string is in backticks, don't translate it
      if (length && toTranslate[0] === "`" && toTranslate[length - 1] === "`") {
        return _cb(null, {
          translatedText: toTranslate,
          originalText: toTranslate
        });
      }
      googleTranslate.translate(item.msgid, "en", lang, _cb);
    }

    var translations = [];
    q.push(items, function(err, data) {
	  if (err) return reject(err);
      translations.push(data);
    });

    q.drain = function() {
      return resolve({translations, items});
    };
  });
}

module.exports = opts => main(opts);
