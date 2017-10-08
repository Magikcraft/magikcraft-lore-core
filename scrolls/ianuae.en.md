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
