const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    login: String,
    password: {
        type: String,
        validate: [
            function (password) {
                return password.length >= 8;
            },

            "The password has to be longer"],
        select: false
    }
})

module.exports = mongoose.model("User", userSchema, "user")