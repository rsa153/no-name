const db = require("../models");

// Defining methods for the tasksController
module.exports = {
  findAll: function(req, res) {
    db.Task
      .find(req.query)
      .sort({ date: -1 })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findAllByDate: function(req, res) {
    // findByDateRange
    if (req.query.dateDue){
      console.log("----- Tasks contoller findAllByDate ----- req.query -------")
      console.log(req.query)
      req.query.dateDue = JSON.parse(req.query.dateDue)
      console.log("----- Tasks contoller findAllByDate ----- req.query JSON parse -------")
      console.log(req.query)
    }
    db.Task
      .find(req.query)
      .sort({ date: -1 })
      // .then(dbModel => res.json(dbModel))
      .then(dbModel => {
        console.log(dbModel)
        res.json(dbModel)
      })
      .catch(err => res.status(422).json(err));
  },
  findById: function(req, res) {
    db.Task
      .findById(req.params.id)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  create: function(req, res) {
    console.log("----- Tasks contoller create -------")
    console.log(req.body)
    db.Task
      .create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  update: function(req, res) {
    db.Task
      .findOneAndUpdate({ _id: req.params.id }, req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  remove: function(req, res) {
    console.log("----- Tasks contoller remove -------")
    console.log(req.params)

    db.Task
      .findById({ _id: req.params.id })
      .then(dbModel => dbModel.remove())
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  groupBy: function(req, res) {
    console.log("----- Tasks contoller groupBy -------")
    db.Task
      .aggregate(
       [ { $group : {
           _id : { month: { $month: "$dateDue" }, day: { $dayOfMonth: "$dateDue" }, year: { $year: "$dateDue" } },
           tasks: { $push : { _id: "$_id", name: "$name", isComplete: "$isComplete", dateDue: "$dateDue", dateCreated: "$dateCreated"} },
        }} ]
      )
      .then(dbModel => {
        console.log(dbModel)
        res.json(dbModel)
      })
      .catch(err => res.status(422).json(err));
  }
};
