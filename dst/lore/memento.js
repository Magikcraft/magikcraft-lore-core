"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.name = 'memento';
exports.cost = 0;
exports.code = function (canon) {
    var msg = canon.magik.msg;
    var MSG = canon.MSG;
    function getItem(key) {
        return canon.magik.mementii[key];
    }
    function _setItem(key, value) {
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
    }
    var _localStorage = _setItem;
    // What is this madness? 100% backward-compatibility.
    // The exported object has the same signature as the old memento, and now also
    // has setItem and getItem methods.
    _localStorage.setItem = _setItem;
    _localStorage.getItem = getItem;
    return _localStorage;
};
/*
fetch('program.wasm')
    .then( response => response.arrayBuffer())
    .then( bytes => WebAssembly.compile(bytes))
    .then( wasmModule => WebAssembly.instantiate(wasmModule, {
        env: { printf: console.log }
    }))
    .then( results => {
        results.exports.main();
    });
*/ 
