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

6. We will 


