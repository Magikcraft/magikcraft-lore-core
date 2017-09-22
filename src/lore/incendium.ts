const DEFAULT_FIRE_DURATION = 8; // 8 seconds
const TICKS_PER_SECOND = 20;
export const name = 'incendium';
export const cost = 0;
export const code = (canon: ICanon) => (playerName: string, duration = DEFAULT_FIRE_DURATION) => {
    const toLight = canon.plugin.getServer().getPlayer(playerName);
    const ticks = duration * TICKS_PER_SECOND;
    if (toLight) {
        toLight.setFireTicks(ticks);
    } else {
        // Replace with localisation solution
        canon.sender.sendMessage(`Cannot find player ${playerName}`);
    }
}