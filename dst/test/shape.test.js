"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var index_1 = require("../src/index");
describe('Test shape of spells', function () {
    test('Spells', function () {
        index_1.loreToLoad.forEach(function (lore, index) {
            expect(lore.code).toBeTruthy();
            expect(lore.cost).toBeGreaterThanOrEqual(0);
            expect(typeof lore.name).toBe('string');
        });
    });
});
