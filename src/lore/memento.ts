declare const global: any, magikcraft: any;
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
    const magik = magikcraft.io;

    function getItem(key: string) {
        if (magik.durablePlayerMap.containsKey(key)) {
            return magik.durablePlayerMap.get(key);
        } else {
            return undefined;
        }
    }
    function _setItem(key: string, value: any) {
        if (!value) {
            value = key;
            key = 'memory.default';
        }
        magik.durablePlayerMap.put(key, value);

        if (value instanceof Java.type("org.bukkit.Location")) {
            canon.displayLocalMsg(`I remembered this place as ${key}`);
        } else {
            canon.displayLocalMsg(`I remembered ${key}`);
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