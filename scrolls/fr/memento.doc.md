
# Mémento

`magikcraft.io.memento`

Accédez à votre mémoire, pour stocker ou rappeler quelque chose.

## `setItem`

Pour mémoriser quelque chose, utilisez `memento.setItem`:

### Exemple

```javascript
const magik = magikcraft.io;

function remember_here() {
    const here = magik.hic();
    magik.memento.setItem(here);
}
```

`memento.setItem` peut aussi prendre une clé, donc vous pouvez vous souvenir de plus d'une chose:

```javascript
const magik = magikcraft.io;

function remember_here(name){
    const here = magik.hic();
    magik.memento.setItem(name, here);
}
```

## `getItem`

Pour rappeler quelque chose, utilisez `memento.getItem`:

### Exemple

```javascript
const magik = magikcraft.io;

function recall(){
    const memory = magik.memento.getItem();
    magik.dixit(memory);
}
```

`memento.getItem` prend également une clé, de sorte que vous pouvez rappeler plus d'une mémoire:

```javascript
const magik = magikcraft.io;

function recall(name){
    const memory = magik.memento.getItem(name);
    magik.dixit(memory);
}
```