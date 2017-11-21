/**
 * Ianuae teleports the player to a given location.
 */
export const name = 'ianuae';
export const cost = 0;
export const code = (canon: ICanon) => (location: BukkitLocation) => {
    // canon.magik.dixit(MSG.IANUAE);
    const gettext = canon.gettext;
    if (!location) {
        canon.magik.dixit(gettext("Nowhere to teleport to..."));
    } else
        canon.sender.teleport(location);
};


