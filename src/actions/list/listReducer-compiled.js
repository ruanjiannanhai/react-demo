'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _listAction = require('./listAction');

var _redux = require('redux');

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } } /**
                                                                                                                                                                                                     * Created by lilei on 16-8-14.
                                                                                                                                                                                                     */


// let projects = {
//   projects: [
//     {
//       name: '123123'
//     }
//   ]
// }


function projects() {
  var state = arguments.length <= 0 || arguments[0] === undefined ? [] : arguments[0];
  var action = arguments[1];


  switch (action.type) {

    case _listAction.ADD_PROJECT:
      return [].concat(_toConsumableArray(state), [{
        name: action.name
      }]);

    case _listAction.MODIFY_PROJECT:
      return state.map(function (project, index) {
        if (action.index == index) project.name = action.name;
        return project;
      });

    case _listAction.DELETE_PROJECT:
      return function () {
        console.log(state.splice(action.index, 1));
        return state;
      }();

    default:
      return state;
  }
}

var listProjectApp = (0, _redux.combineReducers)({
  projects: projects
});

exports.default = listProjectApp;

//# sourceMappingURL=listReducer-compiled.js.map