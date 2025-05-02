//  Class Components (onunhandledrejection, less common now)

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


// State in Class Components

//     Class components can hold and manage state using the this.state object and the this.setState 
//     method.


import React, { Component } from 'react';

class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
  }

  incrementCount = () => {
    this.setState({ count: this.state.count + 1 });
  };

  render() {
    return (
      <div>
        <p>You clicked {this.state.count} times</p>
        <button onClick={this.incrementCount}>Click me</button>
      </div>
    );
  }
}

export default Counter;


// Explanation

// Constructor: The constructor is used to initialize state. You must call super(props) before 
// accessing this in the constructor.

// State Object: State is stored in the this.state object.

// Updating State: Use this.setState to update the state. This method schedules an update to the 
// component’s state object and tells React to re-render the component with the updated state.


// // Lifecycle Methods:

//     Class components have access to various lifecycle methods that allow you to run code at specific 
//     points in the component’s lifecycle.
//     Common Lifecycle Methods

//     componentDidMount: Called once after the component is mounted (inserted into the tree).
//     componentDidUpdate: Called after the component is updated.
//     componentWillUnmount: Called just before the component is unmounted and destroyed.


import React, { Component } from 'react';

class Timer extends Component {
  constructor(props) {
    super(props);
    this.state = { seconds: 0 };
  }

  tick = () => {
    this.setState(state => ({
      seconds: state.seconds + 1
    }));
  };

  componentDidMount() {
    this.interval = setInterval(this.tick, 1000);
  }

  componentDidUpdate() {
    console.log(`Timer updated: ${this.state.seconds} seconds`);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    return (
      <div>
        <h1>Seconds: {this.state.seconds}</h1>
      </div>
    );
  }
}

export default Timer;


// Explanation

// componentDidMount: Starts a timer when the component is first rendered.
// componentDidUpdate: Logs a message every time the component updates.
// componentWillUnmount: Clears the timer when the component is about to be removed from the DOM


// When to Use Class Components
// Class components are still supported in React, but with the introduction of Hooks, functional 
// components have become the preferred way to write components due to their simplicity and the 
// ability to use state and lifecycle methods without needing to use classes.

