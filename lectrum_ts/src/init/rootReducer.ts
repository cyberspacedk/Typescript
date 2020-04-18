// Core
import { combineReducers } from 'redux';

// Reducers
import { starshipsReducer as starships } from '../bus/starships/reducer';

export const rootReducer = combineReducers({
  starships,
});

// Используем интерференцию на стор, забирая его типизацию
// AppState = затипизированный стор
// Плюсы - не нужно писать отдельно типизацию стора, мы сами знаем все его поля
export type AppState = ReturnType<typeof rootReducer>;


/*
  Хук  useSelector --------------------------------------
  в хук передаем аргументом стор и передаем его типизацию AppState
  useSelector((state:AppState)=>state.someField)
*/
