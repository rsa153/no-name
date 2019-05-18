const router = require("express").Router();
const taskRoutes = require("./tasks");
const userRoutes = require("./user");
const petRoutes = require("./pets");

// User routes
router.use("/user", userRoutes);

// Task routes
router.use("/tasks", taskRoutes);

//Pet routes
router.use("/pets", petRoutes);



module.exports = router;
