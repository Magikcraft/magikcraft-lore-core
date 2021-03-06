import * as aspecto from './lore/aspecto';
import * as auxilium from './lore/auxilium';
import * as caldarium from './lore/caldarium';
import * as celeritate from './lore/celeritate';
import * as declaro from './lore/declaro';
import * as dixit from './lore/dixit';
import * as doNTimes from './lore/doNTimes';
import * as exmemento from './lore/exmemento';
import * as exsultus from './lore/exsultus';
import * as fromJSON from './lore/fromJSON';
import * as hic from './lore/hic';
import * as iacta from './lore/iacta';
import * as ianuae from './lore/ianuae';
import * as incendium from './lore/incendium';
import * as infierno from './lore/infierno';
import * as memento from './lore/memento';
import * as noxvida from './lore/noxvida';
import * as radiatum from './lore/radiatum';
import * as random from './lore/random';
import * as satio from './lore/satio';
import * as shakti from './lore/shakti';
import * as stella from './lore/stella';
import * as toJSON from './lore/toJSON';
import * as viburnum from './lore/viburnum';
import * as volare from './lore/volare';

export const description = "The core Magikcraft API spells";

export const loreToLoad = [
    aspecto,
    auxilium,
 //   caldarium,
    celeritate,
    declaro,
    dixit,
    doNTimes,
    exmemento,
    exsultus,
    fromJSON,
    hic,
    iacta,
    ianuae,
    incendium,
    infierno,
    memento,
    noxvida,
    radiatum,
    random,
    satio,
    shakti,
    stella,
    toJSON,
    viburnum,
    volare
];

export const stringsToLoad = {
    "da": "translations/da/lore.json",
    "es": "translations/es/lore.json",
    "fr": "translations/fr/lore.json",
    "ja": "translations/ja/lore.json",
    "ko": "translations/ko/lore.json",
    "nb": "translations/nb/lore.json",
    "ru": "translations/ru/lore.json"
}