// JSX - Javascript + HTML Syntax

import { useState } from "react"


// Components - Building Blocks of React UI
function Welcome() {
    return <h2>Welcome to React</h2>
}

// Props - Passing Data to components
function Greet({name}) {
    return <p>Hello, {name}</p>
}

// State - React's way of storing dynamic data
const [count, setCount] = useState(0)

// Events - Handling user actions

<button onClick={() => setCount(count + 1)}>click me </button>

// useEffects - sideEffects like API calls or 

// Lifecycle Methods / Hooks

// Virtual DOM

// ReactDOM

// Event handling

// Context API