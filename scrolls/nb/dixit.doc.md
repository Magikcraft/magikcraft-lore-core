
# Dixit

`magikcraft.io.dixit`

Skriv ut en melding til spillerens konsoll.

## Eksempel

```javascript
const magik = magikcraft.io;

function hello(playername) {
    const myName = magik.getSender().getName();
    magik.dixit(`Hello from ${myName}`, playername);
    magik.dixit(`You just said 'Hello' to ${playername}`);
}
```