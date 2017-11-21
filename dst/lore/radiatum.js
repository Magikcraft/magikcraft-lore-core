"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.name = 'radiatum';
exports.cost = 0;
exports.code = function (canon) { return function (playerName) {
    var gettext = canon.gettext;
    var toGlow = canon.plugin.getServer().getPlayer(playerName);
    if (toGlow != undefined) {
        toGlow.setGlowing(!toGlow.isGlowing());
        canon.msg(gettext('%s is now radioactive!', playerName));
    }
    else {
        // TODO: Replace with localised message
        canon.sender.sendMessage(gettext("Player %s not online!", playerName));
    }
}; };
