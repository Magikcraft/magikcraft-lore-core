import { ICanon } from 'magikcraft.io';
/**
 * Dixit displays a message in a player's console - by default the current player. It can be used to send messages to other players by passing in the second optional argument, a player name.
 */
export declare const name = "dixit";
export declare const cost = 0;
export declare const code: (canon: ICanon) => (msg: string, whom?: string | undefined) => void;
