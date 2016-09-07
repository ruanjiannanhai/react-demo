'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.addProject = addProject;
exports.modifyProject = modifyProject;
exports.deleteProject = deleteProject;
/**
 * Created by lilei on 16-8-14.
 */
var ADD_PROJECT = exports.ADD_PROJECT = 'ADD_PROJECT';
var MODIFY_PROJECT = exports.MODIFY_PROJECT = 'MODIFY_PROJECT';
var DELETE_PROJECT = exports.DELETE_PROJECT = 'DELETE_PROJECT';

function addProject(name) {
  return {
    type: ADD_PROJECT,
    name: name
  };
}

function modifyProject(name, index) {
  return {
    type: MODIFY_PROJECT,
    name: name,
    index: index
  };
}

function deleteProject(index) {
  return {
    type: DELETE_PROJECT,
    index: index
  };
}

//# sourceMappingURL=listAction-compiled.js.map