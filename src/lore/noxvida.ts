import { ICanon } from 'magikcraft.io';

/**
 * Demonstrates how to apply a potion effect to the player.
 */
export const name = 'noxvida';
export const cost = 0;
export const code = (canon: ICanon) => function (duration = 200) {
    canon.magik.dixit("Noxvida!");

    canon._darkmagik_.potion("NIGHT_VISION", { duration });
}