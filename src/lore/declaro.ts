export const name = 'declaro';
export const cost = 0;
export const code = (canon: ICanon) => function (item: string) {
    const MSG = canon.MSG;

    /**
     * This can be extended to allow different things to be manifest
     */
    const allowedItems = {
        "ELYTRA": "ELYTRA"
    };

    function theThing(item: string) {
        if (item) {
            return (allowedItems as any)[item.toUpperCase()];
        } else {
            return false;
        }
    }


    const manifest = function (item: string) {
        const MATERIAL = Java.type("org.bukkit.Material");
        const ItemStack = Java.type("org.bukkit.inventory.ItemStack");
        const thing = new ItemStack(MATERIAL[item]);
        canon.sender.getInventory().addItem(thing);
        canon.magik.msg(MSG.DECLARO);
    };

    const thing = theThing(item);
    if (thing) manifest(thing);
};
