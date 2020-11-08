import React from 'react'; //first step is to imoport 

// function Greet () {
//     return (
//         <h1>Hello Joy!</h1>
//     )
// }
// its  a convention to use arrow function to define the function

const Greet = (props) => {
    console.log(props);
    return (
        <div>
            <h1>Hello {props.name} a.k.a {props.heroname}</h1> {/* props is an object. We wrap the props.name in { } to enable JSX to compile it correctly */}
            {props.children}
        </div>
        // in video #9 time 6.28 we see an error and the reason why there is a convention to return only one div from the function
    )
}

// function is created but it doesnt render. For that we have to export it from here and import it in the App.js
export default Greet;

// #5: Functional component
// here we are exporting Greet functoin as a default. This allows us to import the component with any name. There are certain situations where we used named exports.