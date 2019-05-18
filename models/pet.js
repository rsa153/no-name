const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const petSchema = new Schema({
    name: { type: String, required: true },
    url: {type: String},
    userEmail: {type: String},
});

const Pet = mongoose.model("Pet", petSchema);

module.exports = Pet;