
# Dixit

`magikcraft.io.dixit`

플레이어의 콘솔에 메시지를 출력합니다.

## 예

```javascript
const magik = magikcraft.io;

function hello(playername) {
    const myName = magik.getSender().getName();
    magik.dixit(`Hello from ${myName}`, playername);
    magik.dixit(`You just said 'Hello' to ${playername}`);
}
```