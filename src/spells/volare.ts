import { ICanon } from '../magikcraft-types/canon';

const maxDuration = 500;

export const code = (canon: ICanon) => (time = 200) => {
    const duration = Math.min(time, maxDuration);
    canon._darkmagik_.potion("LEVITATION", { duration });
    canon.magik.dixit("Volare!");
};

