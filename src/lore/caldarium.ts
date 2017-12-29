export const name = 'caldarium';
export const cost = 0;
export const code = (canon: ICanon) => (ingredients: string[]) => {

    const gettext = canon.gettext;

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

    function mix(ingredients: string[]) {
        if (typeof ingredients == "string" || typeof ingredients == "number" || !ingredients) return canon.msg(gettext("You need to pass in an array of ingredients"));
        if (ingredients.length < 3) {
            canon.msg(gettext("Not enough ingredients!"));
            return false;
        }

        if (ingredients.length > 3) {
            canon.msg(gettext("Too many ingredients"));
            return false;
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

        if (isNaN(cauldron) || typeof cauldron === "undefined" || typeof results[cauldron] === "undefined") {
            canon.msg(gettext("This mixture made a nice soup, but didn't produce any magik!"));
            return false;
        }

        return results[cauldron];
    }

    const result = mix(ingredients);

    if (result) {
        canon.msg(gettext(`You produced a new spell: ${result}`));
    }
};
