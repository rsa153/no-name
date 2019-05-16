const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const bcrypt = require("bcrypt");
const saltRounds = 10;

const userSchema = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  tasks: { type: [String] }
});


// Define schema methods

// userSchema.pre("save", function(next) {
// 	var user = this;
// 	bcrypt.genSalt(saltRounds, function(err, salt) {
// 		bcrypt.hash(user.password, salt, function(err, hash) {
// 			console.log(user.password)
// 			user.password = hash;
// 			next();
// 		});
// 	});
// });


// Define schema methods
userSchema.methods = {
	checkPassword: function (inputPassword) {
		return bcrypt.compareSync(inputPassword, this.password)
	},
	hashPassword: plainTextPassword => {
		return bcrypt.hashSync(plainTextPassword, 10)
	}
}

// Define hooks for pre-saving
userSchema.pre('save', function (next) {
	if (!this.password) {
		console.log('models/user.js ======= NO PASSWORD PROVIDED =======')
		next()
	} else {
		console.log('models/user.js hashPassword in pre save');
		console.log("Before hashing")
		console.log(this.password)
		this.password = this.hashPassword(this.password)
		console.log("After hashing")
		console.log(this.password)
		next()
	}
})


const User = mongoose.model("User", userSchema);

module.exports = User;