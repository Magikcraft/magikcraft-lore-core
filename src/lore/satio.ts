import { ICanon } from 'magikcraft.io';

export const name = 'satio';
export const cost = 0;
export const code = (canon: ICanon) => function (playerName: string) {
    const MSG = canon.MSG;

    if (typeof playerName === "undefined") {
        canon.magik.msg(MSG.SATIO_GENERIC);
        return canon.sender.setFoodLevel(30);
    }
    var player = canon.plugin.getServer().getPlayer(playerName);
    if (typeof player === "undefined") {
        // TODO: Replace with localised message
        return canon.sender.sendMessage("Could not find " + playerName);
    }
    player.setFoodLevel(20);
};