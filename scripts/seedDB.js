const mongoose = require("mongoose");
const db = require("../models");

// This file empties the Books collection and inserts the books below

mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/atomicmuffin"
);


const groupsSeed = [
  {
    owner: "user 1",
    name: "The Ultimate Dead Zone",
    description: "description 1",
    members: [{email: "member 1"}, {email: "member 2"}]
  }, {
    owner: "user 1",
    name: "The Catcher in the Rye again",
    description: "description 2",
    members: [{email: "member 1"}, {email: "member 2"}]
  }
];


db.Group
  .deleteMany({})
  .then(() => db.Group.collection.insertMany(groupsSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });

const tasksSeed = [
  {
    user: "user 1",
    name: "go to the beach",
    isComplete: false,
    dateCreated: new Date(),
    dateDue: new Date(),
  },
  {
    user: "user 1",
    name: "eat ice cream",
    isComplete: false,
    dateCreated: new Date(),
    dateDue: new Date(),
  },
  {
    user: "user 1",
    name: "drink coffee",
    isComplete: false,
    dateCreated: new Date(),
    dateDue: new Date(),
  }
];

db.Task
  .deleteMany({})
  .then(() => db.Task.collection.insertMany(tasksSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
