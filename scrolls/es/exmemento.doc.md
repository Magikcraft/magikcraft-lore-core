
## Eximio

`magikcraft.io.exmemento`

Recuperar una memoria

## Ejemplo

```javascript
const magik = magikcraft.io;

function recall(key){
    const memory = magik.exmemento(key);
    magik.dixit('Recalled:');
    magik.dixit(memory);
}
```