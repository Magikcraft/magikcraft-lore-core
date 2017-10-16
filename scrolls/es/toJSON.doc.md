
# toJSON

`magikcraft.io.toJSON`

Serializar los tipos de Java a JSON para su transporte o almacenamiento.

Por el momento, el único tipo de Java compatible es un `BukkitLocation`. Puede usar esto para publicar una BukkitLocation sobre el eventbus, y para consumir una BukkitLocation desde el eventbus.

## Ejemplo

### Publica tu ubicación a través del Eventbus

Este hechizo publica tu ubicación actual sobre el eventbus.

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

### Teletransporte al hechizo de jugador

Aquí hay un hechizo de teletransporte que usa las ubicaciones publicadas por eventbus para teletransportarse a la última ubicación publicada para un jugador:

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