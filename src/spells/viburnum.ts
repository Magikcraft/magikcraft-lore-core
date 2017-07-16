import { ICanon } from '../magikcraft-types/canon';

export const name = 'viburnum';
export const cost = 0;
export const code = (canon: ICanon) => () => {
    var Snowball = Java.type("org.bukkit.entity.Snowball");
    var player = canon.sender;
    player.launchProjectile(Snowball.class);
};
