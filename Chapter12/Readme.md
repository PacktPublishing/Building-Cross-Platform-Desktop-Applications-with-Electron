# ElectronAngular

This sample application demonstrate how to create a desktop application using
Angular JS and Github Electron.

#Install

---

Install dependencies.

```
	npm install
```

## #Run

Run your application by entering following command in your command prompt

```
	npm start
```

## #Build

```
	npm run build
```

The build will create a dist folder and you can see the learning-electron.exe
with custom icon. Execute the exe you should be getting the same output that you
got when you run the application using npm start command. The NSIS installer
command is commented in the build.window.js. Install NSIS first, and remove the
semi column of the line number 133 and uncomment 135th line. Run npm run build
command and you should be getting the installer in your project.
