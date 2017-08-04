import { ICanon } from '../magikcraft-types/canon';

/**
 * Dixit displays a message in a player's console - by default the current player. It can be used to send messages to other players by passing in the second optional argument, a player name.
 */
export const name = 'dixit';
export const cost = 0;
export const code = (canon: ICanon) => (msg: string, whom?: string) => {
    let audience;
    if (typeof whom !== "undefined") {
        audience = canon.plugin.getServer().getPlayer(whom);
    } else {
        audience = canon.sender;
    }

    let _msg = serialiseMsg(msg);

    audience.sendMessage(_msg);
};

/**
 *
 * Here we serialise the message payload to a string for display
 *
 * @param {*} msg
 * @returns
 */
function serialiseMsg(msg: any) {
    const msgType = typeof msg;
    if (msgType === 'undefined') {
        return msg;
    }
    if (msgType === 'string' || msgType === 'number') {
        return msg;
    }
    if (typeof msg === "object") {
        try {
            return JSON.stringify(msg);
        } catch (e) {
            return msg;
        }
    }
    // It's probably some kind of Java object.
    try {
        return msg.toString();
    } catch(e) {
        return msg;
    }
}