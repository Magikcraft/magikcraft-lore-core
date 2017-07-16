export interface BukkitPlayer {
    getWorld(): BukkitWorld;
    getName(): string;
    getLocation(): BukkitLocation;
    getEyeLocation(): BukkitLocation;
    getLineOfSight(blocks: BukkitMaterial[], maxDistance: number): BukkitBlock[];
    getTargetBlock(blockType: null|BukkitBlockType, distance: number): BukkitBlock;
    launchProjectile(projectileType: any): void;
    isSneaking(): boolean;
    setGameMode(mode: string): void;
    setWalkSpeed(speed: number): void;
    getInventory(): BukkitInventory;
    playerListName: string;
}

export interface BukkitInventory {
    addItem(item: BukkitItemStack): void;
}

export interface BukkitItemStack {

}

export interface BukkitWorld {
    getBlockAt(location: BukkitLocation): BukkitBlock;
    strikeLightning(location: BukkitLocation): void;
    spawnEntity(location: BukkitLocation, entityType: any): void;
    createExplosion(location: BukkitLocation, times: number): void;
}

export interface BukkitLocation {
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

export interface BukkitBlock {
    location: BukkitLocation;
    getType(): BukkitBlockType;
    getRelative(x: number, y: number, z: number): BukkitBlock;
    setType(newType: BukkitBlockType): void;
    getLocation(): BukkitLocation;
}

export interface BukkitBlockType {
    equals(comparison: any): boolean;
}

export interface vector {
    multiply(num: number): vector;
}

export type BukkitMaterial = any;
