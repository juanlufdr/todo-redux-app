import { createReducer, on } from '@ngrx/store';
import { Todo } from './models/todo.model';
import { cleanCompleted, create, deleteTodo, edit, toggleAll, togle } from './todo.actions';

export const initialState: Todo[] = [
    new Todo('Salvar al mundo'),
    new Todo('Vencer a Thanos'),
    new Todo('Comprar traje de Ironman'),
    new Todo('Robar escudo del Capitán América'),

];

const _todoReducer = createReducer(
    initialState,
    on(create, (state, { text }) => [...state, new Todo(text)]),
    on(togle, (state, { id }) => {
      return state.map( todo => {
        if(todo.id === id) {
          return  {
            ...todo,
            complete: !todo.complete
          }
        }
        return todo;
      })
    }),
    on(edit, (state, { id, text }) => {
      return state.map( todo => {
        if(todo.id === id) {
          return  {
            ...todo,
            text
          }
        }
        return todo;
      })
    }),
    on(deleteTodo, (state, { id }) => {
      return state.filter(todo => todo.id !== id)
    }),
    on(toggleAll, (state, { isComplete }) => {
      return state.map( todo => {
        return  {
            ...todo,
            complete : isComplete
          }
      })
    }),
    on(cleanCompleted, (state) => {
      return state.filter(todo => !todo.complete);
    })
);

export function todoReducer(state: Todo[], action) {
    return _todoReducer(state, action);
}
