declare const require: any;
import * as _memento from '../src/lore/memento';

const mock = require('magikcraft.io').mock;

const memento = _memento.code(mock.canon);
describe('memento', () => {
    test('has a setItem method', () => {
        expect(memento.setItem).toBeTruthy();
    });
    test('has a getItem method', () => {
        expect(memento.getItem).toBeTruthy();
    });
    test('Can set and get', () => {
        memento.setItem('test', 1);
        const value = memento.getItem('test');
        expect(value).toBe(1);
    });
});

