/**
 * Created by lilei on 16-8-14.
 */
import listProjectApp from './listReducer'
import {createStore} from 'redux'
import {addProject, modifyProject, deleteProject} from './listAction'

let store = createStore(listProjectApp);

console.log(store.getState());

store.subscribe(function () {
  console.log(store.getState());
});

store.dispatch(addProject('龙湖时代天街'));
store.dispatch(addProject('华润橡树湾'));
store.dispatch(modifyProject('华润橡树湾1',1));
store.dispatch(deleteProject(1))

