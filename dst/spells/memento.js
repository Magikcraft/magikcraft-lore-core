"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Memento is a memory storage setter, modelled after localStorage.setItem.
 * It takes a key and a value. If no key is supplied, then the key '__default' is used.
 */
exports.name = 'memento';
exports.cost = 0;
exports.code = function (canon) { return function (key, value) {
    var msg = canon.magik.msg;
    var MSG = canon.MSG;
    if (!value) {
        value = key;
        key = '__default';
    }
    canon.magik.mementii[key] = value;
    if (value instanceof Java.type("org.bukkit.Location")) {
        canon.sender.sendMessage(msg(MSG.MEMENTO_PLACE));
    }
    else {
        canon.sender.sendMessage(msg(MSG.MEMENTO_SPECIFIC));
    }
}; };
