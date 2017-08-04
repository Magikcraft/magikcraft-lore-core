"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Dixit displays a message in a player's console - by default the current player. It can be used to send messages to other players by passing in the second optional argument, a player name.
 */
exports.name = 'dixit';
exports.cost = 0;
exports.code = function (canon) { return function (msg, whom) {
    var audience;
    if (typeof whom !== "undefined") {
        audience = canon.plugin.getServer().getPlayer(whom);
    }
    else {
        audience = canon.sender;
    }
    var _msg = serialiseMsg(msg);
    audience.sendMessage(_msg);
}; };
/**
 *
 * Here we serialise the message payload to a string for display
 *
 * @param {*} msg
 * @returns
 */
function serialiseMsg(msg) {
    var msgType = typeof msg;
    if (msgType === 'undefined') {
        return msg;
    }
    if (msgType === 'string' || msgType === 'number') {
        return msg;
    }
    if (typeof msg === "object") {
        try {
            return JSON.stringify(msg);
        }
        catch (e) {
            return msg;
        }
    }
    // It's probably some kind of Java object.
    try {
        return msg.toString();
    }
    catch (e) {
        return msg;
    }
}
