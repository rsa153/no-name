const router = require("express").Router();
const groupRoutes = require("./groups");

// Group routes
router.use("/groups", groupRoutes);

module.exports = router;
