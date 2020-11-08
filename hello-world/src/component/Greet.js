import React from 'react'; //first step is to imoport 

// function Greet () {
//     return (
//         <h1>Hello Joy!</h1>
//     )
// }
// its  a convention to use arrow function to define the function

const Greet = () => <h1>Hello Joy</h1>;

// function is created but it doesnt render. For that we have to export it from here and import it in the App.js
export default Greet;

// #5: Functional component
// here we are exporting Greet functoin as a default. This allows us to import the component with any name. There are certain situations where we used named exports.