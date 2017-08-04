"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.name = 'satio';
exports.cost = 0;
exports.code = function (canon) { return function (playerName) {
    var MSG = canon.MSG;
    if (typeof playerName === "undefined") {
        canon.magik.msg(MSG.SATIO_GENERIC);
        return canon.sender.setFoodLevel(30);
    }
    var player = canon.plugin.getServer().getPlayer(playerName);
    if (typeof player === "undefined") {
        // TODO: Replace with localised message
        return canon.sender.sendMessage("Could not find " + playerName);
    }
    player.setFoodLevel(20);
}; };
