const mongoose = require("mongoose");
const moment = require('moment')
const Schema = mongoose.Schema;
const User = mongoose.model('User');

const taskSchema = new Schema({
  // user: { type: String, required: true },
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  name: { type: String, required: true },
  isComplete: { type: Boolean, default: false },
  dateCreated: { type: Date, default: new Date() },
  dateDue: { type: Date, default: new Date() }
});

const Task = mongoose.model("Task", taskSchema);

module.exports = Task;
