# Adriana.github.io

V2.0

## [setup sass with create-react-app with eject](https://github.com/facebook/create-react-app/blob/master/packages/react-scripts/template/README.md#adding-a-css-preprocessor-sass-less-etc)

- install the command-line interface for Sass:`npm install --save node-sass-chokidar`
- then in package.json, add the following lines to scripts:

```bash

  "scripts": {
+    "build-css": "node-sass-chokidar src/ -o src/",
+    "watch-css": "npm run build-css && node-sass-chokidar src/ -o src/ --watch --recursive",
     "start": "react-scripts start",
     "build": "react-scripts build",
     "test": "react-scripts test --env=jsdom",

```

- rename `src/App.css` to `src/App.scss`
- run `npm run watch-css`
- in order to run `watch-css` and `npm start` parallelly

 ```bash
  npm install --save npm-run-all
 ```

- update package.json as below

 ```bash
  "scripts": {
     "build-css": "node-sass-chokidar src/ -o src/",
     "watch-css": "npm run build-css && node-sass-chokidar src/ -o src/ --watch --recursive",
-    "start": "react-scripts start",
-    "build": "react-scripts build",
+    "start-js": "react-scripts start",
+    "start": "npm-run-all -p watch-css start-js",
+    "build-js": "react-scripts build",
+    "build": "npm-run-all build-css build-js",
     "test": "react-scripts test --env=jsdom",
     "eject": "react-scripts eject"
   }
 ```

- run `npm start` to start the server
- run `npm run build` to create a production build