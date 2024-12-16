
# Notes

This is just some notes on React, for my own reference. Not you. Stop looking at my notes.


## Immutability

React prefers immutability, which means constant variables that don't change, and functions that don't change any data outside of their scope, except with hooks. 

This means you should always create new Arrays and Objects instead of modifying them.

This lets the old data remain, and it can be used to compare or revert, and prevents less unexpected bugs.

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