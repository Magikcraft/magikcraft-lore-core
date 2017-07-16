"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
* EXAMPLE ONLY - DO NOT INCLUDE IN INDEX
*/
exports.code = function (canon) { return function (msg, whom) {
    var log = canon.console.log;
    var audience = (typeof whom !== "undefined") ? canon.plugin.getServer().getPlayer(whom) : canon.sender;
    log.info("About to say");
    var _msg;
    if (typeof msg === "string" || typeof msg === "number") {
        _msg = msg;
    }
    if (typeof msg === "object") {
        try {
            _msg = JSON.stringify(msg);
        }
        catch (e) {
            _msg = msg;
        }
    }
    if (audience) {
        audience.sendMessage(_msg);
    }
}; };
exports.name = 'dixit';
exports.cost = 0;
