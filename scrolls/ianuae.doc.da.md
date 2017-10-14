
# Ianuae

`magikcraft.io.ianuae`

Teleport til et sted.

Argumenter: placering (`BukkitLocation`)  nReturns: nothing

## Eksempel

For at bruge dette eksempel skal du huske en placering ved hjælp af `magik.memento`. Så kan du huske det og teleportere til det.

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

I denne version af stavningen, hvis du ikke har husket en placering allerede, vil teleportstavningen huske den aktuelle placering.

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

I denne version af stavningen kan du teleportere til et sted, der blev husket med et navn.

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