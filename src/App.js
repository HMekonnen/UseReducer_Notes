import "./App.css";
import React, { useReducer, useState } from "react";
import Todo from "./Todo.js";

export const ACTIONS = {              // export preceeds const because we want to export ACTIONS variable to "Todo.js"
  ADD_TODO: "add-todo",               // Adds an item to Todo Array
  TOGGLE_TODO: "toggle-todo",         // Marks complete or uncomplete  - item turns light grey when toggled to complete
  DELETE_TODO: "delete-todo",         // Filters list of Todo and displays everything but the 'deleted' item 
};

function reducer(todos, action) {     // params

  switch (action.type) {              // Will perform an action based on the action.type that is passed into function reducer()
    case ACTIONS.ADD_TODO:
      return [...todos, newTodo(action.payload.name)];      // returns -> ..todos = all of our current todos, then we add on->  newToDo(new todo item from input)

      //                ^ Without including 'payload' in function handleSubmit() below,
      //                    ACTIONS.ADD_TODO in function reducer() would not have access to 'action.payload.name'
      //                       AKA the "name" variable that is found in the useState below.
      break;

    case ACTIONS.TOGGLE_TODO:                                 
      return todos.map((todo) => {                          // maps through todos - take all current todos - map over them to get a new list of todo's && we need to take the current todo that we've toggled and set it to complete/incomplete
        if (todo.id === action.payload.id) {                // if todo.id is equal to the current id if thats the case, we want to
          return { ...todo, complete: !todo.complete };     // return ...todo = the entire individual todo item , + complete: !todo.complete.. - it appears as !todo.complete because in our newtoDo, we marked complete as false so now, we'll set it to true.
        }
        return todo;                                        // else return todo item as incomplete - allows us to click toggle again to reverse marking item as complete
      });

      break;



    case ACTIONS.DELETE_TODO:                                               
      return todos.filter((todo) => todo.id !== action.payload.id);          // "If the id of our todo (todo.id) is not equal to the payload.id (!==action.payload.id), then we keep it, otherwise we get rid of it."
      break;

    default:
      return todos;                     // Staple default; if action.type = none of the above, return todos in the condition you received it
  }
}

function newTodo(name) {                                   // newTodo function, param = name 

  return { id: Date.now(), name: name, complete: false };    //- Returns a new "todo item" which includes:  id = date/time at time of creation, name (listed as a param and passed in as argument via input from form), and by default set 'complete': false -- because it's a new to-do item
}

function App() {
  const [todos, dispatch] = useReducer(reducer, []); // Using a simple array because we are only going to have one thing in our state, so an object is not necessary.

  //                                                  NB: dispatch handles all our our use cases - you no longer need to create so many handle's 

  const [name, setName] = useState("");             // state variable to hold and set names for todo items -- using useState. When user inputs value into form, it will be set to "name" using setName function


  function handleSubmit(e) {                  // function handleSubmit() - handles form submissions - i.e handles user input upon submission - End result = creates a new todo item
   
    e.preventDefault();                                // Used in forms to prevent our page from refreshing

    dispatch({ type: ACTIONS.ADD_TODO, payload: { name: name } });               //dispatch(type,{name}) type = thing that you want to do- action, parameters for what we are performing-> payload. Payload was added because function reducer() did not have access to the "name" parameter of newTodo. "payload" = an object that contains all of the variable values we need to  perform the action - in this case, "ACTIONS.ADD_TODO" in function reducer(). NB: Technically, this can be named whatever you want, however, payload is the common namning convention.

    setName("");                                                        // function setName("") -  is set to empty strings and placed in this function so that after we submit the new to-do item, setName(" ") clears our input aka replaces it w/ empty string-> 
  }

  return (
    <>

      {/* Form for input -> handleSubmit controls what happens to our new todo item upon submitting */}

      <form onSubmit={handleSubmit}>      
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}       // onChange we are going to set a variable "e" to be that name -> setName(e.target.value)
        />
      </form>

      {todos.map((todo) => {                              // printing out all of our todo's
        return <Todo key={todo.id} todo={todo} dispatch={dispatch} />;   
      })}
    </>
  );
}

export default App;
