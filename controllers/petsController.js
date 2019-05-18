const db = require("../models");

// Defining methods for the petsController
module.exports = {
  findUserPet: function(req, res) {
    db.Pet
      .findOne({userEmail: "d@yahoo.com"})
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  failTasks: function(req, res) {
    console.log(req.params);
  }
};
