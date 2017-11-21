declare interface ICanon {
    gettext: (msg: string, ...args: any[]) => string;
    _darkmagik_: any;
    console: any;
    constant: any;
    displayLocalMsg: (msg: string, ...args: any[]) => void;
    globalLocale: string;
    http: any;
    log: any;
    magik: any;
    MSG: any;
    msg: (msg_id: string) => void;
    plugin: any;
    sender: any;
}