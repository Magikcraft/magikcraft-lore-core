"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.name = 'iacta';
exports.cost = 1;
exports.code = function (canon) { return function (playerName) {
    var toToss = canon.plugin.getServer().getPlayer(playerName);
    if (!toToss) {
        canon.sender.sendMessage("Player " + playerName + " not online");
        return;
    }
    //get the angle of the velocity direction
    var angle = Math.random() * 360;
    //a value between 0 and 3.9f (the speed of the toss)
    var magnitude = Math.random() * 3.9;
    //sin and cos return values between 0 and 1 so map the magnitude to the vectors
    var xComponent = Math.cos(angle) * magnitude;
    var zComponent = Math.sin(angle) * magnitude;
    //lets guarantee that the toss will push a player upwards by the same magnitude
    // therefore yComponent = magnitude
    var Vector = Java.type('org.bukkit.util.Vector');
    if (!toToss.hasPermission("magikcraft.cantbetossed")) {
        toToss.setVelocity(new Vector(xComponent, magnitude, zComponent));
    }
}; };
