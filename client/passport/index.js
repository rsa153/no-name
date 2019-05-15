const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const passportJWT = require("passport-jwt");
const JWTStrategy   = passportJWT.Strategy;
const ExtractJWT = passportJWT.ExtractJwt;

// called on login, saves the id to session req.session.passport.user = {id:'..'}
passport.serializeUser((user, done) => {
  console.log("*** serializeUser called, user: ");
  console.log(user); // the whole raw user object!
  console.log("---------");
  done(null, { _id: user._id });
});

// user object attaches to the request as req.user
passport.deserializeUser((id, done) => {
  console.log("DeserializeUser called");
  db.User.findById({ _id: id }, "username", (err, user) => {
    console.log("*** Deserialize user, user:");
    console.log(user);
    console.log("--------------");
    done(null, user);
  });
});

//  Use Strategies
passport.use(
  new LocalStrategy(function(email, password, done) {
    User.findByEmail({ email: email }, (err, user) => {
      if (err) {
        return done(err);
      }
      if (!user) {
        return done(null, false, { message: "Incorrect username" });
      }
      if (!user.verifyPassword(password)) {
        return done(null, false, { message: "Incorrect password" });
      }
      return done(null, user, {message: 'Logged In Successfully'});
    });
  })
);
// module.exports = passport;

passport.use(new JWTStrategy({
	jwtFromRequest: ExtractJWT.fromAuthHeaderAsBearerToken(),
	secretOrKey   : 'your_jwt_secret'
},
function (jwtPayload, cb) {

	//find the user in db if needed. This functionality may be omitted if you store everything you'll need in JWT payload.
	return UserModel.findOneById(jwtPayload.id)
		.then(user => {
			return cb(null, user);
		})
		.catch(err => {
			return cb(err);
		});
}
));