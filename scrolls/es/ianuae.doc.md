
# Ianuae

`magikcraft.io.ianuae`

Teletransporte a una ubicación.

## Ejemplo

Para usar este ejemplo, debe recordar una ubicación usando `magik.memento`. Entonces puedes recuperarla y teletransportarte a ella.

```javascript
const magik = magikcraft.io;

function teleport() {
    const there = magik.memento.getItem();
    if (there) {
        magik.ianuae(there);
    } else {
        const here = magik.hic();
        magik.memento(here);
    }
}
```

En esta versión del hechizo, si no recuerdas una ubicación ya, el hechizo de teletransporte recordará la ubicación actual.

```javascript
const magik = magikcraft.io;

function teleport() {
    const there = magik.memento.getItem();
    if (there) {
        magik.ianuae(there);
    } else {
        const here = magik.hic();
        magik.memento(here);
    }
}
```

En esta versión del hechizo, puedes teletransportarte a una ubicación que se recordó con un nombre.

```javascript
const magik = magikcraft.io;

function teleport(name = "place.default") {
    const there = magik.memento.getItem(name);
    if (there) {
        magik.ianuae(there);
    } else {
        const here = magik.hic();
        magik.memento("place.default", here);
    }
}
```