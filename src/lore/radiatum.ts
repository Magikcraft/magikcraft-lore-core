export const name = 'radiatum';
export const cost = 0;
export const code = (canon: ICanon) => function (playerName: string) {
    const gettext = canon.gettext;
    const toGlow = canon.plugin.getServer().getPlayer(playerName);

    if (toGlow != undefined) {
        toGlow.setGlowing(!toGlow.isGlowing());
        canon.msg(gettext('%s is now radioactive!', playerName))
    } else {
        // TODO: Replace with localised message
        canon.sender.sendMessage(gettext(`Player %s not online!`, playerName));
    }
}