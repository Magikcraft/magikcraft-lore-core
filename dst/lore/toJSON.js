"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.name = 'toJSON';
exports.cost = 0;
exports.code = function (canon) { return function (thing) {
    if (isLocation(thing)) {
        return locationToJSON(thing);
    }
}; };
function isLocation(thing) {
    return (thing.toString().indexOf('Location') === 0);
}
function locationToJSON(location) {
    return {
        type: 'Location',
        X: location.getX(),
        Y: location.getY(),
        Z: location.getZ(),
        Yaw: location.getYaw(),
        Pitch: location.getPitch(),
        World: location.getWorld().getName()
    };
}
