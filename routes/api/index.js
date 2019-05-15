const router = require("express").Router();
const taskRoutes = require("./tasks");
const userRoutes = require("./users");
const petRoutes = require("./pets");

// User routes
router.use("/users", userRoutes);

// Task routes
router.use("/tasks", taskRoutes);
router.use("/pets", petRoutes);

module.exports = router;
