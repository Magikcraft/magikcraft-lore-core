/**
 * Exsultus is the classic jump spell.
 * Applies a vertical velocity to a player. Takes a power between -100 and 100 that represents the percentage of maximum possible velocity.
 */

export const name = 'exsultus';
export const cost = 1;
export const code = (canon: ICanon) => (power: number | string = 50) => {

    const MSG = canon.MSG;
    const magik = canon.magik;
    const msg = magik.msg.bind(canon.sender);

    var jumppower = parseFloat(power as string);
    if (isNaN(jumppower)) {
        return msg(MSG.EXSULTUS_USAGE);
    }

    /**
     * The range of jumppower is -100% to 100%. Values less than zero cause a downward velocity. Values above 0 cause an upward velocity
     */
    jumppower = Math.min(jumppower, 100);
    jumppower = Math.max(jumppower, -100);

    /**
     * Here we scale the jumppower. With jumpPowerScalingFactor set to 100 there is no scaling. If you set it to 50, then the player can jump up to a maximum of 50% of the total jump power potential.
     * If you get the jumpPowerScalingFactor from a character or level attribute, this allows the jumping power of the player to increase as their magikal prowess increases, etc...
     */
    const jumpPowerScalingFactor = 100;
    const BukkitVelocityScaleFactor = 3.9; // Max valid velocity
    const jumpVelocity = (jumppower / 100) * jumpPowerScalingFactor * BukkitVelocityScaleFactor;

    const player = canon.sender;

    const yDeltaV = jumpVelocity;
    const xDeltaV = 0.0;
    const zDeltaV = 0.0;
    const Vector = Java.type('org.bukkit.util.Vector');
    player.setVelocity(new Vector(xDeltaV, yDeltaV, zDeltaV));
};


