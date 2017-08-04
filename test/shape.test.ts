import { loreToLoad } from '../src/index';

describe('Test shape of spells', () => {
    test('Spells', () => {
        loreToLoad.forEach((lore, index) => {
            expect(lore.code).toBeTruthy();
            expect(lore.cost).toBeGreaterThanOrEqual(0);
            expect(typeof lore.name).toBe('string');
        });
    })
})