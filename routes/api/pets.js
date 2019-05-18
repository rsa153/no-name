const router = require("express").Router();
const petsController = require("../../controllers/petsController");

// Matches with "/api/pets"
router.route("/")
  .get(petsController.findUserPet);

// router.route("/failTasks/:path")
//   .post(petsController.failTasks);

// router.route("/advancePet")
//   .get(usersController.getCurrentUser)
//   .then(data => console.log(data))
//       .catch(err => res.status(422).json(err));

module.exports = router;
