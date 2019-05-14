const router = require("express").Router();
const tasksController = require("../../controllers/tasksController");

// Matches with "/api/tasks"
router.route("/")
  .get(tasksController.findAll)
  .post(tasksController.create);

// Matches with "/api/tasks/groups"
router.route("/groups")
  .get(tasksController.groupByDate);

// Matches with "/api/tasks/date"
router.route("/date")
  // .get(tasksController.findByDate);
  .get(tasksController.findByDateAggregate);

// Matches with "/api/tasks/week"
router.route("/week")
  .get(tasksController.groupByDateWeekly);

// Matches with "/api/tasks/iscomplete"
router.route("/iscomplete")
  .get(tasksController.groupByDate);

// Matches with "/api/tasks/:id"
router
  .route("/:id")
  .get(tasksController.findById)
  .put(tasksController.update)
  .delete(tasksController.remove);

module.exports = router;
