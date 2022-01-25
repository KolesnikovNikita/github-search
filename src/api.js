import superagent from "superagent";

export const getUserInfo = () => {
  return superagent.get(`https://api.github.com/users`).then((res) => res.body);
};
