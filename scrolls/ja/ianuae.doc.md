
# イアヌエ

`magikcraft.io.ianuae`

場所に移動する。

## 例

この例を使うには、 `magik.memento`を使って場所を覚えておく必要があります。その後、それを思い出してそれにテレポートします。

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

この呪文のバージョンでは、あなたがすでに場所を覚えていない場合、テレポートの呪文は現在の場所を覚えています。

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

この呪文のバージョンでは、名前で覚えていた場所に移動することができます。

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