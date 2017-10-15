
## Exmemento

`magikcraft.io.exmemento`

Извлеките память.

## пример

```javascript
const magik = magikcraft.io;

function recall(key){
    const memory = magik.exmemento(key);
    magik.dixit('Recalled:');
    magik.dixit(memory);
}
```