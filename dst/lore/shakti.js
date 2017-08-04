"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.name = 'shakti';
exports.cost = 1;
exports.code = function (canon) { return function (location) {
    if (location === void 0) { location = canon.magik.aspecto(); }
    canon.sender.getWorld().strikeLightning(location);
}; };
