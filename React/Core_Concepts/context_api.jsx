
// The Context API in React is a powerful feature that allows you to share state across components 
// without having to pass props down manually at every level. It is particularly useful for global 
// state management and can simplify the process of passing data through the component tree.

// Key Concepts of Context API

// Creating a Context
// To create a context, use the React.createContext() function. This function returns a context 
// object with two components: Provider and Consumer.

import React from 'react';

// Create a context with a default value
const ThemeContext = React.createContext('light');

export default ThemeContext;

// Providing Context
// The Provider component is used to pass the current context value to the component tree.
//  Any component wrapped in the Provider will have access to the context value.

import React from 'react';
import ThemeContext from './ThemeContext';

function App() {
  return (
    <ThemeContext.Provider value="dark">
      <Toolbar />
    </ThemeContext.Provider>
  );
}

function Toolbar() {
  return (
    <div>
      <ThemedButton />
    </div>
  );
}

// Consuming Context
// There are two main ways to consume context: using the Consumer component or the useContext hook.

// Using the Consumer Component
// The Consumer component allows you to subscribe to context changes. It requires a function as a 
// child that receives the current context value.

import React from 'react';
import ThemeContext from './ThemeContext';

function ThemedButton() {
  return (
    <ThemeContext.Consumer>
      {theme => (
        <button style={{ backgroundColor: theme === 'dark' ? '#333' : '#FFF' }}>
          Theme Button
        </button>
      )}
    </ThemeContext.Consumer>
  );
}

// Using the useContext Hook
// The useContext hook is a simpler way to consume context in functional components.

import React, { useContext } from 'react';
import ThemeContext from './ThemeContext';

function ThemedButton() {
  const theme = useContext(ThemeContext);

  return (
    <button style={{ backgroundColor: theme === 'dark' ? '#333' : '#FFF' }}>
      Theme Button
    </button>
  );
}

// Advantages of Context API

// Avoid Prop Drilling: Context API helps avoid prop drilling, where props are passed through many 
// layers of components.

// Global State Management: It provides a way to manage global state without external libraries 
// like Redux.

// Ease of Use: The useContext hook makes it easy to access context values in functional components.

// Considerations

// Performance: Frequent updates to context can lead to performance issues, as all consumers will 
// re-render when the context value changes.

// Complexity: For very complex state management, consider using dedicated state management 
// libraries.
