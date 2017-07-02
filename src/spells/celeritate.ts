import { ICanon } from '../magikcraft-types/canon';

export const celeritate = (canon: ICanon) => () => {
    canon.magik.msg(canon.MSG.CELERITATE);
    canon.sender.setWalkSpeed(1);
};
