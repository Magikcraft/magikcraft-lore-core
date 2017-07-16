import { ICanon } from '../magikcraft-types/canon';

export const name = 'auxilium';
export const cost = 0;
export const code = (canon: ICanon) => (playerName?: string) => {
    const sender = canon.sender;
    var MSG = canon.MSG;

    if (typeof playerName === "undefined") {
        return canon.magik.msg(MSG.AUXILIUM_PLAYERNAME_REQUIRED);
    }

    if (sender.playerListName == playerName) {
        canon.magik.msg(MSG.AUXILIUM_SELFHEAL_DISALLOWED);
        return;
    }

    var player = canon.magik.getServer().getPlayer(playerName);
    if (!player) {
        canon.magik.msg([MSG.AUXILIUM_PLAYERNAME_404, playerName]);
        return;
    }

    player.setHealth(20);

    canon.magik.dixit(sender.playerListName + ' healed you!', playerName);

    canon.magik.msg([MSG.AUXILIUM_SUCCESS, playerName]);
};
