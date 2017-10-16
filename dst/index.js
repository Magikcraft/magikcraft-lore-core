"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var aspecto = require("./lore/aspecto");
var auxilium = require("./lore/auxilium");
var celeritate = require("./lore/celeritate");
var declaro = require("./lore/declaro");
var dixit = require("./lore/dixit");
var doNTimes = require("./lore/doNTimes");
var exmemento = require("./lore/exmemento");
var exsultus = require("./lore/exsultus");
var fromJSON = require("./lore/fromJSON");
var hic = require("./lore/hic");
var iacta = require("./lore/iacta");
var ianuae = require("./lore/ianuae");
var incendium = require("./lore/incendium");
var infierno = require("./lore/infierno");
var memento = require("./lore/memento");
var noxvida = require("./lore/noxvida");
var radiatum = require("./lore/radiatum");
var random = require("./lore/random");
var satio = require("./lore/satio");
var shakti = require("./lore/shakti");
var stella = require("./lore/stella");
var toJSON = require("./lore/toJSON");
var viburnum = require("./lore/viburnum");
var volare = require("./lore/volare");
exports.description = "The core Magikcraft API spells";
exports.loreToLoad = [
    aspecto,
    auxilium,
    celeritate,
    declaro,
    dixit,
    doNTimes,
    exmemento,
    exsultus,
    fromJSON,
    hic,
    iacta,
    ianuae,
    incendium,
    infierno,
    memento,
    noxvida,
    radiatum,
    random,
    satio,
    shakti,
    stella,
    toJSON,
    viburnum,
    volare
];
exports.stringsToLoad = {
    "da": "./translations/da/lore.json",
    "es": "./translations/es/lore.json",
    "fr": "./translations/fr/lore.json",
    "ja": "./translations/ja/lore.json",
    "ko": "./translations/ko/lore.json",
    "nb": "./translations/nb/lore.json",
    "ru": "./translations/ru/lore.json"
};
