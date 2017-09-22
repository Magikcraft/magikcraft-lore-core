export const name = 'toJSON';
export const cost = 0;

export const code = (canon: ICanon) => (thing: any) => {
    if (isLocation(thing)) {
        return locationToJSON(thing);
    }
}

function isLocation(thing: any) {
    return (thing.toString().indexOf('Location') === 0);
}

function locationToJSON(location: any) {
    return {
        type: 'Location',
        X: location.getX(),
        Y: location.getY(),
        Z: location.getZ(),
        Yaw: location.getYaw(),
        Pitch: location.getPitch(),
        World: location.getWorld().getName()
    }
}