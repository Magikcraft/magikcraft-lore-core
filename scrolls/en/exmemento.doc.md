## Exmemento

`magikcraft.io.exmemento`

Retrieve a memory.

## Example

```javascript
const magik = magikcraft.io;

function recall(key){
    const memory = magik.exmemento(key);
    magik.dixit('Recalled:');
    magik.dixit(memory);
}
```