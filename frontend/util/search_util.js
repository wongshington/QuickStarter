
export const getProjectSearch = input => (
  $.ajax({
    method: 'GET',
    data: {input},
    url: 'api/project_searches'
  })

);
