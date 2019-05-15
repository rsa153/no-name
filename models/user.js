const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const bcrypt = require("bcrypt");
const saltRounds = 10;

const userSchema = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
  tasks: { type: [String] }
});

// Define schema methods
userSchema.pre("save", function(next) {
	var user = this;
	bcrypt.genSalt(saltRounds, function(err, salt) {
		bcrypt.hash(user.password, salt, function(err, hash) {
			console.log(user.password)
			user.password = hash;
			next();
		});
	});
});

const User = mongoose.model("User", userSchema);

module.exports = User;