export const name = 'hic';
export const cost = 0;
export const code = (canon: ICanon) => (): BukkitLocation => {
    return canon.sender.getLocation();
}