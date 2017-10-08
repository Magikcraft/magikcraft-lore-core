# Memento

`magikcraft.io.memento`

Access your memory, to store or recall something.

## `setItem`

To remember something, use `setItem`:

### Example

```javascript
const magik = magikcraft.io;

function remember() {
    const here = magik.hic();
    magik.memento.setItem(here);
}
```
`setItem` can also take a key, so you can remember more than one thing:

```javascript
const magik = magikcraft.io;

function remember(name){
    const here = magik.hic();
    magik.memento.setItem(name, here);
}
```

## `getItem`

To recall something, use `getItem`:

### Example

```javascript
const magik = magikcraft.io;

function recall(){
    const memory = magik.memento.getItem();
    magik.dixit(memory);
}
```

`getItem` also takes a key, so you can recall more than one memory:

```javascript
const magik = magikcraft.io;

function recall(name){
    const memory = magik.memento.getItem(name);
    magik.dixit(memory);
}
```

