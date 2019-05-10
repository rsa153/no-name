const router = require("express").Router();
const userController = require("../../controllers/userController");

// Matches with "/api/user"
router.route("/")
  .get(userController.findAll)
  .post(userController.create);

// Matches with "/api/user/:id"
router.route("/:id")
  .get(userController.findById)
  .put(userController.update)
  .delete(userController.remove);

// Rotuer for login - need to update user controller.
router.route("/user")
.post(
    '/login',
    function (req, res, next) {
        console.log(req.body)
        next()
    },
    passport.authenticate('local'),
    (req, res) => {
        var userInfo = {
            email: req.user.email
        };
        res.send(userInfo);
    }
)

module.exports = router;