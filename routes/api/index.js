const router = require("express").Router();
const bookRoutes = require("./books");
const gsearchRoutes = require("./gsearch");

// Book routes
router.use("/books", bookRoutes);

// Google search routes
router.use("/gsearch", gsearchRoutes);

module.exports = router;
