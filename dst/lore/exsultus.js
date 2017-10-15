"use strict";
/**
 * Exsultus is the classic jump spell.
 * Applies a vertical velocity to a player. Takes a power between -100 and 100 that represents the percentage of maximum possible velocity.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.name = 'exsultus';
exports.cost = 1;
exports.code = function (canon) { return function (power) {
    if (power === void 0) { power = 50; }
    var gettext = canon.gettext;
    var magik = canon.magik;
    var msg = canon.msg;
    var jumppower = parseFloat(power);
    if (isNaN(jumppower)) {
        return msg(gettext('You need to pass in a number to exsultus!'));
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
    var jumpPowerScalingFactor = 100;
    var BukkitVelocityScaleFactor = 3.9; // Max valid velocity
    var jumpVelocity = (jumppower / 100) * jumpPowerScalingFactor * BukkitVelocityScaleFactor;
    var player = canon.sender;
    var yDeltaV = jumpVelocity;
    var xDeltaV = 0.0;
    var zDeltaV = 0.0;
    var Vector = Java.type('org.bukkit.util.Vector');
    player.setVelocity(new Vector(xDeltaV, yDeltaV, zDeltaV));
}; };
