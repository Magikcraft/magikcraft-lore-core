import { ICanon } from '../magikcraft-types/canon';

export const name = 'aspecto';
export const cost = 0;
export const code = (canon: ICanon) => () => {
    const location = canon.sender.getTargetBlock(null, 200).getRelative(0, 1, 0).getLocation();
    return location;
};