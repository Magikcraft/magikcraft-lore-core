"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Demonstrates how to apply a potion effect to the player.
 */
exports.name = 'noxvida';
exports.cost = 0;
exports.code = function (canon) { return function (duration) {
    if (duration === void 0) { duration = 200; }
    canon.magik.dixit("Noxvida!");
    canon._darkmagik_.potion("NIGHT_VISION", { duration: duration });
}; };
