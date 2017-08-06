import { ICanon } from 'magikcraft.io';
/**
 * Exmemento is a memory storage getter, modelled on localStorage.getItem.
 * It takes an optional key to retrieve from memory. If no key is supplied, then '__default' is used.
 */
export declare const name = "exmemento";
export declare const cost = 0;
export declare const code: (canon: ICanon) => (key?: string) => any;
