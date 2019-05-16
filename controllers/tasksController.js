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
  findByDateAggregate: function(req, res) {
    console.log("----- tasksController --- findByDate Aggregate")
    console.log("checking user")
    console.log(req.user)
    // show task based on date selected on calendar
    if (req.query.dateDue){
      req.query.dateDue = JSON.parse(req.query.dateDue)
    }
    db.Task
      // .find(req.query)
      .aggregate([
        { $match: {
            // dateDue: req.query.dateDue,
            dateDue: {
              "$gte": new Date(req.query.dateDue.$gte),
              "$lte": new Date(req.query.dateDue.$lte)
            },
            // email: req.user.email
        }},
        { $group : {
          _id : { month: { $month: "$dateDue" }, day: { $dayOfMonth: "$dateDue" }, year: { $year: "$dateDue" } },
          tasks: { $push : { _id: "$_id", name: "$name", isComplete: "$isComplete", dateDue: "$dateDue", dateCreated: "$dateCreated"} },
          countComplete: { $sum: { $cond: [{ $eq:["$isComplete", true] }, 1, 0] } },
          countTasks: { $sum: 1 }
        }}
      ])
      .sort({ date: -1 })
      // .then(dbModel => res.json(dbModel))
      .then(dbModel => {

        res.json(dbModel)
      })
      .catch(err => res.status(422).json(err));
  },
  groupByDateWeekly: function(req, res) {
    console.log("----- tasksController --- groupByDateWeekly ----")
    console.log("checking user")
    console.log(req.user)
    // show all tasks for a week, 3 days before - today - 3 days after
    if (req.query.dateDue){
      req.query.dateDue = JSON.parse(req.query.dateDue)
    }
    db.Task
      // .find(req.query)
      .aggregate([
        { $match: {
            // dateDue: req.query.dateDue,
            dateDue: {
              "$gte": new Date(req.query.dateDue.$gte),
              "$lte": new Date(req.query.dateDue.$lte)
            },
            // email: req.user.email
        }},
        { $group : {
          _id : { month: { $month: "$dateDue" }, day: { $dayOfMonth: "$dateDue" }, year: { $year: "$dateDue" } },
          tasks: { $push : { _id: "$_id", name: "$name", isComplete: "$isComplete", dateDue: "$dateDue", dateCreated: "$dateCreated"} },
          countComplete: { $sum: { $cond: [{ $eq:["$isComplete", true] }, 1, 0] } },
          countTasks: { $sum: 1 }
        }},
        { $sort: { _id: 1 }}
      ])
      .sort({ date: -1 })
      // .then(dbModel => res.json(dbModel))
      .then(dbModel => {
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

    db.Task
      .findById({ _id: req.params.id })
      .then(dbModel => dbModel.remove())
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  groupByDate: function(req, res) {
    // show all tasks ever created, do we want to remove this?
    db.Task
      .aggregate([
        { $group : {
          _id : { month: { $month: "$dateDue" }, day: { $dayOfMonth: "$dateDue" }, year: { $year: "$dateDue" } },
          tasks: { $push : { _id: "$_id", name: "$name", isComplete: "$isComplete", dateDue: "$dateDue", dateCreated: "$dateCreated"} },
          countComplete: { $sum: { $cond: [{ $eq:["$isComplete", true] }, 1, 0] } },
          countTasks: { $sum: 1 }
        }},
        { $sort: { _id: 1 }}
      ])
      .then(dbModel => {
        res.json(dbModel)
      })
      .catch(err => res.status(422).json(err));
  }
};
