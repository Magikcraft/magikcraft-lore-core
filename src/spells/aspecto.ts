import { ICanon } from '../magikcraft-types/canon';

export const aspecto = (canon: ICanon) => () => {
    const location = canon.sender.getTargetBlock(null, 200).getRelative(0, 1, 0).getLocation();
    return location;
};