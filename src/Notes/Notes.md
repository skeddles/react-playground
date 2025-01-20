
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

These states are unique to each instance of the component, and not accessible from other components.

If the state needs to be read or written by other components, then you need to lift it up to the topmost common parent, then pass it down as props to each component that needs it.

**State values are fixed per render** - When you update a state with it's set function, it doesn't actually change until it rerenders - the current state is static and will remain until the rerender. No matter how long the current function takes to render, even if it has a timeout, the values of it's state will stay the same - each render is like a separate instance with it's own static values for each state.

You can also pass an **updater function** to a state, which will get evaluated:

```
const [num, setNum] = useState(1);
function handleClick () {
	setNum(n=>n+1);
}
```
In this way you actually *can* access the updated value of a state.

All the setter functions get queued and then evaluated after the function is done, but before the next render (including setting to static values and using updater functions).



#### DRY (Don't Repeat Yourself)

When adding state, you should try to use the minimum amount possible, and avoid repeating anything, or storing any state that isn't absolutely necessary. 

Whenever possible, calculate values on the fly rather than storing them, as you want the simplest state possible.

#### Avoid Impossible States

It shouldn't be possible for a state to represent something that the user should never see.

So if you have popup messages and bool to say if they're visible, it's possible for them both to be true, but they cant both display at once. Instead you should use a state that ensures only valid state values can exist, for example combining these into a single state that says which popup is visible, or can be null if neither is.

This also ties into DRY, because it shouldn't be possible for a two states to conflict. For example don't store a copy of the current history state in one state, and a copy of it in another history state array, instead just store it once in the array and then grab the right one to display.


### Reducers / useReducer() Hook Function

Reducers are states that can store / calculate a more complex state object, and avoids having to pass many states down as props.

Instead of setting in an event handler, you dispatch an "action" (an object)

`dispatch({type: 'actionname', arbitrary: 'data'})`

Then you have a reducer function, which recieves those actions and returns an updated state.

`function myReducer(currentReducerState, actionObject) { return {...currentReducerState} }`

You can then create the reducer state by calling `useReducer()` with the reducer function and the initial state.

`const [myState, dispatch] = useReducer(myReducer, initialState);`

#### Why reducers are good: 
- The reducer function can be moved to it's own file which can make it much cleaner and easier to update. 
- Reducers can also make components a bit cleaner because they only specify the necessary updated data. 
- Reducers can be unit tested separately


### Refs / useRef() Hook Function

Refs are like states, but aren't used for display, so they don't trigger any rerendering when they change.

These are good for when you need to track a variable, but it's not used to display something in the UI, but might be used later for something, like responding to user input.

### Effects / useEffect() Hook Function

Effects run code.

By default they run after a render. But you can also specific a set of states, and then it only runs when they change.

They can also return a cleanup function, which can undo whatever the effect did (so that it can be safely redone when the effect runs again).
(for example clearing event listerers or timeouts)

### Contexts / useContext() Hook Function
Now here is where you can share values between components.
You can also do this just by "lifting the state up" (putting states in a shared parent component) and then passing them down as props, but it can get messy fast.