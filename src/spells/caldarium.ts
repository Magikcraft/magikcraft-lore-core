import { ICanon } from '../magikcraft-types/canon';

export const name = 'caldarium';
export const cost = 0;
export const spell = (canon: ICanon) => (ingredients: string[]) => {

    const MSG = canon.MSG;
    const items: any = {
        "LIZARDEYES": 1,
        "UNICORNTEARS": 2,
        "DRAGONSCALES": 4,
        "SALAMANDERTOES": 8,
        "GOBLINSNOT": 16,
        "FIREFLIES": 32,
        "EAGLEFEATHER": 64
    };

    const spells = {
        incendium: "magik.incendium",
        iacta: "magik.iacta",
        radiatum: "magik.radiatum",
        noxvida: "magik.noxvida",
        infierno: "magik.infierno",
        volare: "magik.volare",
        celeritate: "magik.celeritate"
    };

    function mix(ingredients: string[], MSG: any) {
        if (typeof ingredients == "string") return MSG.CALDARIUM_NEEDARRAY;
        if (!ingredients || ingredients.toString() !== "[object Array]" || ingredients.length < 3) {
            return MSG.CALDARIUM_INSUFFICIENT;
        }

        if (ingredients.length > 3) {
            return MSG.CALDARIUM_TOOMANYINGREDIENTS;
        }

        var INGREDIENTS = [];
        INGREDIENTS.push(ingredients[0].toUpperCase());
        INGREDIENTS.push(ingredients[1].toUpperCase());
        INGREDIENTS.push(ingredients[2].toUpperCase());

        const cauldron = items[INGREDIENTS[0]] | items[INGREDIENTS[1]] | items[INGREDIENTS[2]];

        const results = {} as any;
        const incendium = items.LIZARDEYES | items.UNICORNTEARS | items.DRAGONSCALES;
        const radiatum = items.LIZARDEYES | items.UNICORNTEARS | items.SALAMANDERTOES;
        const iacta = items.LIZARDEYES | items.UNICORNTEARS | items.GOBLINSNOT;
        const noxvida = items.UNICORNTEARS | items.FIREFLIES | items.SALAMANDERTOES;
        const infierno = items.FIREFLIES | items.GOBLINSNOT | items.SALAMANDERTOES;
        const volare = items.EAGLEFEATHER | items.GOBLINSNOT | items.DRAGONSCALES;
        const celeritate = items.GOBLINSNOT | items.FIREFLIES | items.EAGLEFEATHER;
        results[incendium] = spells.incendium;
        results[radiatum] = spells.radiatum;
        results[iacta] = spells.iacta;
        results[noxvida] = spells.noxvida;
        results[infierno] = spells.infierno;
        results[volare] = spells.volare;
        results[celeritate] = spells.celeritate;

        if (isNaN(cauldron) || typeof cauldron === "undefined" || typeof results[cauldron] === "undefined") return MSG.CALDARIUM_FAIL;

        return results[cauldron];
    }

    const result = mix(ingredients, MSG);

    if (result == MSG.CALDARIUM_FAIL || result == MSG.CALDARIUM_INSUFFICIENT || result == MSG.CALDARIUM_TOOMANYINGREDIENTS) canon.magik.msg(result);
    else
        canon.magik.msg([MSG.CALDARIUM_SPECIFIC, result]);
};

