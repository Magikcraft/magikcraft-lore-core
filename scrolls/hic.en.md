# Hic

`magikcraft.io.hic`

Return the location where you are now.

Arguments: none
Returns: `BukkitLocation`

## Examples

```javascript
const magik = magikcraft.io;

function remember() {
    const here = magik.hic();
    magik.memento(here);
}
```