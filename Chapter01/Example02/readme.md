# Electron markdown viewer

This is the second example in the first chapter that demonstrate accessing node context directly from the webpage inside an electron application. This also demonstrate using the third party npm modules
directly inside the webpages.

## Running the application

First you need to install the dependencies using npm or yarn. Enter the following command in your terminal.

Using npm: ```npm install```
Using yarn: ```yarn```

Once your dependencies are installed, you can run the application using the following command.

```electron .```

If you don't have the electron in your path, use the electron module installed locally in the application. In this case, use the following command to run the application.

``` ./node_modules/.bin/electron ```

On Windows machine you may have to wrap the command with the quotation mark as follows

``` "./node_modules/.bin/electron" ```
