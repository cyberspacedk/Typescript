import React, {useState, useEffect} from 'react'; 

import NavBar from './components/NavBar';
import ToDoForm from './components/ToDoForm';
import ToDoList from './components/ToDoList';

import {TodoItem} from './interfaces'

declare var confirm: (question:string)=> boolean

const App: React.FunctionComponent = ()=>{ 
  const [todos, setTodos] = useState<TodoItem[]>([]); 

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem('todos') || '[]') as TodoItem[];
    setTodos(saved);
  }, []);

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos))
  }, [todos])

  const addHandler = (title:string)=>{
    const newTodo : TodoItem= {
      title,
      id: Date.now(),
      completed: false
    }
    setTodos(prev=> [newTodo, ...prev]);
  };

  const toggleHandler =(id:number)=>{ 
    const updated = todos.map(i=> {  
      if(i.id === id)  i.completed = !i.completed 
      return i;
    }); 
    setTodos(updated) 
  }; 

  const removeHandler = (id:number)=> {
    const shouldRemove = confirm('Are you sure that you wand to delete item ?');
    if(shouldRemove){
      setTodos(prev=> prev.filter(i=> i.id !== id))
    }
  }
  return (
  <>
    <NavBar />
    <div className="container">
       <ToDoForm onAdd={addHandler}/>
       <ToDoList 
        todos={todos} 
        onToggle={toggleHandler} 
        onRemove={removeHandler}
       />
    </div>
  </>
  )
}

export default App;

// React.FC or React.FunctionComponent 
/* 
типизирует компонент (функциональный / классовый)

типизация методов window, например confirm 

1 способ вызвать явно как метод гл. объекта
  window.confirm('Are you sure that you wand to delete item ?');

2. использовать синтаксис TS и объявить переменную и описать ее 
  declare var confirm: (question:string)=> boolean


*/