## Exmemento

`magikcraft.io.exmemento`

メモリを取得します。

## 実例

```javascript
const magik = magikcraft.io;

function recall(key){
    const memory = magik.exmemento(key);
    magik.dixit('Recalled:');
    magik.dixit(memory);
}
```