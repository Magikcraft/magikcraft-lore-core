"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
* EXAMPLE ONLY - DO NOT INCLUDE IN INDEX
*/
var maxDuration = 500;
exports.name = 'volare';
exports.cost = 0;
exports.code = function (canon) { return function (time) {
    if (time === void 0) { time = 200; }
    var duration = Math.min(time, maxDuration);
    canon._darkmagik_.potion("LEVITATION", { duration: duration });
    canon.magik.dixit("Volare!");
}; };
