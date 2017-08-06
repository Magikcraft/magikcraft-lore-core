import { ICanon } from 'magikcraft.io';

export const name = 'infierno';
export const cost = 1;
export const code = (canon: ICanon) => function () {
    const Fireball = Java.type("org.bukkit.entity.Fireball");
    const p = canon.sender;
    p.launchProjectile(Fireball.class);
}