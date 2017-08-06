import { ICanon } from 'magikcraft.io';

/**
 * Exmemento is a memory storage getter, modelled on localStorage.getItem.
 * It takes an optional key to retrieve from memory. If no key is supplied, then '__default' is used.
 */
export const name = 'exmemento';
export const cost = 0;
export const code = (canon: ICanon) => (key = '__default'): any => {
    return canon.magik.mementii[key];
};
