"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var maxDuration = 500;
exports.volare = function (canon) { return function (time) {
    if (time === void 0) { time = 200; }
    var duration = Math.min(time, maxDuration);
    canon._darkmagik_.potion("LEVITATION", { duration: duration });
    canon.magik.dixit("Volare!");
}; };
