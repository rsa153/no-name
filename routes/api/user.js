const router = require("express").Router();
const userController = require("../../controllers/userController");

// Matches with "/api/user"
router.route("/")
  .get(userController.findAll)
  .post(userController.create);

// Matches with "/api/user/:id"
router
  .route("/:id")
  .get(userController.findById)
  .put(userController.update)
  .delete(userController.remove);

  //matches with "/api/user/saveLogin/:currentUserEmail"
// router.route("/saveLogin/:currentUserEmail")
//   .get(userController.saveLoginTime)


module.exports = router;