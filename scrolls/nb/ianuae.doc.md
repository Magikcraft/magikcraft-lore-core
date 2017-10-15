
# Ianuae

`magikcraft.io.ianuae`

Teleporter til et sted.

## Eksempel

For å bruke dette eksemplet må du huske en plassering ved hjelp av `magik.memento`. Da kan du huske det og teleportere til det.

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

I denne versjonen av stavningen, hvis du ikke har husket et sted allerede, vil teleportstaven huske gjeldende plassering.

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

I denne versjonen av stavningen kan du teleportere til et sted som ble husket med et navn.

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