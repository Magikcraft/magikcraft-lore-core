"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.name = 'declaro';
exports.cost = 0;
exports.code = function (canon) { return function (item) {
    var MSG = canon.MSG;
    /**
     * This can be extended to allow different things to be manifest
     */
    var allowedItems = {
        "ELYTRA": "ELYTRA"
    };
    function theThing(item) {
        if (item) {
            return allowedItems[item.toUpperCase()];
        }
        else {
            return false;
        }
    }
    var manifest = function (item) {
        var MATERIAL = Java.type("org.bukkit.Material");
        var ItemStack = Java.type("org.bukkit.inventory.ItemStack");
        var thing = new ItemStack(MATERIAL[item]);
        canon.sender.getInventory().addItem(thing);
        canon.magik.msg(MSG.DECLARO);
    };
    var thing = theThing(item);
    if (thing)
        manifest(thing);
}; };
