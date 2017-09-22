export const name = 'fromJSON';
export const cost = 0;

export const code = (canon: ICanon) => (thing: any = {}) => {
    const _ = thing.toString();
    if (isLocation(thing)) {
        return JSONtoLocation(thing);
    }

    function isLocation(thing: any) {
        return (thing.type === 'Location');
    }

    function JSONtoLocation(location: any) {
        const here = canon.sender.getLocation();
        here.setWorld(canon.plugin.getServer().getWorld(location.World));
        here.setX(location.X);
        here.setY(location.Y);
        here.setZ(location.Z);
        here.setYaw(location.Yaw);
        here.setPitch(location.Pitch);
        return here;
    }
}