const Validator = require("validator");
const isEmpty = require("./isempty");

module.eports = function validateRegisterInput(data) {
    let errors = {};
    data.name = !isEmpty(data.name) ? data.name: "";
    data.email = !isEmpty(data.email) ? data.email: "";
    data.password = !isEmpty(data.password) ? data.password: "";
    data.cpassword = !isEmpty(data.cpassword) ? data.cpassword: "";

    if (!Validator.isLength(data.name, {min: 2, max:30}))
    {
        errors.name = "Name must be between 2 to 20 chars";
    }
    if (!Validator.isEmpty(data.name)) {
        errors.name = "Name field is required"
    }
}