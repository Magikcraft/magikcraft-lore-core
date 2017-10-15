
## Exmemento

`magikcraft.io.exmemento`

Récupérer une mémoire.

## Exemple

```javascript
const magik = magikcraft.io;

function recall(key){
    const memory = magik.exmemento(key);
    magik.dixit('Recalled:');
    magik.dixit(memory);
}
```