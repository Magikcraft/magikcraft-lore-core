interface BukkitLocation {
    setX(x: number): void;
    setY(y: number): void;
    setZ(z: number): void;
    setPitch(pitch: number): void;
    setYaw(yaw: number): void;
    setWorld(world: any): void;

    getX(): number;
    getY(): number;
    getZ(): number;
    getYaw(): number;
    getPitch(): number;
    getWorld(): BukkitWorld;
    getBlock(): BukkitBlock;
    getDirection(): vector;

    clone(): BukkitLocation;
}

interface vector {
    multiply(num: number): vector;
}

interface BukkitWorld {
    getBlockAt(location: BukkitLocation): BukkitBlock;
    strikeLightning(location: BukkitLocation): void;
    spawnEntity(location: BukkitLocation, entityType: any): void;
    createExplosion(location: BukkitLocation, times: number): void;
    getWorldBorder(): BukkitWorldBorder;
}

interface BukkitBlock {
    location: BukkitLocation;
    getType(): BukkitBlockType;
    getRelative(x: number, y: number, z: number): BukkitBlock;
    setType(newType: BukkitBlockType): void;
}

interface BukkitBlockType {
    equals(comparison: any): boolean;
}interface BukkitWorldBorder {
    getSize(): number;
    setSize(size: number): void;
    setCenter(location: BukkitLocation): void;
}

interface BukkitWorldBorder {
    getSize(): number;
    setSize(size: number): void;
    setCenter(location: BukkitLocation): void;
}