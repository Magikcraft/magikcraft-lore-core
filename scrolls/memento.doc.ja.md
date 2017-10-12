# Memento

`magikcraft.io.memento`

あなたの記憶にアクセスする. 何かを保管したり何かを思い出したりする

## `setItem`

何かを覚えておくには、この: `memento.setItem`:

### 実例

```javascript
const magik = magikcraft.io;

function remember() {
    const here = magik.hic();
    magik.memento.setItem(here);
}
```
`memento.setItem` これはまた、キーを取ることができます. これで複数のことを思い出すことができます。

```javascript
const magik = magikcraft.io;

function remember(name){
    const here = magik.hic();
    magik.memento.setItem(name, here);
}
```

## `getItem`

何かを思い出すには、これを使用してください `memento.getItem`:

### 実例

```javascript
const magik = magikcraft.io;

function recall(){
    const memory = magik.memento.getItem();
    magik.dixit(memory);
}
```

`memento.getItem` これはまた、キー. キーを使うと、複数のことを思い出すことができます。

```javascript
const magik = magikcraft.io;

function recall(name){
    const memory = magik.memento.getItem(name);
    magik.dixit(memory);
}
```

