
# Memento

`magikcraft.io.memento`

Få adgang til din hukommelse, for at gemme eller genkalde noget.

## `setItem`

For at huske noget, brug `memento.setItem`:

### Eksempel

```javascript
const magik = magikcraft.io;

function remember() {
    const here = magik.hic();
    magik.memento.setItem(here);
}
```

`memento.setItem` kan også tage en nøgle, så du kan huske mere end én ting:

```javascript
const magik = magikcraft.io;

function remember(name){
    const here = magik.hic();
    magik.memento.setItem(name, here);
}
```

## `getItem`

For at huske noget, brug `memento.getItem`:

### Eksempel

```javascript
const magik = magikcraft.io;

function recall(){
    const memory = magik.memento.getItem();
    magik.dixit(memory);
}
```

`memento.getItem` tager også en nøgle, så du kan huske mere end en hukommelse:

```javascript
const magik = magikcraft.io;

function recall(name){
    const memory = magik.memento.getItem(name);
    magik.dixit(memory);
}
```