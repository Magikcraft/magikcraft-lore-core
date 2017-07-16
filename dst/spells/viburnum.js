"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.name = 'viburnum';
exports.cost = 0;
exports.code = function (canon) { return function () {
    var Snowball = Java.type("org.bukkit.entity.Snowball");
    var player = canon.sender;
    player.launchProjectile(Snowball.class);
}; };
