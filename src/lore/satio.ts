export const name = 'satio';
export const cost = 0;
export const code = (canon: ICanon) => function (playerName: string) {
    const gettext = canon.gettext;
    const manifest = function (item: string) {
        const MATERIAL = Java.type("org.bukkit.Material");
        const ItemStack = Java.type("org.bukkit.inventory.ItemStack");
        const thing = new ItemStack(MATERIAL[item]);
        canon.sender.getInventory().addItem(thing);
        canon.magik.msg('You got an apple'); // @TODO: localised message
    };
    manifest('APPLE');
    canon.msg(gettext('You manifested an apple!'));
//    player.setFoodLevel(20);
};