
## Exmemento

`magikcraft.io.exmemento`

Hent en hukommelse.

## Eksempel

```javascript
const magik = magikcraft.io;

function recall(key){
    const memory = magik.exmemento(key);
    magik.dixit('Recalled:');
    magik.dixit(memory);
}
```