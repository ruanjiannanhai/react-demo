/**
 * created by lilei on 16-8-13.
 */
import {VisibilityFilter, ADD_TODO, TOGGLE_TODO, SET_VISIBILITY_FILTER} from './action'
import {combineReducers} from 'redux'

// const initState = {
//   filter: VisibilityFilter.SHOW_ALL,
//   todos: []
// };


const todoApp = combineReducers({
  filter,
  todos
})

function filter(filter = VisibilityFilter.SHOW_ALL, action) {

  switch (action.type) {
    case SET_VISIBILITY_FILTER:
      return action.filter;
    default:
      return filter;
  }
}


function todos(todoArray = [], action) {
  switch (action.type) {
    case ADD_TODO:
      return [
        ...todoArray,
        {
          text: action.text,
          complete: false
        }
      ];

    case TOGGLE_TODO:
      return todoArray.map(function (todo, index) {
        if (action.index == index)
          return Object.assign({}, todo, {
            complete: !todo.complete
          });
        return todo;
      })

    default:
      return todoArray;
  }

}

export default todoApp;
