'use strict';

var _redux = require('redux');

var _reducer = require('./reducer');

var _reducer2 = _interopRequireDefault(_reducer);

var _action = require('./action');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var store = (0, _redux.createStore)(_reducer2.default); /**
                                                         * Created by lilei on 16-8-13.
                                                         */


var unSubscribe = store.subscribe(function () {
  return console.log(store.getState());
});

console.log(store.getState());

store.dispatch((0, _action.addTodo)('1111'));

store.dispatch((0, _action.addTodo)('2222'));

store.dispatch((0, _action.toggleTodo)(0));

store.dispatch((0, _action.setVisibilityFilter)(_action.VisibilityFilter.SHOW_COMPLETE));

//# sourceMappingURL=store-compiled.js.map