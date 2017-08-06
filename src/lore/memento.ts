import { ICanon } from 'magikcraft.io';

/**
 * Memento is a memory storage setter, modelled after localStorage.setItem.
 * It takes a key and a value. If no key is supplied, then the key '__default' is used.
 */
export interface ILocalStorage {
    setItem(key: string, value: any): void;
    getItem(key: string): any;
}
export const name = 'memento';
export const cost = 0;
export const code = (canon: ICanon): ILocalStorage => {
    var msg = canon.magik.msg;
    var MSG = canon.MSG;

    function getItem(key: string) {
        return canon.magik.mementii[key];
    }
    function _setItem(key: string, value: any) {
        if (!value) {
            value = key;
            key = '__default';
        }
        canon.magik.mementii[key] = value;

        if (value instanceof Java.type("org.bukkit.Location")) {
            canon.sender.sendMessage(msg(MSG.MEMENTO_PLACE));
        } else {
            canon.sender.sendMessage(msg(MSG.MEMENTO_SPECIFIC));
        }
    }
    const _localStorage: ILocalStorage = (_setItem as any);
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