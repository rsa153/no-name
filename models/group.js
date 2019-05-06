const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const groupSchema = new Schema({
  owner: { type: String, required: true },
  name: { type: String, required: true },
  description: { type: String, required: true },
  // members: { type: [String] },
  members: [{ email: { type: [String], required: true }
    }],
  image: { type: String }
});

const Group = mongoose.model("Group", groupSchema);

module.exports = Group;
