"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.name = 'viburnum';
exports.cost = 0;
exports.code = function (canon) { return function (amount, delay) {
    if (amount === void 0) { amount = 1; }
    if (delay === void 0) { delay = 200; }
    function snowball() {
        var Snowball = Java.type("org.bukkit.entity.Snowball");
        var player = canon.sender;
        player.launchProjectile(Snowball.class);
    }
    ;
    snowball();
    for (var i = 1; i < amount; i++) {
        canon.magik.setTimeout(function () { return snowball(); }, delay * i);
    }
    canon.magik.dixit("Snowball!");
}; };
