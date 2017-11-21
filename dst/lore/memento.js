"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.name = 'memento';
exports.cost = 0;
exports.undecorated = true;
exports.code = function (canon) {
    var gettext = canon.gettext;
    var magik = magikcraft.io;
    var defaultKey = 'memory.default';
    function getItem(key) {
        if (key === void 0) { key = defaultKey; }
        if (magik.durablePlayerMap.containsKey(key)) {
            return magik.durablePlayerMap.get(key);
        }
        else {
            return undefined;
        }
    }
    function _setItem(key, value) {
        if (!value) {
            value = key;
            key = defaultKey;
        }
        magik.durablePlayerMap.put(key, value);
        if (value instanceof Java.type("org.bukkit.Location")) {
            canon.msg(gettext('I remembered this place as %s', key));
        }
        else {
            canon.msg(gettext('I remembered %s as %s', value, key));
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
