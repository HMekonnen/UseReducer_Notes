
import './App.css';
import React, {useState, useReducer} from 'react';


function reducer(state, action){   //// In your reducer(), generally, you will have a conditional statement i.e switch statement or some type of if statement

switch (action.type){             //This switch statement will perform an action on the current state variable based on the 'action.type' passed into it- in this case, 'increment', or 'decrement' - if anything outside of these two is passed into action.type-  default will execute, in this case, state variable will be sent back unchanged.
  
  case 'increment':
  return {count: state.count + 1 }  // Will return state value + 1

  break;

  case 'decrement':
  return {count: state.count - 1 } // Will return state value - 1

  break;

  default:                      // It is good practice to add a default when using switch case, this default will return the original state unchanged.
  return state
}
 
 }


function App() {


  const [state, dispatch] = useReducer(reducer, {count:0}) 

 
  
  //   function reducer() = Function performed on "state"  in this case has an initial value of -> {count: 0} - to get "new state" .
   //         Will take 2 diff params to start: 
   //             Params = state, & action. 

  //      The return value (items in array to the left of useReducer()) is going to be two portions- state, & dispatch: 
  //              1. The State ->  {count: 0},
  //              2. A Function called "dispatch" - what we call to update our state, it will call the function reducer() above, given state & action parameters.
  
       //   The current state, in this instance, {count:0} - is going to be sent as an argument to the "state" param in function reducer()
      //    && whatever we call "dispatch" with, is going to be sent to the "action" param in function reducer(). 
 
     //         -->  function reducer() - will then return our newly updated "state". 
  
  //   N.B: If our state in useReducer() was not an object but a single value instead,  we would use "count" instead of state. 
  //         Example of both: 
  //                      Object ->      const [state,action] = useReducer(reducer,{count:0}) 
  //                         vs
  //                     Single Value -> const [count, action] = useReducer(reducer, 0)
  
  
  


// Original format: function reducer(state, action)

    // function increment() -> Everytime we click '+' button, dispatch() calls -> function reducer({count:0}, increment), passing {type: 'increment"} as an argument.
    //                          Param Breakdown:  (State = {count:0}, Action = {type: 'increment'})

function increment(){
  dispatch({type: 'increment'})
}



     
     // function decrement() -> Everytime we click '-' button, dispatch() calls -> function reducer({count:0}, decrement), passing {type: 'decrement"} as an argument.
    //                           Param Breakdown:  (State = {count:0}, Action = {type: 'decrement'})
function decrement(){
  dispatch({type: 'decrement'})
}


return (
  <>
  
  <button onClick={decrement}> - </button>
 

  <span> {state.count }</span>

  <button onClick={increment}> + </button>
  
  
  </>
);
}


// For Comparison: All the above is the useReducer() equivalent of the useState() example below: 

// function App() {

// const [count, setCount]=useState(0)



//        function increment(){
//          setCount(prevCount => prevCount + 1)
//         }


//        function decrement(){
//         setCount(prevCount=> prevCount - 1)
//        }



//   return (
//     <>
    
//         <button onClick={decrement}> - </button>

      //        <span>{count}</span> 

//          <button onClick={increment}> + </button>
    
    
//     </>
//   );
// }



export default App;
