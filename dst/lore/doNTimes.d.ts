import { ICanon } from 'magikcraft.io';
export declare const name = "doNTimes";
export declare const cost = 0;
export declare const code: (canon: ICanon) => (action: (...args: any[]) => any, nTimes?: number, delay?: number, callback?: (() => any) | undefined) => void;
