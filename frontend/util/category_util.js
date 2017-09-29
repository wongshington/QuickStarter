export const getCategories = () => (
  $.ajax({
    method: 'GET',
    url: 'api/categories'
  })
);

export const getCategory = (id) => (
  $.ajax({
    method: 'GET',
    url: `api/categories/${id}`
  })
);
