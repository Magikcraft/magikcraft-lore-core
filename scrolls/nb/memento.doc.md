
# Memento

`magikcraft.io.memento`

Få tilgang til minnet, for å lagre eller tilbakekalle noe.

## `setItem`

For å huske noe, bruk `memento.setItem`:

### Eksempel

```javascript
const magik = magikcraft.io;

function remember() {
    const here = magik.hic();
    magik.memento.setItem(here);
}
```

`memento.setItem` kan også ta en nøkkel, slik at du kan huske mer enn én ting:

```javascript
const magik = magikcraft.io;

function remember(name){
    const here = magik.hic();
    magik.memento.setItem(name, here);
}
```

## `getItem`

For å huske noe, bruk `memento.getItem`:

### Eksempel

```javascript
const magik = magikcraft.io;

function recall(){
    const memory = magik.memento.getItem();
    magik.dixit(memory);
}
```

`memento.getItem` tar også en nøkkel, slik at du kan huske mer enn ett minne:

```javascript
const magik = magikcraft.io;

function recall(name){
    const memory = magik.memento.getItem(name);
    magik.dixit(memory);
}
```