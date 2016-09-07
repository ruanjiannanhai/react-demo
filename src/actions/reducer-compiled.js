'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _action = require('./action');

var _redux = require('redux');

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } } /**
                                                                                                                                                                                                     * created by lilei on 16-8-13.
                                                                                                                                                                                                     */


// const initState = {
//   filter: VisibilityFilter.SHOW_ALL,
//   todos: []
// };


var todoApp = (0, _redux.combineReducers)({
  filter: filter,
  todos: todos
});

function filter() {
  var filter = arguments.length <= 0 || arguments[0] === undefined ? _action.VisibilityFilter.SHOW_ALL : arguments[0];
  var action = arguments[1];


  switch (action.type) {
    case _action.SET_VISIBILITY_FILTER:
      return action.filter;
    default:
      return filter;
  }
}

function todos() {
  var todoArray = arguments.length <= 0 || arguments[0] === undefined ? [] : arguments[0];
  var action = arguments[1];

  switch (action.type) {
    case _action.ADD_TODO:
      return [].concat(_toConsumableArray(todoArray), [{
        text: action.text,
        complete: false
      }]);

    case _action.TOGGLE_TODO:
      return todoArray.map(function (todo, index) {
        if (action.index == index) return Object.assign({}, todo, {
          complete: !todo.complete
        });
        return todo;
      });

    default:
      return todoArray;
  }
}

exports.default = todoApp;

//# sourceMappingURL=reducer-compiled.js.map