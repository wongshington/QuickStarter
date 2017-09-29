
export const getProjects = data => (
  $.ajax({
    method: 'GET',
    url: 'api/projects',
    data
  })
);

export const getProject = id => (
  $.ajax({
    method: 'GET',
    url: `api/projects/${id}`
  })
);

export const createProject = project => {
  return (
  $.ajax({
    method: "POST",
    url: `api/projects`,
    data: {project}
  })
);
};

export const patchFundingProject = (project) => {
  return (
  $.ajax({
    method: "PATCH",
    url: `api/projects/${project.id}`,
    data: {project}
  })
);
};

export const postFunds = (reward) => {
  return (
  $.ajax({
    method: "POST",
    url: `api/projects/${reward.project_id}/rewards`,
    data: {reward}
  })
);
};
