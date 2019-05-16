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
// router.get('/google', passport.authenticate('google', {
//   scope: ['profile']
// }))

// router.get(
//   '/google/callback',
//   passport.authenticate('google', {
//     successRedirect: '/',
//     failureRedirect: '/login'
//   })
// )

// this route is just used to get the user basic info
router.get('/user', (req, res, next) => {
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
  console.log('------ before next ------  ')
  next()
  console.log('------ after next ------  ')
  },
  passport.authenticate('local'),
  (req, res) => {
    console.log("------ passport authenticate ------ ")
    console.log('POST to /login')
    console.log('--- req.user -----')
    console.log(req.user)

    const user = JSON.parse(JSON.stringify(req.user)) // hack
    const cleanUser = Object.assign({}, user)

    if (cleanUser.local) {
      console.log(`Deleting ${cleanUser.password}`)
      delete cleanUser.password
    }
    res.json({
      user: cleanUser
    })
  }
)

// Matches with "/api/user/logout"
router.post('/logout', (req, res) => {
  if (req.user) {
    req.session.destroy()
    res.clearCookie('connect.sid') // clean up!
    return res.json({
      msg: 'logging you out'
    })
  } else {
    return res.json({
      msg: 'no user to log out!'
    })
  }
})

// Matches with "/api/user/signup"
router.route("/signup")
  .post(userController.signUp);

// router.post('/signup', (req, res) => {
//   const { email, password } = req.body
//   console.log("----- HAHA ------ Hitting user signup --------")
//   console.log(req.body)

//   // ADD VALIDATION
//   User.findOne({
//     'email': email
//   }, (err, userMatch) => {
//     if (userMatch) {
//       return res.json({
//         error: `Sorry, already a user with the email: ${email}`
//       })
//     }

//     // const newUser = new User({
//     //   'email': email,
//     //   'password': password
//     // })
//     // newUser.save((err, savedUser) => {
//     //   console.log("------ HAHA ------- savedUser here -----")
//     //   console.log(savedUser)
//     //   if (err) return res.json(err)
//     //   return res.json(savedUser)
//     // })

//     console.log("------ HAHA ------- userController create here -----")
//     console.log(req.body)
//     userController.create(req.body)
//   })
// })


module.exports = router;