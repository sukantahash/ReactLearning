// ReactDOM is a package provided by React that aloows your React components to be rendered into the 
// DOM (Document Object Model), which is what browsers use to display we PageSwapEvent

// Core Functionality of ReactDOM:


// Rendering React Elements into the DOM

import React  from "react";
import ReactDOM from 'react-dom/client';

import App from './App'

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<App/>);


// Hydrating server-rendered markup (for SSR)




