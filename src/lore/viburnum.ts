export const name = 'viburnum';
export const cost = 0;
export const code = (canon: ICanon) => (amount = 1, delay = 200) => {

    function snowball() {
        var Snowball = Java.type("org.bukkit.entity.Snowball");
        var player = canon.sender;
        player.launchProjectile(Snowball.class);
    };
    snowball();
    for (let i = 1; i < amount; i++) {
        canon.magik.setTimeout(() => snowball(), delay * i);
    }
    canon.magik.dixit(`Snowball!`);
};