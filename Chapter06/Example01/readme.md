# Hello Electron - Angular

This is the simple electron application but integrated with Angular. This just prints the platform information to the view but using the angular component.

## Running the application

First you need to install the dependencies using npm or yarn. Enter the following command in your terminal.

Using npm: ```npm install```
Using yarn: ```yarn```

Once your dependencies are installed, you can run the application using the following command.

```electron .```

You also need to bundle the Angular application using the webpack. Run the following command to build the webpack.

``` webpack ```

Then reload the page using Ctrl + R key stroke once you finalize the bundling process. You can also watch for the file changes using webpack using following command

```webpack --watch```

All this can be done using custom npm script added to the package.json file. Use the following command to run the app. This will comile and run the electron app.

```
npm run start
```