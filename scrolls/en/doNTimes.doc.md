## doNTimes

`magikcraft.io.doNTimes`

Repeat a function multiple times.

## Examples

```javascript
const magik = magikcraft.io;

function main(msg) {
    magik.doNTimes(() => magik.dixit(msg), 3);
}
```

```javascript
const magik = magikcraft.io;

function main() {
    function firework() {
        const there = magik.aspecto();
        magik.stella(there);
    }
    magik.doNTimes(firework, 5);
}
```
