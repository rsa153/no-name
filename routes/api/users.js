const router = require("express").Router();
const usersController = require("../../controllers/usersController");

router.route("/getcurrentuser")
  .get(usersController.getcurrentuser);

// Matches with "/api/user"
router.route("/")
  .get(usersController.findAll)
  .post(usersController.create);

// Matches with "/api/user/:id"
router.route("/:id")
  .get(usersController.findById)
  .put(usersController.update)
  .delete(usersController.remove);

  //matches with "/api/user/saveLogin/:currentUserEmail"
// router.route("/saveLogin/:currentUserEmail")
//   .get(userController.saveLoginTime)

// Matches with "/api/user/getLoggedInUser"



module.exports = router;