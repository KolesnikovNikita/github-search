import superagent from "superagent";

export const getUserInfo = (params = {}) => {
  return superagent
    .get(`https://api.github.com/users`)
    .query(params)
    .then((res) => res.body);
};

export const getUserRepos = (user) => {
  return superagent
    .get(`https://api.github.com/users/${user}/repos`)
    .then((res) => res.body);
};
