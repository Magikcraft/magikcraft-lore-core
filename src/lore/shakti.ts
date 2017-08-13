import { ICanon } from 'magikcraft.io';

export const name = 'shakti';
export const cost = 1;
export const code = (canon: ICanon) => function (location = canon.magik.aspecto()) {
    canon.sender.getWorld().strikeLightning(location);
}