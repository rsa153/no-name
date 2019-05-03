const router = require("express").Router();
const gsearchController = require("../../controllers/gsearchController");

// Matches "/api/gsearch"
router.route('/')
  .get(gsearchController.findAll);

module.exports = router;
