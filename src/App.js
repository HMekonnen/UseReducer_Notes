
import './App.css';
import React, {useState, useReducer} from 'react';


function reducer(state, action){

  return {count: state.count +1 }  // Everytime we call dispatch, it is going to increment our count by 1. 
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
  
  
  



    // function increment() -> everytime we click '+' button, dispatch() calls -> function reducer() 
//- Which  at this time is only handling ONE state, our increment state a.k.a function increment(): It takes our count and adds one to it 

function increment(){
  dispatch()
}


function decrement(){

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
