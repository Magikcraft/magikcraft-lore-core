
## doNTimes

`magikcraft.io.doNTimes`

기능을 여러 번 반복하십시오.

## 예제들

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