
# 투손

`magikcraft.io.toJSON`

전송 또는 저장을 위해 Java 유형을 JSON으로 직렬화합니다.

현재 지원되는 유일한 Java 유형은`BukkitLocation '입니다. 이를 사용하여 이벤트 버스를 통해 BukkitLocation을 게시하고 이벤트 버스에서 BukkitLocation을 사용할 수 있습니다.

## 예

### Eventbus를 통해 위치 게시

이 주문은 이벤트 버스를 통해 현재 위치를 게시합니다.

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

### 플레이어 주문으로 순간 이동

다음은 플레이어가 마지막으로 게시 한 위치로 텔레포트 할 수있는 이벤트 버스 게시 위치를 사용하는 텔레포트 주문입니다.

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