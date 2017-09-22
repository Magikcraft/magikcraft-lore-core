# Ianuae

`magikcraft.io.ianuae`

Teleport to a location.

Arguments: location (`BukkitLocation`)
Returns: nothing

## Example

```javascript
const magik = magikcraft.io;

function teleport() {
    const there = magik.exmemento();
    if (there) {
        magik.ianuae(there);
    } else {
        const here = magik.hic();
        magik.memento(here);
    }
}
```