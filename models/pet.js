const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const petSchema = new Schema({
    pet: { type: Number, required: true },
    user: [{ email: [String] }],
});

const Pet = mongoose.model("Pet", petSchema);

module.exports = Pet;