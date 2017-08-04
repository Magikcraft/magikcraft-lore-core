"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var aspecto = require("./spells/aspecto");
var doNTimes = require("./spells/doNTimes");
var exmemento = require("./spells/exmemento");
var exsultus = require("./spells/exsultus");
var ianuae = require("./spells/ianuae");
var memento = require("./spells/memento");
var test123 = require("./spells/test123");
var viburnum = require("./spells/viburnum");
exports.description = "The core Magikcraft API spells";
exports.loreToLoad = [
    aspecto,
    doNTimes,
    exmemento,
    exsultus,
    ianuae,
    memento,
    test123,
    viburnum
];
