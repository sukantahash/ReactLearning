// Event handling in React is similar to handling events in plain JavaScript, but with some syntactic 
// differences and enhancements. React provides a consistent and cross-browser way to handle events 
// in a declarative manner. Here’s a detailed overview of how to handle events in React:


import React, { useState } from 'react';

// Basic Event Handling
// Inline Event Handlers
// You can handle events directly in JSX using inline event handlers. React events are named using camelCase, rather than lowercase.

function InlineEventHandler() {
  const handleClick = () => {
    alert('Button clicked!');
  };

  return (
    <button onClick={handleClick}>
      Click me
    </button>
  );
}

export default InlineEventHandler;

// Passing Arguments to Event Handlers
// You can pass arguments to event handlers using arrow functions or the bind method.

function ArgumentEventHandler() {
  const handleClick = (message) => {
    alert(message);
  };

  return (
    <button onClick={() => handleClick('Button clicked with argument!')}>
      Click me
    </button>
  );
}

export default ArgumentEventHandler;

// Synthetic Events
// React uses a synthetic event system to ensure that events behave consistently across different browsers. Synthetic events are wrapped around the browser’s native events and have the same interface.

function SyntheticEventExample() {
  const handleChange = (event) => {
    console.log('Input value:', event.target.value);
  };

  return (
    <input type="text" onChange={handleChange} />
  );
}

export default SyntheticEventExample;

// Common Event Types
// Handling Form Events
// Form events like onChange, onSubmit, and onInput are commonly used in React applications.

function FormEventHandler() {
  const [value, setValue] = useState('');

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    alert('Form submitted with value: ' + value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={value} onChange={handleChange} />
      <button type="submit">Submit</button>
    </form>
  );
}

export default FormEventHandler;

// Handling Mouse Events
// Mouse events like onClick, onMouseEnter, and onMouseLeave can be handled similarly.

function MouseEventHandler() {
  const handleMouseEnter = () => {
    console.log('Mouse entered');
  };

  const handleMouseLeave = () => {
    console.log('Mouse left');
  };

  return (
    <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      Hover over me
    </div>
  );
}

export default MouseEventHandler;

// Handling Keyboard Events
// Keyboard events like onKeyDown, onKeyUp, and onKeyPress are also supported.

function KeyboardEventHandler() {
  const handleKeyDown = (event) => {
    console.log('Key pressed:', event.key);
  };

  return (
    <input type="text" onKeyDown={handleKeyDown} />
  );
}

export default KeyboardEventHandler;

// Event Pooling
// React reuses event objects for performance reasons, a process known as event pooling. This means that the event object is only valid within the event handler. If you need to access the event asynchronously, you should call event.persist().

function EventPoolingExample() {
  const handleClick = (event) => {
    event.persist();
    setTimeout(() => {
      console.log('Event type:', event.type); // Accessing event asynchronously
    }, 1000);
  };

  return (
    <button onClick={handleClick}>
      Click me
    </button>
  );
}

export default EventPoolingExample;

// Summary
// Event handling in React is straightforward and similar to handling events in plain JavaScript, 
// with some enhancements for consistency and performance. By using React’s synthetic event system,
//  you can ensure that your event handlers work across different browsers without issues.

// Key Points
// Use camelCase for event handler names (e.g., onClick, onChange).
// Pass arguments to event handlers using arrow functions or bind.
// React’s synthetic events provide a consistent interface across browsers.
// Use event.persist() if you need to access the event object asynchronously.


/////////////////////////////////////////////////////////////////////////////////

// | **Event Type**    | **Event Name**   | **Description**                                    | **Example Usage**                                      |
// |-------------------|------------------|----------------------------------------------------|--------------------------------------------------------|
// | **Form Events**   | `onChange`       | Triggered when the value of an input changes.      | `<input type="text" onChange={(e) => console.log(e.target.value)} />` |
// |                   | `onSubmit`       | Triggered when a form is submitted.                | `<form onSubmit={(e) => { e.preventDefault(); console.log('Form submitted'); }}>` |
// |                   | `onInput`        | Triggered when user inputs text into an input.     | `<input type="text" onInput={(e) => console.log(e.target.value)} />` |
// | **Mouse Events**  | `onClick`        | Triggered when an element is clicked.              | `<button onClick={() => console.log('Button clicked')}>Click me</button>` |
// |                   | `onDoubleClick`  | Triggered when an element is double-clicked.       | `<button onDoubleClick={() => console.log('Button double-clicked')}>Double Click me</button>` |
// |                   | `onMouseEnter`   | Triggered when the mouse enters an element.        | `<div onMouseEnter={() => console.log('Mouse entered')}>Hover over me</div>` |
// |                   | `onMouseLeave`   | Triggered when the mouse leaves an element.        | `<div onMouseLeave={() => console.log('Mouse left')}>Hover over me</div>` |
// | **Keyboard Events**| `onKeyDown`     | Triggered when a key is pressed down.              | `<input type="text" onKeyDown={(e) => console.log('Key down:', e.key)} />` |
// |                   | `onKeyUp`        | Triggered when a key is released.                  | `<input type="text" onKeyUp={(e) => console.log('Key up:', e.key)} />` |
// | **Focus Events**  | `onFocus`        | Triggered when an element gains focus.             | `<input type="text" onFocus={() => console.log('Input focused')} />` |
// |                   | `onBlur`         | Triggered when an element loses focus.             | `<input type="text" onBlur={() => console.log('Input blurred')} />` |
// | **Clipboard Events**| `onCopy`       | Triggered when content is copied.                  | `<div onCopy={() => console.log('Content copied')}>Copy this text</div>` |
// |                   | `onCut`          | Triggered when content is cut.                     | `<div onCut={() => console.log('Content cut')}>Cut this text</div>` |
// |                   | `onPaste`        | Triggered when content is pasted.                  | `<input type="text" onPaste={() => console.log('Content pasted')} />` |
// | **Other Events**  | `onLoad`         | Triggered when an element or resource loads.       | `<img src="image.jpg" onLoad={() => console.log('Image loaded')} alt="Example" />` |
// |                   | `onError`        | Triggered when an error occurs during loading.     | `<img src="invalid.jpg" onError={() => console.log('Error loading image')} alt="Example" />` |
// |                   | `onScroll`       | Triggered when an element is scrolled.             | `<div onScroll={() => console.log('Scrolled')} style={{ overflowY: 'scroll', height: '100px' }}>...</div>` |
