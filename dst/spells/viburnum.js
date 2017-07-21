"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.name = 'viburnum';
exports.cost = 0;
exports.code = function (canon) { return function () {
    function snowball() {
        var Snowball = Java.type("org.bukkit.entity.Snowball");
        var player = canon.sender;
        player.launchProjectile(Snowball.class);
    }
    ;
    return function viburnum(i) {
        if (i === void 0) { i = 0; }
        canon.magik.setTimeout(function () {
            snowball();
        }, 200 * i);
        canon.magik.dixit("Snowball!");
    };
}; };
