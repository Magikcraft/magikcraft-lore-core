
# Tilfeldig

`magikcraft.io.random`

Returner et tilfeldig nummer.

## Eksempel

```javascript
magik = magikcraft.io;
function rollDie(sides){
    const dieroll = magik.random(1, sides);
    magik.dixit(`You rolled 1d${sides} and got: ${dieroll}`);
    return dieroll;
}
```