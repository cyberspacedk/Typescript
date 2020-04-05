import React from 'react'; 
import {BrowserRouter, Switch, Route} from 'react-router-dom'

import NavBar from './components/NavBar';
import TodosPage from './pages/TodosPage';
import AboutPage from './pages/AboutPage'

const App: React.FunctionComponent = ()=>{ 

  return (
  <BrowserRouter>
    <NavBar />
    <div className="container">
       <Switch>
         <Route exact path="/" component={TodosPage} />
         <Route path="/about" component={AboutPage} />

       </Switch>
    </div>
  </BrowserRouter>
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