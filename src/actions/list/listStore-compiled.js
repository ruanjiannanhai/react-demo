'use strict';

var _listReducer = require('./listReducer');

var _listReducer2 = _interopRequireDefault(_listReducer);

var _redux = require('redux');

var _listAction = require('./listAction');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var store = (0, _redux.createStore)(_listReducer2.default); /**
                                                             * Created by lilei on 16-8-14.
                                                             */


console.log(store.getState());

store.subscribe(function () {
  console.log(store.getState());
});

store.dispatch((0, _listAction.addProject)('龙湖时代天街'));
store.dispatch((0, _listAction.addProject)('华润橡树湾'));
store.dispatch((0, _listAction.modifyProject)('华润橡树湾1', 1));
store.dispatch((0, _listAction.deleteProject)(1));

//# sourceMappingURL=listStore-compiled.js.map