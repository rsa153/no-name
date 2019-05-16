const express = require("express");
// const mongoose = require("mongoose");
const bodyParser = require('body-parser');
const session = require('express-session');
const MongoStore = require('connect-mongo')(session)
const passport = require("passport");
const routes = require("./routes");
const db = require("./server/db");
const app = express();
const PORT = process.env.PORT || 3001;

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(
	bodyParser.urlencoded({
		extended: false
	})
)
app.use(bodyParser.json())

// app.use(
// 	session({
// 		secret: "secret",
// 		key: "site-cookie",
// 		resave: false,
//     saveUninitialized: false,
//     cookie: {
//         expires: 600000
//     }
// 	})
// )


app.use(
	session({
		secret: process.env.APP_SECRET || 'this is the default passphrase',
		store: new MongoStore({
			mongooseConnection: db,
			ttl: 1 * 24 * 60 * 60  // session expiration: 1 day
		}),
		resave: false,
		saveUninitialized: false
	})
)

app.use(passport.initialize());
app.use(passport.session());


// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}
// Add routes, both API and view
app.use(routes);

// Connect to the Mongo DB
// const db = mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/atomicmuffin");

// Start the API server
app.listen(PORT, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});

module.exports = app;