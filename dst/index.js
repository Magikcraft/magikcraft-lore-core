"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var aspecto = require("./spells/aspecto");
var viburnum = require("./spells/viburnum");
var test123 = require("./spells/test123");
exports.description = "The core Magikcraft API spells";
exports.loreToLoad = [
    aspecto,
    viburnum,
    test123,
];
