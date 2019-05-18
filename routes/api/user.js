const express = require('express');
const router = require("express").Router();
const User = require("../../models/user")
const userController = require("../../controllers/userController");
const passport = require('../../server/passport')

// Matches with "/api/user"
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

// Matches with "/api/user/profile"
router.get('/profile', function(req, res, next) {
    res.send(req.user);
});


// Authentication

// Matches with "/api/user/currentuser"
// this route is just used to get the user basic info
router.get('/currentuser', (req, res, next) => {
  console.log('===== user!!======')
  console.log(req.user)
  if (req.user) {
    return res.json({
      user: req.user
    })
  } else {
    return res.json({
      user: null
    })
  }
})


// Matches with "/api/user/login"

// router.route("/login")
//   .post(userController.logIn);
//   .get(userController.getLogin);


router.get('/login', function (req, res) {
  console.log("------- router user get.login ------- ")
  // console.log(req.flash('error'));
  // console.log(req.flash())
  // console.log(res)
  res.send();
});



router.post('/login', function(req, res, next ){
    passport.authenticate('local', function(err, user, info) {
      console.log("---- routes user --- post login -----")
      console.log(err)
      console.log(user)
      console.log(info)

      if (err) { return next(err) }
      if (!user) {
        console.log("---- ! user -----")
        return res.status(401).json({ message: "Invalid username/password" })
        }
      console.log("------ router user post login ------- no req.login")

      // Using custom callback nedds to manually
      // establish session with req.login

      req.logIn(user, function (err) {
        if (err) { return next(err); }
        // return res.redirect('/users/' + user.username);
        // return res.json(user);
        return res.json({ user: user });
      });
    })(req, res, next);
});



// Matches with "/api/user/signup"
router.route("/signup")
  .post(userController.signUp);

// Matches with "/api/user/logout"
router.route("/logout")
  .post(userController.logOut);


module.exports = router;