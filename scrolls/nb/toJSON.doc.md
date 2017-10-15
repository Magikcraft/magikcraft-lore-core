
# toJSON

`magikcraft.io.toJSON`

Serialiser Java-typer til JSON for transport eller lagring.

For øyeblikket er den eneste støttede Java-typen en `BukkitLocation`. Du kan bruke dette til å publisere en BukkitLocation over eventbus, og å konsumere en BukkitLocation fra eventbus.

## Eksempel

### Publiser posisjonen din via Eventbus

Denne stavningen publiserer din nåværende posisjon over eventbussen.

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

### Teleport til spilleren stavning

Her er en teleportspell som bruker eventbus-publiserte steder for å teleportere til sist publiserte plassering for en spiller:

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