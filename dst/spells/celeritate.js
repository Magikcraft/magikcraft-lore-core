"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.name = 'celeritate';
exports.cost = 1;
exports.spell = function (canon) { return function () {
    canon.magik.msg(canon.MSG.CELERITATE);
    canon.sender.setWalkSpeed(1);
}; };
