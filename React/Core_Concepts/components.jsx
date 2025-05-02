// What is a Component in React

// A component is a reusable, self-contained building block that defines a part of the UI in react App

// React apps are made by combining multiple components together

// Each componet:
//     - Manages its own state (if needed)
//     - Accepts inputs via props (variable input)
//     - Returns JSX (which React renders to the DOM)


// Two Main Types of Components

// - 1. Functional Components (modern and preferred): These are javascript functions that returns JSX

    // Example: props/properties/javascript objects/ any input
        function Greeting(props) {
            return <h1>Hello, {props.name}!</h1>
        }
    
    // Example with Hooks:
    import React, { useState } from 'react';

    function Counter() {
      // Declare a new state variable, which we'll call "count"
      const [count, setCount] = useState(0);
    
      return (
        <div>
          <p>You clicked {count} times</p>
          <button onClick={() => setCount(count + 1)}>
            Click me
          </button>
        </div>
      );
    }
    
    export default Counter;

// - 2. Class Components (onunhandledrejection, less common now)

    // Class components are a way to define components in React using ES6 class syntax.
    //  Before the introduction of Hooks in React 16.8, class components were the primary way to 
    //  manage state and lifecycle methods in React applications. Here’s a detailed overview of 
    //  class components

    import React, { Component } from 'react';

    class Greeting extends Component {
    render() {
        return <h1>Hello, {this.props.name}</h1>;
    }
    }

    export default Greeting;

    // Explanation

    // Importing React and Component: You need to import React and Component from the react package.
    // Extending React.Component: The class component extends React.Component.
    // Render Method: Every class component must have a render method that returns JSX.





// Key Concepts in Components:

        // - Props: External inputs passed to components
        //     - Read onplay, a component should not modify its own props
        //     - used for communication between components


        // State:
        //     Internal Data Managed by the component

        // Lifecycle: (for class components) Hooks into the component's mounting, updating and unmounting
        //             Phases

        // Hooks: (for functional components)
        //     - APIs like useState, useEffect etc



