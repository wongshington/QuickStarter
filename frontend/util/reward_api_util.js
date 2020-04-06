export const getRewards = (projectId) =>
  $.ajax({
    method: "GET",
    url: `/api/projects/${projectId}/rewards`,
  });

export const postReward = (reward) => {
  return $.ajax({
    method: "POST",
    url: `/api/projects/${reward.project_id}/rewards`,
    data: { reward },
  });
};

export const postBacking = (userId, reward) => {
  return $.ajax({
    method: "POST",
    url: `/api/users/${userId}/purchased_reward`,
    data: { reward },
  });
};
