"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.name = 'fromJSON';
exports.cost = 0;
exports.code = function (canon) { return function (thing) {
    if (thing === void 0) { thing = {}; }
    var _ = thing.toString();
    if (isLocation(thing)) {
        return JSONtoLocation(thing);
    }
    function isLocation(thing) {
        return (thing.type === 'Location');
    }
    function JSONtoLocation(location) {
        var here = canon.sender.getLocation();
        here.setWorld(canon.plugin.getServer().getWorld(location.World));
        here.setX(location.X);
        here.setY(location.Y);
        here.setZ(location.Z);
        here.setYaw(location.Yaw);
        here.setPitch(location.Pitch);
        return here;
    }
}; };
