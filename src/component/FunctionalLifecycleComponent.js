import React, { useState, useEffect, Component} from 'react';

export default FunctionalLifecycleComponent= (props) =>{
    console.log('render called');
    const [count, setCount] = useState(0);
//use state is a hook that takes variable which is count and the val is set to 0, next variable is setCount
//it returns as array, first being variable, second keeping track
//the hook which is useState this time, has to be used with that created const. which is top level, nowhere else
    const _increment = () => setCount(count+1);
    //setCount lives inside this variable so we only use count, not this.count
    
//componentDidUpdate - Functional style

useEffect(() => {
    console.log('componentDidUpdate called');
})
    
//Watch a variable and have access to it
useEffect(() => {
    console.log(`count is now ${count}`);
}, [count])
//by default, React assumes it is an array 


//coponentDidMount - Functional Style

useEffect(() => {
    console.log('This should only run once');
}, [])

//componentWillUnmount- Functional style

useEffect(() => {
    return () => {
        console.log(' runs when the componenent is removed');
    }
}, [])




return (
        <>
            <h1>Hello from the Functional Lifecycle Component</h1>
            <button onClick= {_increment}>Increment</button>
            <h2>App Count: {count}</h2>
        </>
    )


}