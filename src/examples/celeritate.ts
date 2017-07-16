import { ICanon } from '../magikcraft-types/canon';

/**
* EXAMPLE ONLY - DO NOT INCLUDE IN INDEX
*/
export const name = 'celeritate';
export const cost = 1;
export const code = (canon: ICanon) => () => {
    canon.magik.msg(canon.MSG.CELERITATE);
    canon.sender.setWalkSpeed(1);
};
