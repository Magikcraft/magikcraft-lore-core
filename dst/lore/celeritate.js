"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.name = 'celeritate';
exports.cost = 0;
exports.code = function (canon) { return function () {
    var gettext = canon.gettext;
    canon.msg(gettext('Celeritate! You now have super speed!'));
    canon.sender.setWalkSpeed(1);
}; };
