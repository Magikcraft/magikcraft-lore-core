"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.name = 'hic';
exports.cost = 0;
exports.code = function (canon) { return function () {
    return canon.sender.getLocation();
}; };
