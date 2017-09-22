import values from 'lodash/values';

export const selectAllProjects = state =>{
  return (
 values(state.entitiesReducer.projects)
 );
};
