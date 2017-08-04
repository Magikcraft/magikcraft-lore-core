"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Ianuae teleports the player to a given location.
 */
exports.name = 'ianuae';
exports.cost = 0;
exports.code = function (canon) { return function (location) {
    var MSG = canon.MSG;
    canon.magik.dixit(MSG.IANUAE);
    if (!location) {
        canon.magik.dixit("Nowhere to teleport to...");
        canon.magik.dixit(MSG.IANUAE_USAGE);
    }
    else
        canon.sender.teleport(location);
}; };
