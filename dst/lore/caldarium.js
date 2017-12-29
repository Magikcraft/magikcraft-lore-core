"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.name = 'caldarium';
exports.cost = 0;
exports.code = function (canon) { return function (ingredients) {
    var gettext = canon.gettext;
    var items = {
        "LIZARDEYES": 1,
        "UNICORNTEARS": 2,
        "DRAGONSCALES": 4,
        "SALAMANDERTOES": 8,
        "GOBLINSNOT": 16,
        "FIREFLIES": 32,
        "EAGLEFEATHER": 64
    };
    var spells = {
        incendium: "magik.incendium",
        iacta: "magik.iacta",
        radiatum: "magik.radiatum",
        noxvida: "magik.noxvida",
        infierno: "magik.infierno",
        volare: "magik.volare",
        celeritate: "magik.celeritate"
    };
    function mix(ingredients) {
        if (typeof ingredients == "string" || typeof ingredients == "number" || !ingredients)
            return canon.msg(gettext("You need to pass in an array of ingredients"));
        if (ingredients.length < 3) {
            canon.msg(gettext("Not enough ingredients!"));
            return false;
        }
        if (ingredients.length > 3) {
            canon.msg(gettext("Too many ingredients"));
            return false;
        }
        var normalise = function (str) { return str.split(" ").join("").toUpperCase(); };
        var INGREDIENTS = [];
        INGREDIENTS.push(normalise(ingredients[0]));
        INGREDIENTS.push(normalise(ingredients[1]));
        INGREDIENTS.push(normalise(ingredients[2]));
        var cauldron = items[INGREDIENTS[0]] | items[INGREDIENTS[1]] | items[INGREDIENTS[2]];
        var results = {};
        var incendium = items.LIZARDEYES | items.UNICORNTEARS | items.DRAGONSCALES;
        var radiatum = items.LIZARDEYES | items.UNICORNTEARS | items.SALAMANDERTOES;
        var iacta = items.LIZARDEYES | items.UNICORNTEARS | items.GOBLINSNOT;
        var noxvida = items.UNICORNTEARS | items.FIREFLIES | items.SALAMANDERTOES;
        var infierno = items.FIREFLIES | items.GOBLINSNOT | items.SALAMANDERTOES;
        var volare = items.EAGLEFEATHER | items.GOBLINSNOT | items.DRAGONSCALES;
        var celeritate = items.GOBLINSNOT | items.FIREFLIES | items.EAGLEFEATHER;
        results[incendium] = spells.incendium;
        results[radiatum] = spells.radiatum;
        results[iacta] = spells.iacta;
        results[noxvida] = spells.noxvida;
        results[infierno] = spells.infierno;
        results[volare] = spells.volare;
        results[celeritate] = spells.celeritate;
        if (isNaN(cauldron) || typeof cauldron === "undefined" || typeof results[cauldron] === "undefined") {
            canon.msg(gettext("This mixture made a nice soup, but didn't produce any magik!"));
            return false;
        }
        return results[cauldron];
    }
    var result = mix(ingredients);
    if (result) {
        canon.msg(gettext("You produced a new magik word: " + result));
    }
}; };
