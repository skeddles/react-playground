
# Notes

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

### State
If you need variables, use state instead. 

```
import { useState } from 'react';
()=>{
	const [count, setCount] = useState(0);
}
```
you always declare it with a const for the variable and setter function.

these states are unique to each instance of the component, and not accessible from other components.