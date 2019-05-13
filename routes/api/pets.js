const router = require("express").Router();
const petsController = require("../../controllers/petsController");

// Matches with "/api/tasks"
// router.route("/")
//   .get(petsController.findAll)
//   .post(petsController.create);

// Matches with "/api/tasks/groups"
// router.route("/groups")
//   .get(tasksController.groupByDate);

// Matches with "/api/tasks/date"
// router.route("/date")
//   .get(tasksController.findByDate);

router.route("/")
  .get(petsController.findUserPet);

router.route("/failTasks/:path")
  .post(petsController.failTasks);

// Matches with "/api/tasks/:id"
// router
//   .route("/:id")
//   .get(tasksController.findById)
//   .put(tasksController.update)
//   .delete(tasksController.remove);

module.exports = router;
