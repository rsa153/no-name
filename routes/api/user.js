const router = require("express").Router();
const userController = require("../../controllers/userController");
const passport = require("../../client/passport");

// Matches with "/api/user"
router.route("/")
  .get(userController.findAll)
  .post(userController.create);

// Matches with "/api/user/:id"
router.route("/:id")
  .get(userController.findById)
  .put(userController.update)
  .delete(userController.remove);

router.route("/login")
  .get(userController.findByEmail)

// Rotuer for login - need to update user controller.
router.route("/user")
.post(passport.authenticate('local'),
    (req, res) => {
        var userInfo = {
            email: req.user.email
        };
        res.send(userInfo);
    }
)

module.exports = router;