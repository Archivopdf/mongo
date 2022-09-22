const mongoose = require("mongoose");

const profileSchema = new mongoose.Schema({
    name: String,
    surname: String,
    dateOfBirth: Date,
    comments: String,
    rol: String,
})

profileSchema.pre("save", function (next) {
    console.log("Middleware check");
    if (this.age > 18) {
        console.log("Your age is under than 18");
        next();
    }
    else
        console.log("Your age has to be more than 18");
})

module.exports = mongoose.model("Profile", profileSchema, "profile")