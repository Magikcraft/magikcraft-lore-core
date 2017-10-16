
## doNTimes

`magikcraft.io.doNTimes`

Repita una función varias veces.

## Ejemplos

```javascript
const magik = magikcraft.io;

function echo(msg) {
    magik.doNTimes(() => magik.dixit(msg), 3);
}
```
```javascript
const magik = magikcraft.io;

function fireworks() {
    function firework() {
        const there = magik.aspecto();
        magik.stella(there);
    }
    magik.doNTimes(firework, 5);
}
```