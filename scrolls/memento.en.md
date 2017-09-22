# Memento

`magikcraft.io.memento`

Remember something.

Arguments: key (`string`), value (`any`);
Arguments: value (`any`);
Returns: nothing

## Example

```javascript
const magik = magikcraft.io;

function remember(name) {
    const here = hic();
    magik.memento(name, here);
}
```