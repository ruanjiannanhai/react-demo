/**
 * Created by lilei on 16-8-13.
 */
import { createStore } from 'redux'
import todoApp from './reducer'
import { addTodo, toggleTodo, setVisibilityFilter, VisibilityFilter } from './action'

let store = createStore(todoApp);

let unSubscribe = store.subscribe(() => console.log(store.getState()))

console.log(store.getState())

store.dispatch(addTodo('1111'))

store.dispatch(addTodo('2222'))

store.dispatch(toggleTodo(0))

store.dispatch(setVisibilityFilter(VisibilityFilter.SHOW_COMPLETE))

