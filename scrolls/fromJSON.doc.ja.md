# fromJSON

`magikcraft.io.fromJSON`

トランスポートまたはストレージ用にJSONからJavaタイプをシリアル化します。

現時点でサポートされている唯一のJava型は `BukkitLocation`です。 これを使用して、イベントバス経由でBukkitLocationをパブリッシュし、イベントバスからBukkitLocationを消費することができます。

## 実例

### `Eventbus`であなたの場所を公開する

この呪文は、あなたの現在の場所を `eventbus`に公開します。

```
const magik = magikcraft.io;
const locationTopic = 'locations';

// イベントバスを介して私の場所を公開する
function publishLocation() {
    const here = magik.hic(); // プレーヤーの現在地を取得する
    const hereJSON = magik.toJSON(here); // それをJSONオブジェクトに変換する
    // magik.dixit(JSON.stringify(hereJSON)); // あなたはそれを印刷することができます

    // イベントバス上の「場所」トピックにプレーヤーの場所を公開する
    eventbus.publish(locationTopic, {name: global.PlayerName, location: hereJSON});
}
```

### プレイヤーの呪文にテレポートする

ここでは、プレイヤーの最後に公開された場所に移動するために、イベントバスに公開された場所を使用するテレポートの呪文があります：

```
const magik = magikcraft.io;
const locationTopic = 'locations';

function tp2p(name = '@@INIT'){
    // global.locationsが存在しない場合、まだ登録されていません
    if (!global.locations) {
        global.locations = {};
        eventbus.subscribe(locationTopic, event => {
            const who = event.data.name;
            const where = event.data.location;
            global.locations[who] = where;
        });
    }
    if (name === '@@INIT') {
        return;
    }
    if (!global.locations[name]) {
        magik.dixit(`${name} の公開場所が見つかりません!`);
        return;
    }

    const whereJSON = global.locations[name];

    // JSONをBukkitLocationに変換する
    const where = magik.fromJSON(whereJSON);
    magik.ianuae(where);
}
```