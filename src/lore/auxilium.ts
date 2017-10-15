export const name = 'auxilium';
export const cost = 0;
export const code = (canon: ICanon) => (playerName: string) => {
    var msg = canon.magik.msg;
    var gettext = canon.gettext;

    if (typeof playerName === "undefined") {
        msg(gettext('You need to give a player name!'));
        return;
    }

    if (canon.sender.playerListName == playerName) {
        msg(gettext("You cannot heal yourself!"));
        return;
    }

    var player = canon.plugin.getServer().getPlayer(playerName);
    if (!player) {
        msg(gettext('Could not find player %s', playerName));
        return;
    }

    player.setHealth(20);

    canon.magik.dixit(gettext('%s healed you!', canon.sender.playerListName), playerName);

    msg(gettext('You healed %s!', playerName));
};
