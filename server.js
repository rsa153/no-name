const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require('body-parser');
const session = require('express-session');
const passport = require("passport");
const routes = require("./routes");
const app = express();
const PORT = process.env.PORT || 3001;

const user = require("./routes/api/user");
const auth = require('./routes/api/auth');

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(
	bodyParser.urlencoded({
		extended: false
	})
)
app.use(bodyParser.json())

app.use(
	session({
		secret: "secret",
		key: "site-cookie",
		resave: false, 
    saveUninitialized: false,
    cookie: {
        expires: 600000
    }
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
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/atomicmuffin");

// Start the API server
app.listen(PORT, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});

module.exports = app;