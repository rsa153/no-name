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
    dateCreated: new Date(2019, 4, 12),
    dateDue: new Date(2019, 4, 12),
  },
  {
    user: "user 1",
    name: "eat ice cream",
    isComplete: false,
    dateCreated: new Date(2019, 4, 13),
    dateDue: new Date(2019, 4, 13),
  },
  {
    user: "user 1",
    name: "eat avocado",
    isComplete: false,
    dateCreated: new Date(2019, 4, 14),
    dateDue: new Date(2019, 4, 14),
  },
  {
    user: "user 1",
    name: "drink more water",
    isComplete: false,
    dateCreated: new Date(2019, 4, 14),
    dateDue: new Date(2019, 4, 14),
  },
  {
    user: "user 1",
    name: "swim at the lake",
    isComplete: false,
    dateCreated: new Date(2019, 4, 15),
    dateDue: new Date(2019, 4, 15),
  },
  {
    user: "user 1",
    name: "drink coffee",
    isComplete: false,
    dateCreated: new Date(2019, 4, 15),
    dateDue: new Date(2019, 4, 15),
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
      name: "David",
      email: "d@yahoo.com",
      password: "123",
      isLoggedIn: "true",
      lastLogin: "Mon May 13 2019",
      lastLogout: ""
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
    name: "Flower 0",
    url: "seed.jpg",
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