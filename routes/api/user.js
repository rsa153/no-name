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


router.post('/login', function (req, res, next) {
  console.log("----- route api/user/login -------")
  console.log(req.body)
  console.log('================')
  next()
  },
  passport.authenticate('local'), (req, res) => {
    console.log("------ passport authenticate ------ ")
    console.log('POST to /login')
    console.log('--- req.user -----')
    console.log(req.user)

    const user = JSON.parse(JSON.stringify(req.user))
    const cleanUser = Object.assign({}, user)

    if (cleanUser.local) {
      console.log(`Deleting ${cleanUser.password}`)
      delete cleanUser.password
    }

    res.json({ user: cleanUser })
    console.log('--- cleanUser -----')
    console.log(cleanUser)

    // haha
    // if (req.user) {
    //   res.redirect('/task');
    // } else {
    //   res.redirect('/login');
    // }

  }
)


// Matches with "/api/user/signup"
router.route("/signup")
  .post(userController.signUp);

// Matches with "/api/user/logout"
router.route("/logout")
  .post(userController.logOut);


module.exports = router;