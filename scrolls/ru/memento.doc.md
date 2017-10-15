
# сувенир

`magikcraft.io.memento`

Получите доступ к своей памяти, чтобы сохранить или вспомнить что-то.

## `setItem`

Чтобы запомнить что-то, используйте `memento.setItem`:

### пример

```javascript
const magik = magikcraft.io;

function remember() {
    const here = magik.hic();
    magik.memento.setItem(here);
}
```

`memento.setItem` также может взять ключ, поэтому вы можете вспомнить несколько вещей:

```javascript
const magik = magikcraft.io;

function remember(name){
    const here = magik.hic();
    magik.memento.setItem(name, here);
}
```

## `getItem`

Чтобы что-то вспомнить, используйте `memento.getItem`:

### пример

```javascript
const magik = magikcraft.io;

function recall(){
    const memory = magik.memento.getItem();
    magik.dixit(memory);
}
```

`memento.getItem` также берет ключ, поэтому вы можете вспомнить несколько памяти:

```javascript
const magik = magikcraft.io;

function recall(name){
    const memory = magik.memento.getItem(name);
    magik.dixit(memory);
}
```