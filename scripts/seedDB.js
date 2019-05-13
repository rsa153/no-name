const mongoose = require("mongoose");
const db = require("../models");

// This file empties the Books collection and inserts the books below

mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/atomicmuffin"
);

const tasksSeed = [
  {
    user: "user 1",
    name: "go to the beach",
    isComplete: false,
    dateCreated: new Date(2019, 4, 5),
    dateDue: new Date(2019, 4, 5),
  },
  {
    user: "user 1",
    name: "eat ice cream",
    isComplete: false,
    dateCreated: new Date(2019, 4, 5),
    dateDue: new Date(2019, 4, 5),
  },
  {
    user: "user 1",
    name: "eat avocado",
    isComplete: false,
    dateCreated: new Date(2019, 4, 6),
    dateDue: new Date(2019, 4, 6),
  },
  {
    user: "user 1",
    name: "drink more water",
    isComplete: false,
    dateCreated: new Date(2019, 4, 6),
    dateDue: new Date(2019, 4, 6),
  },
  {
    user: "user 1",
    name: "swim at the lake",
    isComplete: false,
    dateCreated: new Date(2019, 4, 7),
    dateDue: new Date(2019, 4, 7),
  },
  {
    user: "user 1",
    name: "drink coffee",
    isComplete: false,
    dateCreated: new Date(2019, 4, 7),
    dateDue: new Date(2019, 4, 7),
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

  const userSeed = [
    {
      name: "user 1",
      email: "test1",
      password: "description 1",
      cpassword: "description 1"
    },
    {
      name: "user 2",
      email: "test2",
      password: "description 2",
      cpassword: "description 2"
    }
  ];


db.User
.deleteMany({})
.then(() => db.User.collection.insertMany(userSeed))
.then(data => {
  console.log(data.result.n + " records inserted!");
  process.exit(0);
})
.catch(err => {
  console.error(err);
  process.exit(1);
});

const petsSeed = [
  {
    name: "Flower 1",
    url: "flower1.png",
    userEmail: "d@yahoo.com"
    // dateCreated: new Date().getDate().toString()
  }
];

db.Pet
  .deleteMany({})
  .then(() => db.Pet.collection.insertMany(petsSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });