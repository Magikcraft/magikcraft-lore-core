
# 이안에

`magikcraft.io.ianuae`

위치로 텔레포트하십시오.

## 예

이 예제를 사용하려면`magik.memento`를 사용하여 위치를 기억해야합니다. 그럼 당신은 그것을 기억하고 그것에 텔레포트 할 수 있습니다.

```javascript
const magik = magikcraft.io;

function teleport() {
    const there = magik.memento.getItem();
    if (there) {
        magik.ianuae(there);
    } else {
        const here = magik.hic();
        magik.memento(here);
    }
}
```

이 버전의 주문에서, 당신이 이미 위치를 기억하지 못했다면, 텔레포트 마법은 현재 위치를 기억할 것입니다.

```javascript
const magik = magikcraft.io;

function teleport() {
    const there = magik.memento.getItem();
    if (there) {
        magik.ianuae(there);
    } else {
        const here = magik.hic();
        magik.memento(here);
    }
}
```

이 주문 버전에서는 이름이 기억 된 위치로 텔레포트 할 수 있습니다.

```javascript
const magik = magikcraft.io;

function teleport(name = "place.default") {
    const there = magik.memento.getItem(name);
    if (there) {
        magik.ianuae(there);
    } else {
        const here = magik.hic();
        magik.memento("place.default", here);
    }
}
```