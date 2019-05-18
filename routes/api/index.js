const router = require("express").Router();
const taskRoutes = require("./tasks");
const userRoutes = require("./user");
const petRoutes = require("./pets");
const sessionRoutes = require("./sessions");

// User routes
router.use("/user", userRoutes);

// Task routes
router.use("/tasks", taskRoutes);

// Pet routes
router.use("/pets", petRoutes);

// Sessions routes
router.use("/sessions", sessionRoutes);

module.exports = router;
