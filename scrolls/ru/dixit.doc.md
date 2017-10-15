
# Диксит

`magikcraft.io.dixit`

Распечатайте сообщение на консоли проигрывателя.

## пример

```javascript
const magik = magikcraft.io;

function hello(playername) {
    const myName = magik.getSender().getName();
    magik.dixit(`Hello from ${myName}`, playername);
    magik.dixit(`You just said 'Hello' to ${playername}`);
}
```