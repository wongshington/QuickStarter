export const getProjects = (data) =>
  $.ajax({
    method: "GET",
    url: "api/projects",
    data,
  });

export const getProject = (id) =>
  $.ajax({
    method: "GET",
    url: `api/projects/${id}`,
  });

export const createProject = (project) => {
  return $.ajax({
    method: "POST",
    url: `api/projects`,
    data: project,
    contentType: false,
    processData: false,
  });
};

export const patchFundingProject = (project) => {
  return $.ajax({
    method: "PATCH",
    url: `api/projects/${project.id}`,
    data: { project },
  });
};

export const postFunds = (reward) => {
  return $.ajax({
    method: "POST",
    url: `api/projects/${reward.project_id}/rewards`,
    data: { reward },
  });
};

export const fundAmount = (support) => {
  return $.ajax({
    method: "POST",
    url: `api/supporters/`,
    data: { support },
  });
};
