const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const bcrypt = require("bcrypt");

const userSchema = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  tasks: { type: [String] }
});


// Define schema methods
userSchema.methods = {
	checkPassword: function (inputPassword) {
		return bcrypt.compareSync(inputPassword, this.password)
	},
	hashPassword: plainTextPassword => {
		return bcrypt.hashSync(plainTextPassword, bcrypt.genSaltSync(10), null)
	}
}

// Define hooks for pre-saving
userSchema.pre('save', function (next) {
	if (!this.password) {
		console.log('------ models/user ======= NO PASSWORD PROVIDED =======')
		next()
	} else {
		console.log('----- models user hashPassword in pre save ------');
		this.password = this.hashPassword(this.password)
		next()
	}
})


const User = mongoose.model("User", userSchema);

module.exports = User;