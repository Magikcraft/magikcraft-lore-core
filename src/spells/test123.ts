import { ICanon } from '../magikcraft-types/canon';

export const name = 'test123';
export const cost = 0;
export const code = (canon: ICanon) => () => {
	canon.magik.dixit('test123');
};
