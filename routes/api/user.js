const express = require('express');
const router = require("express").Router();
const userController = require("../../controllers/userController");

router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/profile', function(req, res, next) {
    res.send(req.user);
});

// Matches with "/api/user"
// router.route("/")
//   .get(userController.findAll)
//   .post(userController.create);

// Matches with "/api/user/:id"
// router.route("/:id")
//   .get(userController.findById)
//   .put(userController.update)
//   .delete(userController.remove);

// router.route("/login")
//   .get(userController.findByEmail)

// router.post('/login', function (req, res, next) {
//   passport.authenticate('local', {session: false}, (err, user, info) => {
//       if (err || !user) {
//           return res.status(400).json({
//               message: 'Something is not right',
//               user   : user
//           });
//       }
//      req.login(user, {session: false}, (err) => {
//          if (err) {
//              res.send(err);
//          }
//          // generate a signed son web token with the contents of user object and return it in the response
//          const token = jwt.sign(user, 'your_jwt_secret');
//          return res.json({user, token});
//       });
//   })(req, res);
// });
module.exports = router;