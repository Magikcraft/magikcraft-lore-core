
# toJSON

`magikcraft.io.toJSON`

Sérialisez les types Java vers JSON pour le transport ou le stockage.

Pour le moment, le seul type Java supporté est un `BukkitLocation`. Vous pouvez utiliser ceci pour publier une BukkitLocation sur le bus d'événements, et pour consommer une BukkitLocation à partir du bus d'événements.

## Exemple

### Publiez votre position via le bus d'événements

Ce sort publie votre position actuelle sur le bus d'événements.

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

### Téléportation au joueur

Voici un sort de téléportation qui utilise les emplacements publiés par eventbus pour se téléporter au dernier emplacement publié pour un joueur:

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