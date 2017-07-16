"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var allowedItems = {
    "ELYTRA": "ELYTRA"
};
exports.name = 'declaro';
exports.cost = 1;
exports.code = function (canon) { return function (item) {
    var MSG = canon.MSG;
    var manifest = function (item) {
        var MATERIAL = Java.type("org.bukkit.Material");
        var ItemStack = Java.type("org.bukkit.inventory.ItemStack");
        var thing = new ItemStack(MATERIAL[item]);
        canon.sender.getInventory().addItem(thing);
        canon.magik.msg(MSG.DECLARO);
    };
    if (item) {
        var thing = allowedItems[item.toUpperCase()];
        if (thing)
            manifest(thing);
    }
}; };
