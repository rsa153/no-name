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
  findByDate: function(req, res) {
    // find by date range query, could be per date or specific dates range
    if (req.query.dateDue){
      console.log("----- Tasks contoller findByDate ----- req.query -------")
      console.log(req.query)
      req.query.dateDue = JSON.parse(req.query.dateDue)
      console.log("----- Tasks contoller findByDate ----- req.query JSON parse -------")
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
  findByDateAggregate: function(req, res) {
    // find by date range query, could be per date or specific dates range
    if (req.query.dateDue){
      console.log("----- Tasks contoller findByDateAggregate ----- req.query -------")
      console.log(req.query)
      req.query.dateDue = JSON.parse(req.query.dateDue)
      console.log("----- Tasks contoller findByDateAggregate ----- req.query JSON parse -------")
      console.log(req.query)
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
        console.log("----- Tasks contoller findByDateAggregate ----- dbModel -------")
        console.log(req.query)
        console.log("----- Tasks contoller findByDateAggregate ----- dateDue -------")
        console.log(req.query.dateDue)
        console.log(req.query.dateDue.$gte)
        console.log(req.query.dateDue.$lte)
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
  groupByDate: function(req, res) {
    console.log("----- Tasks contoller groupBy -------")
    db.Task
      .aggregate([
        { $group : {
          _id : { month: { $month: "$dateDue" }, day: { $dayOfMonth: "$dateDue" }, year: { $year: "$dateDue" } },
          tasks: { $push : { _id: "$_id", name: "$name", isComplete: "$isComplete", dateDue: "$dateDue", dateCreated: "$dateCreated"} },
          countComplete: { $sum: { $cond: [{ $eq:["$isComplete", true] }, 1, 0] } },
          countTasks: { $sum: 1 }
        }}
      ])
      .then(dbModel => {
        console.log(dbModel)
        res.json(dbModel)
      })
      .catch(err => res.status(422).json(err));
  }
};
