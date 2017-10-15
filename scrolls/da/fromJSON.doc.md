
# fromJSON

`magikcraft.io.fromJSON`

Serialiser Java-typer fra JSON til transport eller opbevaring.

I øjeblikket er den eneste understøttede Java-type en `BukkitLocation`. Du kan bruge dette til at udgive en BukkitLocation over eventbus og at forbruge en BukkitLocation fra eventbus.

## Eksempel

### Udgiv din placering via Eventbus

Denne stave offentliggør din nuværende placering over eventbus.

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

### Teleport til spilleren stavning

Her er en teleport-stavning, der bruger eventbus-publicerede steder til at teleportere til den sidst offentliggjorte placering for en spiller:

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