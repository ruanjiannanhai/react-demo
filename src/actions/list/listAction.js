/**
 * Created by lilei on 16-8-14.
 */
export const ADD_PROJECT = 'ADD_PROJECT';
export const MODIFY_PROJECT = 'MODIFY_PROJECT';
export const DELETE_PROJECT = 'DELETE_PROJECT';

export function addProject(name) {
  return {
    type: ADD_PROJECT,
    name
  }
}


export function modifyProject(name,index){
  return {
    type: MODIFY_PROJECT,
    name,
    index
  }
}

export function deleteProject(index){
  return {
    type: DELETE_PROJECT,
    index
  }
}
