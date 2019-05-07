const express = require("express");
// var multer = require('multer');
// var bodyParser = require('body-parser');
const mongoose = require("mongoose");
const routes = require("./routes");
const app = express();
const PORT = process.env.PORT || 3001;

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}
// Add routes, both API and view
app.use(routes);

// var Storage = multer.diskStorage({
//   destination: function(req, file, callback) {
//       callback(null, "./Images");
//   },
//   filename: function(req, file, callback) {
//       callback(null, file.fieldname + "_" + Date.now() + "_" + file.originalname);
//   }
// });

// var upload = multer({
//   storage: Storage
// }).array("imgUploader", 3); //Field name and max count

// app.get("/", function(req, res) {
//   res.sendFile(__dirname + "/index.html");
// });
// app.post("/api/Upload", function(req, res) {
//   upload(req, res, function(err) {
//       if (err) {
//           return res.end("Something went wrong!");
//       }
//       return res.end("File uploaded sucessfully!.");
//   });
// });

// Connect to the Mongo DB
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/atomicmuffin");

// Start the API server
app.listen(PORT, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});
