/**
 * Exsultus is the classic jump spell.
 * Applies a vertical velocity to a player. Takes a power between -100 and 100 that represents the percentage of maximum possible velocity.
 */
export declare const name = "exsultus";
export declare const cost = 1;
export declare const code: (canon: ICanon) => (power?: string | number) => any;
