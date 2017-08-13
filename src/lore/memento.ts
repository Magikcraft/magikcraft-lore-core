declare const global: any;
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
    const MSG = canon.MSG;

    function getItem(key: string) {
        if (!global.mementii) {
            global.mementii = {};
        }
        return global.mementii[key];
    }
    function _setItem(key: string, value: any) {
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
        } else {
            canon.displayLocalMsg("I remember that!");
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