"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.name = 'volare';
exports.cost = 1;
exports.code = function (canon) { return function volare(duration) {
    if (duration === void 0) { duration = 200; }
    canon._darkmagik_.potion("LEVITATION", { duration: duration });
    canon.magik.dixit("Volare!");
}; };
