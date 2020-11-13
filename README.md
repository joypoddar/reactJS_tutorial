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

When we are exporting a component by using `export default App` we can imoprt that component by using any name. There is another kind of export called *named exports* which looks like:

```jsx
export const Greet = () => <h1>Hello Joy!</h1> 
```

In this situation we have to import the component with the same name.
Eg:

```jsx
import {Greet} from './component/Greet';
```

## Tutorial 6: Class Components

They are basically ES6 classes. They can also receive optional `props` . Apart from that they can also maintain private internal state.

| Functional Component | Class Component |
|---|---|
| Simple functions receiving props and returning a declaration| More feature rich |
| Use them as much as possible | Maintain their own private data|
| Advantage: Absence of 'this' keyword| Complex UI logic |
| Solution without using state | Provide lifecycle hooks |
| Mainly responsible for the UI | |
| Stateless/Dumb/Presentational | Stateful/ Smart/Container|

Class Component boiler-plate

```jsx
import React, {Component} from 'react';

class ClassName extends Component {
    render() {
        return <h1></h1> // render should return null or some html
    }
}

export default ClassName;
```

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

| props | state |
|---|---|
| props get passed to the component| state is managed within the component|
| function parameters | variables declared in the function body|
| props are immutable| state can be changed |
| props - Functional Components | useState hook - functional Components |
| this.props - Class Components | this.state - Class Component|

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

## Tutorial 13: Event Handling

Any web application that is created typically has user interactions. When the user interacts, events are fired.

React events are named using camelCase instead of regular lowercase in html and js. With jsx we pass an event function as an event handler rather than a string. Hence we use the {} instead of the "".

`{clickHandler}` here we passed the function as the event handler

`{clickHandler()}` this becomes a function call. This can't be done in event handling.

**We need to remember that the event handler is a function and not a function call**

## Tutorial 14: Binding Event Handlers

Using the `bind` keyword.

Using arrow functions

Binding the event handler in the constructor as opposed to binding in the render method.

```jsx
*<button onClick={this.clickHandler.bind(this)}>Click</button>* 
```

*This is the first method of passing event handlers. This is expensive in large applications as it causes new event handlers whenever this is called* 

```jsx
*button onClick={() => this.clickHandler()}>Click</button>* 
```

*this also has performance implications* 

```jsx
// this part goes inside the constructor
this.clickHandler = this.clickHandler.bind(this);
// this part goes inside the render method
<button onClick={this.clickHandler}>Click</button>
```

*This is better as the binding happens once*

The final approach is to use an arrow function as a class property. We basically have to change the way we define the method in the class.

```jsx
// this part goes inside the class as a method
clickHandler = () => {
        this.setState ({
            message: 'GoodBye!'
        })
    }
// this part goes inside the render method
<button onClick={this.clickHandler}>Click</button>
```
## Tutorial 15: Methods as props

We can pass a method as a prop to a child in the following manner.

```jsx
<ChildComponent greetHandler = {this.greetParent}/>
```

Likewise to pass a parameter from the child component to the parent component, we use and `arrow function` like so

```jsx
<button onClick={() => props.greetHandler('child')}>Greet Parent</button>
```

## Tutorial 16: Conditional Rendering

Approaches

1. if/else
2. Element variables
3. Ternary conditional operators
4. Short circuit operators

If/Else

```jsx
if (this.state.isLoggedIn) {
    return (
        <div>Welcome Joy</div>
    )
}
else {
    return (
        <div>Welcome Guest</div>
    )
}
```

Element Variables

```jsx
let message;
if (this.state.isLoggedIn) {
    message = <div>Welcome Joy</div>
}
else {
    message = <div>Bonjour Guest</div>
}

return (<div>{message}</div>)
```

Ternary conditional operators

```jsx
return (
    this.state.isLoggedIn ?
    <div>Welcome Joy</div> :
    <div>Hello Guest</div>
)
```

Short circuit operators

```jsx
return (
    this.state.isLoggedIn && <div>Welcome Joy</div>
)
```

Here if `this.state.isLoggedIn` returns true then only the second expression on the right side of the `&&` is evaluated else it is not evaluated.

## Tutorial 17: List Rendering

We use the `map` method for rendering list.

## Tutorial 18: List & Keys

Each item in the list rendered with a `map` operator should have a key associated with it.

Note: `key` props are not accessible in the child components.

### Summary

A `key` is a special string attribute you need to include when creating lists of elements.

Keys give the elements a stable identity.

Keys help React identify which items have changed, are added, or are removed

Help in efficient update of the user interface.

## Tutorial 19: Index as Key Anti-pattern

A lot of times developers use the index of an element as a `key`. This might result in creating problems when used in the wrong scenario.

### When to use index as a Key

1. The items in your list do not have a unique id.
2. The list is a static one and will not change.
3. The list will never be reordered or filtered.

## Tutorial 20: Styling and CSS Basics

### Styling React Components

1. CSS stylesheets
2. Inline styling 
3. CSS modules
4. CSS in JS Libraries {Styled Components}

We use template literals to pass multiple classes. There are ways to conditionally pass css classes.

In React, inline styles are not specified as a string. Instead they are specified as an object, who's key  is a camelCased version of the styling and its value is the is usually a string.

CSS modules feature is available with `react-scripts` version 2 or higher. There is a file naming convention to be used for `create-react-app` . The file name must be suffixed with `.module.css`

One advantage of using css modules is that the classes are locally scoped.  Inline styling works in child components even without an import, this can sometimes cause conflicts.

## Tutorial 21: Basics of Form Handling

**Controlled components** are those whose values are controlled by react.

## Tutorial 22: Component Lifecycle Methods

When we create a React component, it goes through several stages in its lifecycle. React provides with built-in methods with which we can override at particular stages in the lifecycle.

Lifecycle methods available for a class components. These methods are not available for a functional component. With the new feature proposal of Hooks, there is the `useEffect` hook which partially relates to lifecycle hooks.

### Lifecycle methods (Version 16+)

Mounting : they are called when an instance of a component is being created and inserted into a DOM. During the mounting phase we have four methods: *constructor, static getDerivedStateFromProps, render* and *componentDidMount* 

Updating:  they are called when a component is being re-rendered as a result of changes to either its props or state. During the updating phase we have five methods *static getDerivedStateFromProps, shouldComponentUpdate, render, getSnapshotBeforeUpdate* and *componentDidUpdate*

Unmounting : they are called when a component is being removed from the DOM. Here we have one method: componentWillUnmount

Error Handling : they are called  when there is an error during rendering in a lifecycle method or in the constructor of any child component. Here we have two methods: *static getDerivedStateFromError* and *componentDidCatch*

Getting a proper understanding of Lifecycle methods and when to use which method is crucial to properly understanding how to work with React.

## Tutorial 23: Component Mounting Lifecycle Methods

These methods are called when an instance of a component is being created and being inserted into a DOM. We are going through them in the order that they are invoked.

First we have the `constructor(props)` . It is a special function that will get called whenever a new component gets created. The constructor is used to *initialize the state and/or also for binding the event handlers to the class events.* We should keep in mind not to cause side effects. Eg: Never make HTTP requests from within a constructor.

There are two important things to keep in mind when defining a **constructor.** We have to call a special function called `super(props)`. In a class we can only have the access to `props` after passing it through `super` as an argument. The next thing to keep in mind is that the constructor is the only place where we are allowed to set or change the `state` by directly overwriting `this.state` fields. In other places we have to use the `this.setState` method.

The second method that we call is a static method *getDerivedStateFromProps(props, state).* This method gets `props` and `state` as parameters and return either the new state or null. The React documentation classifies this method as a rarely used lifecycle method. **This method is basically used when the state of the component depends on changes in props over time. Eg: Suppose we have a component whose initial state depends on the props that is passed to the component. In such a scenario we can use this method to set the state. Since this method is a static method, *it does not have access to the this keyword.* We cannot call `this.setState` within this particular method. Instead we simply have to return an object that represents the new state of the component. Again we shouldn't cause side effects.

The third method is the *render()* method. It is the only required method in a class component.  In the render method we simply read `this.props` and `this.state` and return the JSX which describes the UI. The render function is a pure function. For a given props or state, it always renders the same UI. What we shouldn't do in this method is changing the state or interact with DOM or make ajax calls. Since the render() method JSX also contains the other children components, the children component lifecycle methods are also executed right after the parent render method.

The final method of the mounting phase is the *componentDidMount().* This method  will only be called once in the whole lifecycle of the given component and it is invoked immediately after a component and all its children components have been rendered to the DOM. This method is the perfect place to cause side effects. It is here we can interact with the DOM or perform any ajax calls or load data. So *componentDidMount* is a good place to perform initialization that requires DOM nodes also load data by making network requests.

## Tutorial 24: Component Updating Lifecycle Methods

Updating Lifecycle Methods are those that are called because of changes to the props or the state. We will be going through them in the order in which they are invoked. There are five of them out of which three are rarely used. 

The first method is *getDerivedStateFromProps(props, state).* This is a static method which receives props and state as its parameter and has to return null or an object that has the current state of the component. This method is called every time a component is re-rendered. This method is used when the state depends on the props of the component.

The second method is the *shouldComponentUpdate(nextProps, nextState).* This method receives the updated props and state and the purpose of this method is clear from its name. It dictates whether the component should update or not. By default all class components re-renders whenever the props they receive or their state changes. *This method can prevent that default behaviour by returning false.* What we can do is check the previous state values with the current state values and return true or false accordingly to let React know whether the component should update or not. This method is basically used for performance optimization. We should avoid causing any side effects or calling the setState method. This is a rarely used method.

The third method is the *render()* method.

The fourth method is *getSnapshotBeforeUpdate(prevProp, prevState )* this method is called right before the changes from the virtual DOM is to be reflected in the DOM. This again is a rarely used method. We can use this method to capture some information from the DOM. This method will either return null or return a value. Returned value will be passed as the third parameter to the next method. 

The final method in  the update lifecycle is the *componentDidUpdate(prevProps, PrevState, snapshot)* this method is called after the render is finished in the re-render cycles. We can cause side effects. That is we can make ajax calls. But before making the call we need to compare the previous props with the new props and then decide whether to make the ajax call or not. If we do not compare we are basically making unwanted requests which is not a good idea. 

### Unmounting Phase Method

It has just one method *componentWillUnmount()*. This method is invoked immediately before a component is unmounted and destroyed. In this method we can perform some clean up tasks like cancelling any network requests, removing event handlers, cancelling any subscriptions and also invalidating timers. We shouldn't call the setState method because once the unmounting is done, a component is never re-rendered. 

### Error Handling Phase Methods

There are two methods *static getDerivedStateFromError(error) and componentDidCatch(error, info).* These methods are called when there is an error either during rendering, in a lifecycle method, or the constructor of any child component

## Tutorial 25: Fragments

Fragments lets us group a list of children elements without creating extra nodes to the DOM. React rule specifies that the render element can have multiple divs inside a parent div. `React.Fragments` allow us to bypass that. It can accept `key` attribute when rendering lists of items. We can only pass the key attribute as an attribute of the react fragment. If we use the short-hand method of React.Fragments, we cannot pass in the key attribute.

## Tutorial 26: Pure Components

Another way of creating components.

| Regular Component | Pure Component|
|---|---|
|A regular component does not implement the *shouldComponentUpdate* method. It always returns true by default.|A pure component on the other hand implements *shouldComponentUpdate* with a shallow props and state comparison. 

### Shallow Comparison (SC)

#### Primitive Types

For two primitive types a and b for numbers, strings and booleans a (SC) b returns true is a and b have the same value and are of the same type. 
Eg: string 'Joy' (SC) string 'Joy' returns true

#### Complex Types

a (SC) b returns true if a and b reference the same object.

#### Pure Component (Def)

A pure component implements shouldComponentUpdate with a shallow prop and state comparison.

It does a SC of prevState, prevProps with currentState and currentProps and only when there is a difference then it re-renders.

To answer the question why we should use PureComponents. PureComponents by preventing unnecessary renders gives performance boost in certain scenarios. One thing to keep in mind is that we should not mutate objects or arrays in props or state. Always return a new object or array while working with pure component. Pure components only work with class components.

## Tutorial 27 - Memo

PureComponents : Class based components :: React.memo : functional components. React.memo accepts a component adds some things to the component and returns a new enhanced component. React.memo is a higher order component.