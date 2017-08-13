import { ICanon } from 'magikcraft.io';
/**
 * Memento is a memory storage setter, modelled after localStorage.setItem.
 * It takes a key and a value. If no key is supplied, then the key '__default' is used.
 */
export interface ILocalStorage {
    setItem(key: string, value: any): void;
    getItem(key: string): any;
}
export declare const name = "memento";
export declare const cost = 0;
export declare const code: (canon: ICanon) => ILocalStorage;
