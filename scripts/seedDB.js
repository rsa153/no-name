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
    name: "The Dead Zone",
    description: "description 1",
    members: [{email: "member 1"}, {email: "member 2"}]
  }, {
    owner: "user 1",
    name: "The Catcher in the Rye",
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