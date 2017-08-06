import { ICanon } from 'magikcraft.io';

export const name = 'iacta';
export const cost = 1;
export const code = (canon: ICanon) => function (playerName: string) {

    const toToss = canon.plugin.getServer().getPlayer(playerName);

    if (!toToss) {
        canon.sender.sendMessage(`Player ${playerName} not online`);
        return
    }

    //get the angle of the velocity direction
    const angle = Math.random() * 360;
    //a value between 0 and 3.9f (the speed of the toss)
    const magnitude = Math.random() * 3.9;
    //sin and cos return values between 0 and 1 so map the magnitude to the vectors
    const xComponent = Math.cos(angle) * magnitude;
    const zComponent = Math.sin(angle) * magnitude;

    //lets guarantee that the toss will push a player upwards by the same magnitude
    // therefore yComponent = magnitude

    const Vector = Java.type('org.bukkit.util.Vector');
    if (!toToss.hasPermission("magikcraft.cantbetossed")) {
        toToss.setVelocity(new Vector(xComponent, magnitude, zComponent));
    }
}
