import { BukkitLocation } from '../magikcraft-types/Bukkit';
import { ICanon } from '../magikcraft-types/canon';
/**
 * Ianuae teleports the player to a given location.
 */
export declare const name = "ianuae";
export declare const cost = 0;
export declare const code: (canon: ICanon) => (location: BukkitLocation) => void;
