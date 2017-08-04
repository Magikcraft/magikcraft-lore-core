import { ICanon } from '../magikcraft-types/canon';

/**
 * Memento is a memory storage setter, modelled after localStorage.setItem.
 * It takes a key and a value. If no key is supplied, then the key '__default' is used.
 */
export const name = 'memento';
export const cost = 0;
export const code = (canon: ICanon) => (key: string, value?: any) => {
    var msg = canon.magik.msg;
    var MSG = canon.MSG;
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
};
