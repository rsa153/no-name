const router = require("express").Router();
const groupRoutes = require("./groups");
const taskRoutes = require("./tasks");

// Group routes
router.use("/groups", groupRoutes);

// Task routes
router.use("/tasks", taskRoutes);

module.exports = router;
