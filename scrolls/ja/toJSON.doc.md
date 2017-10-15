
# toSSON

`magikcraft.io.toJSON`

トランスポートまたはストレージのためにJavaタイプをJSONにシリアル化します。

現時点でサポートされている唯一のJava型は `BukkitLocation`です。これを使用して、イベントバス経由でBukkitLocationをパブリッシュし、イベントバスからBukkitLocationを消費することができます。

## 例

### イベントバス経由であなたの場所を公開する

この呪文は、あなたの現在の位置をイベントバスに公開します。

```javascript
const magik = magikcraft.io;
const locationTopic = 'locations';

// Publish my location over the eventbus
function publishLocation() {
    const here = magik.hic(); // get player current location
    const hereJSON = magik.toJSON(here); // turn it into a JSON object
    // magik.dixit(JSON.stringify(hereJSON)); // you can print it out

    // Publish player location to 'locations' topic on the eventbus
    eventbus.publish(locationTopic, {name: global.PlayerName, location: hereJSON});
}
```

### プレイヤーの呪文にテレポートする

ここでは、プレイヤーの最後に公開された場所に移動するために、イベントバスに公開された場所を使用するテレポートの呪文があります：

```javascript
const magik = magikcraft.io;
const locationTopic = 'locations';

function tp2p(name = '@@INIT'){
    // If global.locations doesn't exist, we are not subscribed yet
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
        magik.dixit(`No published location found for ${name}!`);
        return;
    }

    const whereJSON = global.locations[name];

    // Turn the JSON into a BukkitLocation
    const where = magik.fromJSON(whereJSON);
    magik.ianuae(where);
}
```