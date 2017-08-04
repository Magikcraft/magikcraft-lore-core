import { ICanon } from '../magikcraft-types/canon';
/**
* EXAMPLE ONLY - DO NOT INCLUDE IN INDEX
*/
export declare const name = "doNTimes";
export declare const cost = 0;
export declare const code: (canon: ICanon) => (action: () => void, nTimes: number, delay: number, callback?: (() => void) | undefined) => void;
