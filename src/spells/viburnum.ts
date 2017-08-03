import { ICanon } from '../magikcraft-types/canon';

export const name = 'viburnum';
export const cost = 0;
export const code = (canon: ICanon) => () => {

    function snowball() {
        var Snowball = Java.type("org.bukkit.entity.Snowball");
        var player = canon.sender;
        player.launchProjectile(Snowball.class);
    };

    return function viburnum(i = 0) {
        canon.magik.setTimeout(() => snowball(), 200 * i);
        canon.magik.dixit(`Snowball!`);
    }
};