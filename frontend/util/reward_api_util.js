export const getRewards = (projectId) => (
  $.ajax({
    method: 'GET',
    url: `/api/projects/${projectId}/rewards`
  })
);

export const postReward = reward => (
  $.ajax({
    method: 'POST',
    url: `/api/projects/${reward.project_id}/rewards`,
    data: { reward }
  })
);
