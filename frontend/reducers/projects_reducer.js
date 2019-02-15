import merge from 'lodash/merge';
import { RECEIVE_PROJECT, RECEIVE_RANDOM_PROJECT, RECEIVE_ALL_PROJECTS, RECEIVE_FUNDING } from '../actions/project_actions';
import { RECEIVE_CATEGORY } from '../actions/category_actions';
import { parsePayload, formatProjects } from './selectors';

const ProjectsReducer = (state = {}, action) => {
  let newState;
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_CATEGORY:
         const projects = formatProjects(action.projects);
         newState = merge({}, state, projects);
      return newState;
    case RECEIVE_PROJECT:
         newState = merge({}, state);
         newState[action.payload.project.id] = action.payload.project;
      return newState;
    case RECEIVE_RANDOM_PROJECT: 
        newState = merge({}, state);
        newState[action.payload.project.id] = action.payload.project;
      return newState;
    case RECEIVE_ALL_PROJECTS:
        const parseProjects = parsePayload(action.payload).projects;
        newState = merge({}, state, parseProjects);
      return newState;
    default:
      return state;
  }
};

export default ProjectsReducer;
