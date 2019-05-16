const passport = require('passport')
const LocalStrategy = require("passport-local").Strategy;
const User = require('../models/user')
const userController = require("../controllers/userController");


// called on login, saves the id to session req.session.passport.user = {id:'..'}
passport.serializeUser((user, done) => {
	console.log('=== Serialize ... called ===')
	console.log(user) // the whole raw user object!
	console.log('---------')
	done(null, { _id: user._id })
})

// user object attaches to the request as req.user
passport.deserializeUser((id, done) => {
	console.log('------ Deserialize ... called ----- ')
	User.findOne(
		{ _id: id },
		(err, user) => {
			console.log('======= DESERIALIZE USER CALLED ======')
			console.log(user)
			console.log('--------------')
			done(null, user)
		}
	)
})


//  Use Strategies
passport.use(
  new LocalStrategy(
    { usernameField: "email", passwordField: "password" },
    function (email, password, done) {
    User.findOne({ email: email }, (err, user) => {
      console.log("----- HAHA --- passport User.find ---- ")
      console.log(err)
      console.log(user)
      if (err) { return done(err); }
      if (!user) {
        return done(null, false, {
          message: "Incorrect username/password"
        });
      }
      if (!user.checkPassword(password)) {
        return done(null, false, {
          message: "Incorrect username/password"
        });
      }
      return done(null, user, {
        message: 'Logged In Successfully'
      });
    });
  })
);

module.exports = passport