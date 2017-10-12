# Hic

`magikcraft.io.hic`

あなたが現在いる場所を入手してください。

## 実例

```javascript
const magik = magikcraft.io;

function remember() {
    const here = magik.hic();
    magik.memento(here);
}
```