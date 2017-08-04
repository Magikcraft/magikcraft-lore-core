import { ICanon } from '../magikcraft-types/canon';

export const cost = 0;
export const name = 'random';
export const code = (canon: ICanon) => function (min = 1, max= 10) {
    return Math.floor(Math.random() * (max - min +1)) + min;
}