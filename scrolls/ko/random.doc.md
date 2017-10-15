
# 랜덤

`magikcraft.io.random`

난수를 반환합니다.

## 예

```javascript
magik = magikcraft.io;
function rollDie(sides){
    const dieroll = magik.random(1, sides);
    magik.dixit(`You rolled 1d${sides} and got: ${dieroll}`);
    return dieroll;
}
```