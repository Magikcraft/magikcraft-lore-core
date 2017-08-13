import { ICanon } from 'magikcraft.io';

/**
* EXAMPLE ONLY - DO NOT INCLUDE IN INDEX
*/
const maxDuration = 500;
export const name = 'volare';
export const cost = 0;
export const code = (canon: ICanon) => (time = 200) => {
    const duration = Math.min(time, maxDuration);
    canon._darkmagik_.potion("LEVITATION", { duration });
    canon.magik.dixit("Volare!");
};

