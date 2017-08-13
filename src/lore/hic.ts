import { BukkitLocation } from 'magikcraft.io';
import { ICanon } from 'magikcraft.io';

export const name = 'hic';
export const cost = 0;
export const code = (canon: ICanon) => (): BukkitLocation => {
    return canon.sender.getLocation();
}