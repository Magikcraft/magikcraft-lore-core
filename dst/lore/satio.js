"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.name = 'satio';
exports.cost = 0;
exports.code = function (canon) { return function (playerName) {
    var manifest = function (item) {
        var MATERIAL = Java.type("org.bukkit.Material");
        var ItemStack = Java.type("org.bukkit.inventory.ItemStack");
        var thing = new ItemStack(MATERIAL[item]);
        canon.sender.getInventory().addItem(thing);
        canon.magik.msg('You got an apple'); // @TODO: localised message
    };
    manifest('APPLE');
    //    player.setFoodLevel(20);
}; };
