
# Ianuae

`magikcraft.io.ianuae`

Телепортируйтесь к месту.

## пример

Чтобы использовать этот пример, вы должны помнить местоположение с помощью `magik.memento`. Тогда вы можете вспомнить его и телепортироваться к нему.

```javascript
const magik = magikcraft.io;

function teleport() {
    const there = magik.memento.getItem();
    if (there) {
        magik.ianuae(there);
    } else {
        const here = magik.hic();
        magik.memento(here);
    }
}
```

В этой версии заклинания, если вы еще не запомнили местоположение, тогда заклинание телепорта запомнит текущее местоположение.

```javascript
const magik = magikcraft.io;

function teleport() {
    const there = magik.memento.getItem();
    if (there) {
        magik.ianuae(there);
    } else {
        const here = magik.hic();
        magik.memento(here);
    }
}
```

В этой версии заклинания вы можете телепортироваться в место, которое было запомнено именем.

```javascript
const magik = magikcraft.io;

function teleport(name = "place.default") {
    const there = magik.memento.getItem(name);
    if (there) {
        magik.ianuae(there);
    } else {
        const here = magik.hic();
        magik.memento("place.default", here);
    }
}
```