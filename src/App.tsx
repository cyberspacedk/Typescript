import React, {useState} from 'react'; 

import NavBar from './components/NavBar';
import ToDoForm from './components/ToDoForm';
import ToDoList from './components/ToDoList';

import {TodoItem} from './interfaces'

const App: React.FunctionComponent = ()=>{ 
  const [todos, setTodos] = useState<TodoItem[]>([]);

  const addHandler = (title:string)=>{
    const newTodo : TodoItem= {
      title,
      id: Date.now(),
      completed: false
    }
    setTodos([newTodo, ...todos]);
  };

  return (
  <>
    <NavBar />
    <div className="container">
       <ToDoForm onAdd={addHandler}/>
       <ToDoList todos={todos}/>
    </div>
  </>
  )
}

export default App;

// React.FC or React.FunctionComponent 
/* 
типизирует компонент (функциональный / классовый)


*/