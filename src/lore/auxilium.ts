import { ICanon } from 'magikcraft.io';
export const name = 'auxilium';
export const cost = 0;
export const code = (canon: ICanon) => (playerName: string) => {
    var MSG = canon.MSG;

    if (typeof playerName === "undefined") {
        canon.displayLocalMsg('You need to give a player name!');
        return
    }

    if (canon.sender.playerListName == playerName) {
        canon.displayLocalMsg("You cannot heal yourself!");
        return;
    }

    var player = canon.plugin.getServer().getPlayer(playerName);
    if (!player) {
        canon.magik.msg([MSG.AUXILIUM_PLAYERNAME_404, playerName]);
        return;
    }

    player.setHealth(20);

    canon.magik.dixit(canon.sender.playerListName + ' healed you!', playerName);

    canon.magik.msg([MSG.AUXILIUM_SUCCESS, playerName]);
};
