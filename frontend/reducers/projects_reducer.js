import merge from 'lodash/merge';
import { RECEIVE_PROJECT, RECEIVE_ALL_PROJECTS } from '../actions/project_actions';

const ProjectsReducer = (state = {}, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_PROJECT:
    const newProject = {[action.project.id]: action.project};
    return merge({}, state, newProject);
    case RECEIVE_ALL_PROJECTS:
      return action.projects;
    default:
      return state;
  }
};

export default ProjectsReducer;
