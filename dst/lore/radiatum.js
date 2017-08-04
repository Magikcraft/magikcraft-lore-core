"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.name = 'radiatum';
exports.cost = 0;
exports.code = function (canon) { return function (playerName) {
    var toGlow = canon.plugin.getServer().getPlayer(playerName);
    if (toGlow != undefined) {
        toGlow.setGlowing(!toGlow.isGlowing());
    }
    else {
        // TODO: Replace with localised message
        canon.sender.sendMessage("Player " + playerName + " not online!");
    }
}; };
