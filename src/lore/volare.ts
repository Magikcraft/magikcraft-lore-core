import { ICanon } from 'magikcraft.io';

export const name = 'volare';
export const cost = 1;
export const code = (canon: ICanon) => function volare(duration = 200){
    canon._darkmagik_.potion("LEVITATION", {duration});
    canon.magik.dixit("Volare!");
};