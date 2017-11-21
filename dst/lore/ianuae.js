"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Ianuae teleports the player to a given location.
 */
exports.name = 'ianuae';
exports.cost = 0;
exports.code = function (canon) { return function (location) {
    // canon.magik.dixit(MSG.IANUAE);
    var gettext = canon.gettext;
    if (!location) {
        canon.magik.dixit(gettext("Nowhere to teleport to..."));
    }
    else
        canon.sender.teleport(location);
}; };
