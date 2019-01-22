import values from 'lodash/values';

export const selectAllProjects = state =>{
  return (
 values(state.entitiesReducer.projects).slice(0,4)
 );
};

export const selectAllCategories = state => {
  return (
    values(state.entitiesReducer.categories)
  );
};

export const selectRewards = rewards => {
  return (
    values(rewards)
  );
};

export const selectSearches = action => {
  return (
    values(action.searches)
  );
};

export const parsePayload = ( payload ) => {
  let projects = {};
  let rewards = {};
  // let payloadValues = Object.values(payload);

Object.values(payload).forEach(
        function (el) {
          projects[el.project.id] = el.project;
            el.rewards.forEach(rewardEl => {rewards[rewardEl.id] = rewardEl;}
            );
        });
  return ( { projects, rewards } );
};
