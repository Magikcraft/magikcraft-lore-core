import { ICanon } from '../magikcraft-types/canon';

/**
* EXAMPLE ONLY - DO NOT INCLUDE IN INDEX
*/
export const code = (canon: ICanon) => (msg: string, whom?: string) => {
    const log = canon.console.log;
    const audience = (typeof whom !== "undefined") ? canon.plugin.getServer().getPlayer(whom) : canon.sender;

    log.info("About to say");
    let _msg;
    if (typeof msg === "string" || typeof msg === "number") {
        _msg = msg;
    }
    if (typeof msg === "object") {
        try {
            _msg = JSON.stringify(msg);
        } catch (e) {
            _msg = msg;
        }
    }

    if (audience) {
        audience.sendMessage(_msg);
    }
};

export const name = 'dixit';

export const cost = 0;