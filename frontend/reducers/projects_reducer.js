import merge from 'lodash/merge';
import { RECEIVE_PROJECT, RECEIVE_ALL_PROJECTS, RECEIVE_FUNDING } from '../actions/project_actions';
import { parsePayload } from './selectors';

const ProjectsReducer = (state = {}, action) => {
let newState;
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_PROJECT:
         newState = merge({}, state);
         newState[action.payload.project.id] = action.payload.project;
         // just redid this file
      return newState;


    case RECEIVE_ALL_PROJECTS:
    let parseProjects = parsePayload(action.payload).projects;
      return parseProjects;
    default:
      return state;
  }
};

export default ProjectsReducer;
