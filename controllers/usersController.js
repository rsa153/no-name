const db = require("../models");

// Defining methods for the userController
module.exports = {
  getcurrentuser: function(req, res) {
    db.User
      .findOne({isLoggedIn : "true"})
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findAll: function(req, res) {
    db.User
      .find(req.query)
      .sort({ date: -1 })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findById: function(req, res) {
    db.User
      .findById(req.params.id)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  // findLoggedInUser: fu3nction (req, res) {
    // db.User
    //   .findOne({ isLoggedIn: true })
    //   .then(dbModel => res.json(dbModel))
    //   .catch(err => res.status(422).json(err));
  // },

  // Article.find({issaved: true}, null, {sort: {created: -1}}, function(err, data) {
	// 	if(data.length === 0) {
	// 		res.render("placeholder", {message: "You have not saved any articles yet. Try to save some delicious news by simply clicking \"Save Article\"!"});
	// 	}
	// 	else {
	// 		res.render("saved", {saved: data});
	// 	}
	// });



  create: function(req, res) {
    console.log("----- User contoller create -------")
    console.log(req.body)
    db.User
      .create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  update: function(req, res) {
    db.User
      .findOneAndUpdate({ _id: req.params.id }, req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  remove: function(req, res) {
    db.User
      .findById({ _id: req.params.id })
      .then(dbModel => dbModel.remove())
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  getLastLogin: function(req, res) {
    db.User.find({ email: req.params.email })
      .then(function(user){

        console.log(user);
        // res.json(user.);
      });
  }
};
