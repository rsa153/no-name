const router = require("express").Router();
const sessionsController = require("../../controllers/sessionsController");

// Matches with "/api/sessions"
router.route("/")
  .get(sessionsController.findSessionInfo);

// router.route("/failTasks/:path")
//   .post(petsController.failTasks);

// router.route("/advancePet")
//   .get(usersController.getCurrentUser)
//   .then(data => console.log(data))
//       .catch(err => res.status(422).json(err));

module.exports = router;
