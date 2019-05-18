const db = require("../models");

// Defining methods for the petsController
module.exports = {
  create: function(req, res) {
    // console.log("----- tasksController --- create ----")
    // console.log("checking user")
    // console.log(req.user)
    // console.log("------ req.body before -----")
    // console.log(req.body)
    req.body.userID = req.user._id

    console.log("------ req.body after -----")
    console.log(req.body)

    db.Pet
      .create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findUserPet: function(req, res) {
    db.Pet
      // .findOne({userEmail: "d@yahoo.com"})
      .findOne({userID: req.user._id})
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  failTasks: function(req, res) {
    console.log(req.params);
  }
};
