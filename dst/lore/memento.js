"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.name = 'memento';
exports.cost = 0;
exports.code = function (canon) {
    var MSG = canon.MSG;
    function getItem(key) {
        if (!global.mementii) {
            global.mementii = {};
        }
        return global.mementii[key];
    }
    function _setItem(key, value) {
        if (!value) {
            value = key;
            key = '__default';
        }
        if (!global.mementii) {
            global.mementii = {};
        }
        global.mementii[key] = value;
        if (value instanceof Java.type("org.bukkit.Location")) {
            canon.displayLocalMsg("I remembered this place");
        }
        else {
            canon.displayLocalMsg("I remember that!");
        }
    }
    var _localStorage = _setItem;
    // What is this madness? 100% backward-compatibility.
    // The exported object has the same signature as the old memento, and now also
    // has setItem and getItem methods.
    _localStorage.setItem = _setItem;
    _localStorage.getItem = getItem;
    return _localStorage;
};
