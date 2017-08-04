"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.name = 'aspecto';
exports.cost = 0;
exports.code = function (canon) { return function () {
    var location = canon.sender.getTargetBlock(null, 200).getRelative(0, 1, 0).getLocation();
    return location;
}; };
