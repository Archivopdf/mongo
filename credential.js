const mongoose = require("mongoose");

const credentialSchema = new mongoose.Schema({
    address: String,
    phone: Number,
    email: string,
})

module.exports = mongoose.model("Credential", credentialSchema, "credential")