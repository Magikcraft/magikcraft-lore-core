
# メンメント

`magikcraft.io.memento`

あなたの記憶にアクセスして、何かを保管したり思い出したりしてください。

## `setItem`

何かを覚えておくには、 `memento.setItem`を使います：

### 例

```javascript
const magik = magikcraft.io;

function remember_here() {
    const here = magik.hic();
    magik.memento.setItem(here);
}
```

`memento.setItem`もキーを取ることができるので、複数のことを思い出すことができます：

```javascript
const magik = magikcraft.io;

function remember_here(name){
    const here = magik.hic();
    magik.memento.setItem(name, here);
}
```

## `getItem`

何かを呼び出すには、 `memento.getItem`を使います：

### 例

```javascript
const magik = magikcraft.io;

function recall(){
    const memory = magik.memento.getItem();
    magik.dixit(memory);
}
```

`memento.getItem`もキーを取るので、複数のメモリを呼び出すことができます：

```javascript
const magik = magikcraft.io;

function recall(name){
    const memory = magik.memento.getItem(name);
    magik.dixit(memory);
}
```