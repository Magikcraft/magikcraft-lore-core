"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var DEFAULT_FIRE_DURATION = 8; // 8 seconds
var TICKS_PER_SECOND = 20;
exports.name = 'incendium';
exports.cost = 0;
exports.code = function (canon) { return function (playerName, duration) {
    if (duration === void 0) { duration = DEFAULT_FIRE_DURATION; }
    var toLight = canon.plugin.getServer().getPlayer(playerName);
    var ticks = duration * TICKS_PER_SECOND;
    if (toLight) {
        toLight.setFireTicks(ticks);
    }
    else {
        // Replace with localisation solution
        canon.sender.sendMessage("Cannot find player " + playerName);
    }
}; };
