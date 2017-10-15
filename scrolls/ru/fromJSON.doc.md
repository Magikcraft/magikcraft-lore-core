
# fromJSON

`magikcraft.io.fromJSON`

Сериализуйте типы Java из JSON для транспорта или хранения.

На данный момент единственным поддерживаемым Java-типом является «BukkitLocation». Вы можете использовать это, чтобы опубликовать BukkitLocation через eventbus и использовать BukkitLocation из eventbus.

## пример

### Опубликуйте свое местоположение через Eventbus

Это заклинание публикует ваше текущее местоположение через eventbus.

```
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

### Телепорт в заклинание игрока

Вот заклинание телепорта, которое использует опубликованные местоположения eventbus для телепортации в последнее опубликованное местоположение для игрока:

```
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