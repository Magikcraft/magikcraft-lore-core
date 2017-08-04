"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.name = 'incendium';
exports.cost = 1;
exports.code = function (canon) { return function () {
    var Fireball = Java.type("org.bukkit.entity.Fireball");
    var p = canon.sender;
    p.launchProjectile(Fireball.class);
}; };
