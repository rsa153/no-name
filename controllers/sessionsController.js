const db = require("../models");

// Defining methods for the sessionsController
module.exports = {
  findSessionInfo: function(req, res) {
    db.Session
      .findOne()
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }
};
