
## 예언

`magikcraft.io.exmemento`

메모리를 검색하십시오.

## 예

```javascript
const magik = magikcraft.io;

function recall(key){
    const memory = magik.exmemento(key);
    magik.dixit('Recalled:');
    magik.dixit(memory);
}
```