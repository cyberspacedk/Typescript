import React, {useState, useRef} from 'react'; 

type ToDoListProps = {
  todos: any[]
}


const ToDoList : React.FC <ToDoListProps>= ({todos}) => { 
 

  return ( 
   <ul>
     {todos.map(i=> (
        <li className="todo">
          <label>
            <input type="checkbox" name="" id=""/>
            <span></span>
            <i className="material-icons red-text">delete</i>
          </label>
        </li>
     ))} 
   </ul>
  )
}

export default ToDoList;

 