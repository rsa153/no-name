const router = require("express").Router();
const groupRoutes = require("./groups");
const taskRoutes = require("./tasks");
const userRoutes = require("./user");

// Group routes
router.use("/groups", groupRoutes);

// User routes
router.use("/user", userRoutes);

// Task routes
router.use("/tasks", taskRoutes);

module.exports = router;
