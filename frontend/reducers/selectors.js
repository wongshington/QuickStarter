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

export const formatProjects = (projects) =>(
  projects.reduce( (acc, curr) => {
    acc[curr.id] = curr;
    return acc;
  }, {} )
);

export const categoryProjects = (catId, projects) => {
  const result = Object.values(projects).reduce( (acc, proj) => {
      if (proj.category_id == catId){
        acc.push(proj);
      }
      return acc;
    }, []);
    return result;
};

