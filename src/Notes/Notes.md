
# Notes

This is just some notes on React, for my own reference. Not you. Stop looking at my notes.

## Important Principles

### Immutability

React prefers immutability, which means constant variables that don't change, and functions that don't change any data outside of their scope, except with hooks. 

This means you should always create new Arrays and Objects instead of modifying them.

This lets the old data remain, and it can be used to compare or revert, and prevents less unexpected bugs.

### Single Responsibility Principle

A component should do one thing, and one thing only. If it grows into multiple things, it should be broken down into multiple components.

### Data Static Dynamic

A good process is to start with the static data your app will need, then design static components that display all the data, then at the end make all the components be able to change the data.

In simpler projects, it's better to start with the topmost components, and work your way down, but in large projects it can be better to start with the small components and work your way up.

### One Way Data Flow

Data should be managed by the top level component, then flow down the hierarchy to supply the data to the lower components.

You need to choose carefully where to put state. It needs to be in the uppermost common parent of all the components that need it, or higher. If you can't find a good component to hold the state, it can sometimes make sense to create a new component just for the state.

### DRY (Don't Repeat Yourself)

When adding state, you should try to use the minimum amount possible, and avoid repeating anything, or storing any state that isn't absolutely necessary. 

Whenever possible, calculate values on the fly rather than storing them, as you want the simplest state possible.


## Syntax

## Conditional Rendering

```
const content = 1==1 ? 'Truth' : 'Lies';

return (<div>{content}</div>);
```

or inline

```
return (<div>{1==1 ? 'Truth' : 'Lies'}</div>);
```

or if no else needed:

```
return (<div>{1==1 && 'Truth'}</div>);
```

## Lists

create lists by doing a map on an array, then including the result in the JSX

```
const list = ['a', 'b', 'c'].map(i => <li key={i}>{i}</li>);
return (<ul>{list}</ul>);
```

make sure to include a key, which helps react keep track of which is which in case things change

## Events
Pass a reference to a function directly to an even handler on the elements:

```
<button onclick={doTheClickyThing}>Click me</button>
```

## Variables

Forget variables. No such thing. Everything is a constant, unless it's temporary.

You can use constants that get calculated in the react function, because they get recalculated every time the component gets rerendered.

## Hooks

Intead of normal things, we use functions called **HOOKS**, which always start with `use`.

**useState()**, **useEffect()**, **useContext()**, **useReducer()**, **useRef()**, **useMemo()**, **useCallback()**

### States / useState() Hook Function
If you need variables, use state instead. 

These are smarter than variables because the ui can be updated without changing it, and when they update the UI automatically updates.

```
import { useState } from 'react';
()=>{  const [count, setCount] = useState(0);  }
```
you always declare it with a const for the variable and setter function.

these states are unique to each instance of the component, and not accessible from other components.

## Refs / useRef() Hook Function

Refs are like states, but aren't used for display, so they don't trigger any rerendering when they change.

These are good for when you need to do non-react things.

## Effects / useEffect() Hook Function

Effects connect to external systems.

### Contexts / useContext() Hook Function
Now here is where you can share values between components.
You can also do this just by "lifting the state up" (putting states in a shared parent component) and then passing them down as props, but it can get messy fast.