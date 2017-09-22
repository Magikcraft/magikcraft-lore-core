/**
 * Ianuae teleports the player to a given location.
 */
export const name = 'ianuae';
export const cost = 0;
export const code = (canon: ICanon) => (location: BukkitLocation) => {
    var MSG = canon.MSG;
    // canon.magik.dixit(MSG.IANUAE);
    if (!location) {
        canon.magik.dixit("Nowhere to teleport to...");
        canon.magik.dixit(MSG.IANUAE_USAGE);
    } else
        canon.sender.teleport(location);
};


