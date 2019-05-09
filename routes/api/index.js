const router = require("express").Router();
const taskRoutes = require("./tasks");
const userRoutes = require("./user");

// User routes
router.use("/user", userRoutes);

// Task routes
router.use("/tasks", taskRoutes);

module.exports = router;
