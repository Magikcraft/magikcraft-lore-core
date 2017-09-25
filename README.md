# The Core Lore for the Magikcraft API

## durablePlayerMap

Added: Wednesday 6 September, 2017

`magik.memento` and `magik.exmemento` use the `durablePlayerMap` instead of a JavaScript object.

## toJSON and fromJSON

Added: Thursday 17 August, 2017

The helper methods `magik.toJSON` and `magik.fromJSON` serialise Java types to/from JSON for transport or storage.

At the moment the only supported Java type is a `BukkitLocation`. You can use this to publish a BukkitLocation over the eventbus, and to consume a BukkitLocation from the eventbus.

Here is an example.

### Publish your location via the Eventbus

This spell publishes your current location over the eventbus.

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

### Teleport to Player spell

Here is a teleport spell that uses the eventbus published locations to teleport to the last published location for a player:

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
-- test: trigger webhook! 3
