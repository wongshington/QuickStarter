import merge from 'lodash/merge';
import { RECEIVE_PROJECT, RECEIVE_ALL_PROJECTS, RECEIVE_FUNDING } from '../actions/project_actions';
import { parsePayload } from './selectors';

const ProjectsReducer = (state = {}, action) => {

  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_PROJECT:
      const newProject = {[action.payload.project.id]: action.payload.project};
      return merge({}, state, newProject);
    case RECEIVE_ALL_PROJECTS:
    let parseProjects = parsePayload(action.payload).projects;
      return parseProjects;
    default:
      return state;
  }
};

export default ProjectsReducer;
