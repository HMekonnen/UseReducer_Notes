import React, { useReducer, useState } from 'react';
import {ACTIONS} from './App.js'         // Import ACTIONS from app.js to be able to use it in Todo.js


function Todo({todo, dispatch}) {   // takes in a to-do , dispatch -placing it here gives us access to dispatch in Todo()
    return ( 
        <div className='toDo'>

 {/* style = what happens when its complete/incomplete - black/grey */}


<span style={{color: todo.complete? '#AAA': '#000'}}>  
    {todo.name}
    
</span>

{/* dispatch() allows us to no longer need so many handle's -i.e handleSubmit, handleEvent, etc. It handles all our use cases - see app.js function reducer() for more context */}

<button onClick={()=> dispatch({type: ACTIONS.TOGGLE_TODO, payload: {id: todo.id}})}> Toggle </button>           

<button onClick={()=> dispatch({type: ACTIONS.DELETE_TODO, payload: {id: todo.id}})}> Delete </button>


        </div>
     );
}

export default Todo ;