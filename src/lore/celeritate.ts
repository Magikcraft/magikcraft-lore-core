import { ICanon } from 'magikcraft.io';
export const name = 'celeritate';
export const cost = 0;

export const code = (canon: ICanon) => () => {
    canon.magik.msg(canon.MSG.CELERITATE);
    canon.sender.setWalkSpeed(1);
}