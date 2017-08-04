import { ICanon } from '../magikcraft-types/canon';

export const name = 'radiatum';
export const cost = 0;
export const code = (canon: ICanon) => function (playerName: string) {

    const toGlow = canon.plugin.getServer().getPlayer(playerName);

    if (toGlow != undefined) {
        toGlow.setGlowing(!toGlow.isGlowing());
    } else {
        // TODO: Replace with localised message
        canon.sender.sendMessage(`Player ${playerName} not online!`);
    }
}