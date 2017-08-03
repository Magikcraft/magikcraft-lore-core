import { ICanon } from '../magikcraft-types/canon';

export const name = 'doNTimes';
export const cost = 0;
export const code = (canon: ICanon) => (action: (...args: any[]) => any, nTimes = 1, delay = 100, callback?: () => any) => {

    const maxN = 10;
    const minDelay = 100;

    nTimes = Math.min(nTimes, maxN);
    delay = Math.max(delay, minDelay);

    function iterate(action: (i: number) => any, i: number) {
        if (i > 0) {
            action(i);
            canon.magik.setTimeout(function () {
                iterate(action, i - 1);
            }, delay);
        } else {
            if (callback) return callback(); else return;
        }
    }
    iterate(action, nTimes);
}
