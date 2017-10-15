
# Ianuae

`magikcraft.io.ianuae`

Téléporter à un endroit.

## Exemple

Pour utiliser cet exemple, vous devez vous souvenir d'un emplacement utilisant `magik.memento`. Ensuite, vous pouvez le rappeler et vous y téléporter.

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

Dans cette version du sortilège, si vous n'avez pas encore mémorisé un emplacement, le sort de téléportation se souviendra de l'emplacement actuel.

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

Dans cette version du sortilège, vous pouvez vous téléporter à un endroit qui a été mémorisé avec un nom.

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