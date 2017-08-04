"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.name = 'doNTimes';
exports.cost = 0;
exports.code = function (canon) { return function (action, nTimes, delay, callback) {
    if (nTimes === void 0) { nTimes = 1; }
    if (delay === void 0) { delay = 100; }
    var maxN = 10;
    var minDelay = 100;
    nTimes = Math.min(nTimes, maxN);
    delay = Math.max(delay, minDelay);
    function iterate(action, i) {
        if (i > 0) {
            action(i);
            canon.magik.setTimeout(function () {
                iterate(action, i - 1);
            }, delay);
        }
        else {
            if (callback)
                return callback();
            else
                return;
        }
    }
    iterate(action, nTimes);
}; };
