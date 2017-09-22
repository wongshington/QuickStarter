
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
