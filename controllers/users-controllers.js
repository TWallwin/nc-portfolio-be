const { fetchUser, authenticateUser } = require("../models/user-models");

exports.getUser = (req, res, next) => {
  const username = req.params.username;
  Promise.all([
    fetchUser(username),
    authenticateUser(username, req.body.password),
  ])
    .then(([user]) => {
      res.status(200).send({ user });
    })
    .catch(next);
};
