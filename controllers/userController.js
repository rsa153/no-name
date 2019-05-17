const db = require("../models");
const passport = require('../server/passport')

// Defining methods for the userController
module.exports = {
  findAll: function(req, res) {
    db.User
      .find(req.query)
      .sort({ date: -1 })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findById: function(req, res) {
    db.User
      .findById(req.params.id)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findByEmail: function(req, res) {
    console.log("------ userController findByEmail -------")
    console.log(req.body)
    console.log(req.query)
    db.User
      // .findByEmail(req.body.email)
      .find(req.query)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  create: function(req, res) {
    console.log("----- User contoller create -------")
    console.log(req)
    console.log(res)
    // console.log(req.body)
    db.User
      .create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  signUp: function(req, res) {
    console.log("----- User contoller signup -------")
    const { email, password } = req.body
    console.log(req.body)
    console.log("---- signUp Validation -------")
    // ADD VALIDATION
    db.User.findOne({
      'email': email
    }, (err, userMatch) => {
      console.log("---- signUp findOne -------")
      console.log(err)
      console.log(userMatch)
      if (err) {
        console.log("User signUp error: ", err)
        res.redirect("/signup")

      } else if (userMatch) {
        console.log(" --- uh oh --- existing user Match ----- ")
        res.redirect("/signup")

        // return res.json({
        //   error: `Sorry, already a user with the email: ${email}`
        // })

      } else {
        console.log("------ HAHA ------- userController create here -----")
        console.log(req.body)

        db.User
          .create(req.body)
          .then(dbModel => res.json(dbModel))
          .catch(err => res.status(422).json(err));
      }
    })


  },
  logIn: function(req, res, next) {
    console.log("----- User contoller login -------")
    const { email, password } = req.body
    console.log(req.body)
    console.log('================ ---- haha ')
    console.log('------ before next ------  ')
    next()
    console.log('------ after next ------ ')

    passport.authenticate('local'),
      (req, res) => {
        console.log("------ passport authenticate ------ ")
        console.log('POST to /login')
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
  },

  logOut: function(req, res) {
    if (req.user) {
      req.session.destroy()
      res.clearCookie('connect.sid') // clean up!
      return res.json({
        msg: 'logging you out'
      })
      // res.redirect('/login')
    } else {
      return res.json({
        msg: 'no user to log out!'
      })
      // res.redirect('/login')
    }
  },

  update: function(req, res) {
    db.User
      .findOneAndUpdate({ _id: req.params.id }, req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  remove: function(req, res) {
    db.User
      .findById({ _id: req.params.id })
      .then(dbModel => dbModel.remove())
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }
};
