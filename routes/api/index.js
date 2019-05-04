const router = require("express").Router();
const bookRoutes = require("./books");
const groupRoutes = require("./groups");
const gsearchRoutes = require("./gsearch");

// Book routes
router.use("/books", bookRoutes);

// Group routes
router.use("/groups", groupRoutes);

// Google search routes
router.use("/gsearch", gsearchRoutes);

module.exports = router;
