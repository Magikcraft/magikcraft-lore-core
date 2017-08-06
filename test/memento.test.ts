declare const require: any;

import * as _memento from '../src/lore/memento';
import * as mio from 'magikcraft.io';

const mock = require('magikcraft.io').mock;

const memento = _memento.code(mock.canon);
describe('memento', () => {
    test('has a setItem method', () => {
        expect(memento.setItem).toBeTruthy();
    });
    test('has a getItem method', () => {
        expect(memento.getItem).toBeTruthy();
    });
});

