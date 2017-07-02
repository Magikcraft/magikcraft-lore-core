# magikcraft-spells-core

The Core spells for the Magikcraft API

## How to create a new Lore API for Magikcraft

### Prerequisites

I recommend that you use Visual Studio Code. You can use anything you want, but I'm going to give instructions for Visual Studio Code here. Go to [code.visualstudio.com](https://code.visualstudio.com) to install it.

You need Node.js installed on your computer. Node.js is JavaScript that runs outside your web browser. We use it to build Magikcraft.
## Let's Do This!

0. Create a new npm package:

``mkdir my-cool-api
cd my-cool-api
npm init
```

1. Now make it a TypeScript project, because 2017:

```
yarn add --dev typescript@2.4
tsc --init
```

2. Now make it a Git repository, because the future:

```
git init
```

3. Now make an output directory in the project for the JavaScript to go into:
```
mkdir dst
```

4. Edit the `tsconfig.json` file to make this the output directory:

```
 "outDir": "./dst"
 ```

5. Now make an input directory, `src`:

```
mkdir src
```

6. Now install the Magikcraft type library:

```
yarn add magikcraft-types
```

7. Now it's time to start coding.

Create a file `index.ts` in the `/src` folder. Your package will be loaded by the Magikcraft module loader in the server. You should export a description, a name, and an array of spells. Make it look like this, substituting your own API name:

```
export name = "My Cool API";
export description = "Literally, the best API of all time, anywhere.";
export spells = [];
```

## Writing magik.volare

Let's start off by writing the spell `magik.volare`. This is literally how it is written in the Magikcraft API.

1. Make a new folder inside `src` called `spells`:

```
mkdir spells
cd spells
```

2. Now make a file called `volare.ts`. You can use the "add file" and add "folder" buttons to make files and folders. After a while of coding you might find it faster to keep using your keyboard. You decide.

3. In the `volare.ts` file write this:

```
export const volare = (canon) => () => {}
```

This is the basic structure of a Magikcraft API. You `export` a constant (`const`) which has the name of your spell - in this case 'volare'. That constant is (the equals sign "=" means "is") a function that takes a canon and returns another function.

Don't worry if you don't understand what those symbols mean. That's the mystery of magic! You will be able to conjour things up from nothing as you master it.

Another way of writing that spell is like this:

```
export function volare (canon) {
    return function () {

    }
}
```

You have one function that returns another function, which is the actual spell. You will not understand what I am about to tell you. Don't worry. This is magic.

The purpose of the outer function is to create a "closure". Think of it like a spaceship. When you go out into space, you are in a small ship with an atmosphere and some water and some food. The closure is like that. When your spell is loaded by Magikcraft it will take some stuff with it that Magikcraft will add to it. That's the "canon" part. Magikcraft puts the canon into the spell for you.

OK, onwards!

4. We will use the terse syntax. It's the way that master magicians write code in 2017. It's like the difference between writing a whole sentence or using an emoji. Hieroglyphics are cool - so make your spell look like this:

```
export const volare = (canon) => () => {}
```
The volare spell takes a duration argument. That's how long the effect of the spell will last. So let's add that in:

```
export const volare = (canon) => (duration) => {}
```

OK, so now you have a spell that takes a canon from Magikcraft and returns another spell that takes a duration. Now let's add some types.

5. Because you imported the `magikcraft-types` package, and you're using Visual Studio Code, you can get the editor to fill in some of the information for you. In Visual Studio Code you should add the extension "TypeScript Hero". Search around for extensions, and when you find them, load "TypeScript Hero". 

Now put your cursor over `canon` and click it. Then, open the Command Palette. On my Mac I press Command-Shift-P - or I can get to it via `View > Command Palette`. In command palette type 'Import'. If you have TypeScript Hero installed, you'll have an option for 'TS Hero: Adds the current symbol under the cursor as an import to current file.'
