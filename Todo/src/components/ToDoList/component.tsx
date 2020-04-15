import React, {useState, useRef} from 'react'; 
import { TodoItem } from '../../interfaces';

type ToDoListProps = {
  todos: TodoItem[]
  onToggle(id:number): void
  onRemove: (id:number)=> void
}


const ToDoList : React.FC <ToDoListProps>= ({todos, onRemove, onToggle}) => { 
 
  if(!todos.length){
    return <p className="center">No items yet</p>
  }

  const removeHandler = (e: React.MouseEvent, id:number)=>{
    e.preventDefault();
    onRemove(id)
  }

  return ( 
   <ul>
     {todos.map(i=> {
       const classes = ['todo']; 
       if(i.completed){
         classes.push('completed')
       }
       return(
        <li className={classes.join(' ')} key={i.id}>
          <label>
            <input type="checkbox" checked={i.completed} onChange={()=>onToggle(i.id)}/>
            <span>{i.title}</span>
            <i className="material-icons red-text" onClick={(e)=>removeHandler(e, i.id)}>delete</i>
          </label>
        </li>
     )})} 
   </ul>
  )
}

export default ToDoList;

 
/* 
Хендлеры которые передаются в пропсы описываются несколькими способами

  onRemove(id:number):void
  
  onRemove: (id:number)=> void

если хендлеры необязательные то ставим ? 
example:
  onRemove?(id:number):void 
  onRemove?: (id:number)=> void

*/