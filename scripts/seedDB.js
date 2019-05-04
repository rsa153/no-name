const mongoose = require("mongoose");
const db = require("../models");

// This file empties the Books collection and inserts the books below

mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/atomicmuffin"
);


const bookSeed = [{
    title: "The Dead Zone",
    authors: "Stephen King",
    googleId: "123blahblah1"
  },
  {
    title: "The Catcher in the Rye",
    authors: "J.D. Salinger",
    googleId: "123blahblah2"
  },
  {
    title: "The Punch Escrow",
    authors: "Tal M. Klein",
    googleId: "123blahblah3"
  },
  {
    title: "Harry Potter and the Sorcerer's Stone",
    authors: "J.K. Rowling",
    googleId: "123blahblah4"
  },
  {
    title: "Coraline",
    authors: "Neil Gaiman",
    googleId: "123blahblah5"
  },
  {
    title: "Code: The Hidden Language of Computer Hardware and Software",
    authors: "Charles Petzold",
    googleId: "123blahblah6"
  },
  {
    title: "The Everything Store: Jeff Bezos and the Age of Amazon",
    authors: "Brad Stone",
    googleId: "123blahblah7"
  },
  {
    title: "Total Recall: My Unbelievably True Life Story",
    authors: "Arnold Schwarzenegger",
    googleId: "123blahblah8"
  },
  {
    title: "Elon Musk: Tesla, SpaceX, and the Quest for a Fantastic Future",
    authors: "Ashlee Vance",
    googleId: "123blahblah9"
  },
  {
    title: "Steve Jobs",
    authors: "Walter Isaacson",
    googleId: "123blahblah10"
  },
  {
    title: "Astrophysics for People in a Hurry",
    authors: "Neil deGrasse Tyson",
    googleId: "123blahblah11"
  },
  {
    title: "1984",
    authors: "George Orwell",
    googleId: "123blahblah12"
  },
  {
    title: "Frankenstein",
    authors: "Mary Shelley",
    googleId: "123blahblah13"
  },
  {
    title: "The Great Gatsby",
    authors: "F. Scott Fitzgerald",
    googleId: "123blahblah14"
  },
  {
    title: "Born a Crime: Stories from a South African Childhood",
    authors: "Trevor Noah",
    googleId: "123blahblah15"
  }
];

db.Book
  .deleteMany({})
  .then(() => db.Book.collection.insertMany(bookSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });


const groupsSeed = [
  {
    owner: "user 1",
    name: "The Dead Zone",
    description: "description 1"
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
