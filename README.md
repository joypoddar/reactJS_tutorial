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

## Tutorial 4: Components

In react component represents a part of the user interface. Component's are reusable and can contain other component.

The component file is placed in a js file. We can also use a jsx file structure for the purpose. 

There are two types of component:

- Stateless Functional Component - its a function like js function.
- Stateful Class Component - regular es6 class which have a render component

## Tutorial 5: Functional Components

Functional components are just js functions, they optionally receive `object` or properties which is called `props` and returns `html`. The html is known as JSX.

We use [Pascal case](https://techterms.com/definition/pascalcase) for component file naming.

## Tutorial 6: Class Components

They are basically ES6 classes. They can also receive optional `props` . Apart from that they can also maintain private internal state.

### Functional Component

- Simple functions receiving props and returning a declaration
- Use them as much as possible
- Advantage: Absence of 'this' keyword
- Solution without using state
- Mainly responsible for the UI
- Stateless/Dumb/Presentational

### Class Component

- More feature rich
- Maintain their own private data
- Complex UI logic
- Provide lifecycle hooks
- Stateful/ Smart/Container

## Tutorial 7: Hooks Update

- No breaking change.
- Complete opt-in and 100% backwards-compatible.

## Tutorial 8: JSX

- JavaScript XML (JSX) - Extension to the JS language syntax.
- Write XML - like code for elements and components.
- JSX tags have a tag name, attributes and children.
- JSX is not a necessity to write React applications.
- JSX make code simpler and elegant
- JSX ultimately transpiles to pure JavaScript which is understood by the browsers.

### JSX Differences

Class → className

for → htmlFor

camelCase property naming convention

- onclick → onClick
- tabindex → tabIndex

### Tutorial 9: Props

Props are immutable

## Tutorial 10: State

### props

props get passed to the component

function parameters 

props are immutable 

props - Functional Components 

this.props - Class Components

### state

state is managed within the component

 variables declared in the function body

state can be changed

useState hook - functional Components

this.state - Class Component

## Tutorial 11: setState

Watch the [video](https://www.youtube.com/watch?v=uirRaVjRsf4&list=PLC3y8-rFHvwgg3vaYJgHGnModB54rxOk3&index=11) for usage of setState and its behaviour

If we `console.log` the value of the counter as shown in the video, we will notice that the value in the console in 1 less than the actual value that is rendered. This is because calls to setState is async. Here the `console.log` is called before the state is set. Many a times we want a piece of code execute only when the state is set. To handle such tasks we have the `callback` function which can be passed as a second parameter to the setState function. The setState function has two parameters: the first is the state object and the second parameter is the callback method. The callback function is an arrow function. 

### Summary

Always make use of setState and never modify the state directly.

If a code has to be executed after the state has been updated, place that code in the call back function which is the second argument to the setState method.

When you have to update state based on the previous state value, pass in a function as an argument instead of the regular object. The `prevState` function has a second argument called `props`.

## Tutorial 12: Destructuring props and state

`const Greet = ({name, heroname}) => {}` this is one way of destructuring. Its called destructuring in the parameter.

Another way is to destructure in the function body.

```jsx
const Greet = props => {
const {name, heroname} = props;
return (
	<div>
		<h1>Hello {name} a.k.a {heroname}</h1>
	</div>
	)
}
```

In class component we generally tend to destructure the props and state in the render method.