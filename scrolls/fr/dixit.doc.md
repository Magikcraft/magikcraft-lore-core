
# Dixit

`magikcraft.io.dixit`

Imprimez un message sur la console du lecteur.

## Exemple

```javascript
const magik = magikcraft.io;

function hello(playername) {
    const myName = magik.getSender().getName();
    magik.dixit(`Hello from ${myName}`, playername);
    magik.dixit(`You just said 'Hello' to ${playername}`);
}
```