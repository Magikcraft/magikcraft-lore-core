# Dixit

`magikcraft.io.dixit`

Print a message to the player's console.

Arguments: message (`string`), playername?(`string`)
Returns: nothing

## Example

```javascript
const magik = magikcraft.io;

function hello(playername) {
    magik.dixit(`Hello from ${magik.ego().getName()}`, playername);
    magik.dixit(`You just said 'Hello' to ${playername}`);
}
```