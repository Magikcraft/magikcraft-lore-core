
## doNTimes

`magikcraft.io.doNTimes`

Répétez une fonction plusieurs fois.

## Exemples

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