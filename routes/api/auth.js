const express = require("express");
const router  = express.Router();
const jwt = require('jsonwebtoken');
const passport = require("passport");

router.post('/login', function (req, res, next) {
  passport.authenticate('local', {session: false}, (err, user, info) => {
      if (err || !user) {
          return res.status(400).json({
              message: 'Something is not right',
              user   : user
          });
      }
     req.login(user, {session: false}, (err) => {
         if (err) {
             res.send(err);
         }
         // generate a signed son web token with the contents of user object and return it in the response
         const token = jwt.sign(user, 'your_jwt_secret');
         return res.json({user, token});
      });
  })(req, res);
});

// const User = require("../../models/user");
// (module.exports = app => app.posy("apo/account/signup")),
//   (req, res, next) => {
//     const { body } = req;
//     const { name, email, password } = body;

//     if (!email) {
//       res.end({
//         success: false,
//         message: "Error: Email field cannot be left blank"
//       });
//     }
//     if (!name) {
//       res.end({
//         success: false,
//         message: "Error: Name field cannot be left blank"
//       });
//     }
//     if (!password) {
//       res.end({
//         success: false,
//         message: "Error: Passwordfield cannot be left blank"
//       });
//     }
//     email = email.toLowerCase();

//     User.find(
//       {
//         email: email
//       },
//       (err, previousUsers) => {
//         if (err) {
//           res.end({
//             success: false,
//             message: "Error: Server Error"
//           });
//         } else if (previousUsers.length > 0) {
//           res.end({
//             success: false,
//             message: "Error: Account already exists"
//           });
//         }
//         const newUser = new User();

//         newUser.email = email;
//         newUser.name = name;
//         newUser.password = password;
//         newUser.save((err, user) => {
//           if (err) {
//             res.end({
//               success: true,
//               message: "Signed up!"
//             });
//           }
//         });
//       }
//     );
//   };
