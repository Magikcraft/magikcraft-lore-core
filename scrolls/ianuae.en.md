# Ianuae

`magikcraft.io.ianuae`

Teleport to a location.

Arguments: location (`BukkitLocation`)
Returns: nothing

## Example

To use this example you must remember a location using `magik.memento`. Then you can recall it and teleport to it.

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

In this version of the spell, if you have not remembered a location already, then the teleport spell will remember the current location.

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

In this version of the spell, you can teleport to a location that was remembered with a name.

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