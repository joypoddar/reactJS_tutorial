`create-react-app helloworld` this method doesnt work with version 1.5.2

create-react-app version 1.5.2

this is the work around
`create-react-app hello-world --scripts-version=react-scripts@1.1.4 `

# Notes

## Tutorial 3: Folder Structure

`package.json` this file contains the dependencies and the scripts required for the project. Based on whether we use `yarn` or `npm` as package managers we are going to see `yarn.lock` and `package-lock` json files. .gitigonore and [README.md](http://readme.md) file is also present.

`node-modules` is a folder that stores all the dependencies. It is created when the `create-react-app` is run.

`public` folder contains three files. `manifest.json` is concerned with progressive web apps.

We have to concentrate on the `index.html` file. It is this file that is changed dynamically. React controls the ui through the `root` tag.

`src` is the folder that we will be using. In `index.js` we specify the root component which is the `app` component and the dom element which will be controlled by react. The dom element in our example is an element with an id of `root`.

`App.js` is the file that is responsible for displaying the content in the browser.

`App.css` is responsible for styling.

`App.test.js` contains simple test cases.

`index.css` applies styles to the `body` tag.

`serviceWorker.js` is concerned with progressive web apps.

When the command `npm start` or `yarn start` is run, the `index.html` file which contains the `root` dom node is served in the browser. Next the control enters the `index.js` . The react dom renders the app component on the root dom node. The app component contains all the other components which are rendered to html which is displayed in the browser.