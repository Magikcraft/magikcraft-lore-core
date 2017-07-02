import { ICanon } from '../magikcraft-types/canon';

export const album = (canon: ICanon) => () => {
    return MagikCraftAPI.getSpellsList(canon.sender, canon.sender.getName());
};