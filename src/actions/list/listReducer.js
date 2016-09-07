/**
 * Created by lilei on 16-8-14.
 */
import {ADD_PROJECT, MODIFY_PROJECT, DELETE_PROJECT} from './listAction'
import {combineReducers} from 'redux'

// let projects = {
//   projects: [
//     {
//       name: '123123'
//     }
//   ]
// }


function projects(state = [], action) {

  switch (action.type) {

    case ADD_PROJECT:
      return [
        ...state,
        {
          name: action.name
        }
      ]

    case MODIFY_PROJECT:
      return state.map(function (project, index) {
        if (action.index == index)
          project.name = action.name;
        return project;
      });

    case DELETE_PROJECT:
      return (function () {
        console.log(state.splice(action.index, 1))
        return state
      })()

    default:
      return state;
  }
}


const listProjectApp = combineReducers({
  projects
});

export default listProjectApp;
