"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.name = 'declaro';
exports.cost = 0;
exports.code = function (canon) { return function (item) {
    var gettext = canon.gettext;
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
        canon.magik.msg(gettext('Declaro! you manifest %s', item));
    };
    var thing = theThing(item);
    if (thing)
        manifest(thing);
}; };
