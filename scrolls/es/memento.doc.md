
# Recuerdo

`magikcraft.io.memento`

Acceda a su memoria, para almacenar o recuperar algo.

## `setItem`

Para recordar algo, use `memento.setItem`:

### Ejemplo

```javascript
const magik = magikcraft.io;

function remember_here() {
    const here = magik.hic();
    magik.memento.setItem(here);
}
```

`memento.setItem` también puede tomar una clave, por lo que puede recordar más de una cosa:

```javascript
const magik = magikcraft.io;

function remember_here(name){
    const here = magik.hic();
    magik.memento.setItem(name, here);
}
```

## `getItem`

Para recordar algo, use `memento.getItem`:

### Ejemplo

```javascript
const magik = magikcraft.io;

function recall(){
    const memory = magik.memento.getItem();
    magik.dixit(memory);
}
```

`memento.getItem` también toma una clave, por lo que puede recuperar más de una memoria:

```javascript
const magik = magikcraft.io;

function recall(name){
    const memory = magik.memento.getItem(name);
    magik.dixit(memory);
}
```