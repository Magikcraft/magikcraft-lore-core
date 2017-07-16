import { ICanon } from '../magikcraft-types/canon';

export const name = 'celeritate';
export const cost = 1;
export const spell = (canon: ICanon) => () => {
    canon.magik.msg(canon.MSG.CELERITATE);
    canon.sender.setWalkSpeed(1);
};
