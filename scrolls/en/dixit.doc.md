# Dixit

`magikcraft.io.dixit`

Print a message to the player's console.

## Example

```javascript
const magik = magikcraft.io;

function hello(playername) {
    const myName = magik.getSender().getName();
    magik.dixit(`Hello from ${myName}`, playername);
    magik.dixit(`You just said 'Hello' to ${playername}`);
}
```