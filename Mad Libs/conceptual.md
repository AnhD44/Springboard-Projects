### Conceptual Exercise

Answer the following questions below:

- What is React? When and why would you use it?
-> React is a JavaScript library for building user interfaces, especially single-page applications.
-> You would use React when you want:
A fast, interactive UI.
To build reusable components.
To manage state efficiently. It's great for modern web apps like dashboards, e-commerce sites, and social media platforms.

- What is Babel?
-> Babel is a JavaScript compiler that converts modern JavaScript (ES6+) and JSX into code that browsers understand. React uses JSX, which browsers don't recognize directly—so Babel helps by transforming it into plain JavaScript.

- What is JSX?
-> JSX stands for JavaScript XML. It lets you write HTML-like code inside JavaScript.

- How is a Component created in React?
-> There are two main ways: Function/Class component.

- What are some difference between state and props?
-> State: read-only, set by parent component, purpose is to pass data to a component.
-> Props: can be changed, set by the 

- What does "downward data flow" refer to in React?
-> It means data flows from parent to child components. Props are passed down, but not up. Children can't directly change parent data—this helps keep the UI predictable.

- What is a controlled component?
-> A controlled component is a form element (like input, textarea, select) whose value is controlled by React state.

- What is an uncontrolled component?
-> An uncontrolled component manages its own internal state using the DOM. You access the value using a ref. Uncontrolled is less common in React but useful in specific cases like file uploads.

- What is the purpose of the `key` prop when rendering a list of components?
-> The key prop helps React identify which items changed, added, or removed. It improves rendering performance by avoiding unnecessary re-renders.

- Why is using an array index a poor choice for a `key` prop when rendering a list of components?
-> Using an index can cause incorrect rendering when the list order changes. React might think items changed when they didn’t, leading to bugs or incorrect UI behavior.

- Describe useEffect.  What use cases is it used for in React components?
-> useEffect is a React Hook that runs side effects in function components. 
-> Use cases include: fetching data, setting up subscriptions or timers, updating the DOM manually.

- What does useRef do?  Does a change to a ref value cause a rerender of a component?
-> useRef creates a mutable reference that does not trigger a re-render when changed. 
-> It's useful for accessing DOM elements or keeping values between renders.

- When would you use a ref? When wouldn't you use one?
-> Use a ref when: to access a DOM node directly, to store a value that doesn’t need to cause re-renders, for timers, previous values, or scroll positions.
-> Don't use a ref when: to manage reactive data that affects rendering (use useState instead), to communicate between components (use props/state).

- What is a custom hook in React? When would you want to write one?
-> A custom hook is a function that uses other React hooks to encapsulate reusable logic. 
-> You would write one when you want to reuse logic across multiple components (e.g., handling local storage, form validation, fetching data).