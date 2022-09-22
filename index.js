require("./data_base")

const User = require("./user");
const Profile = require("./profile");
const Credential = require("./credential");
const { default: mongoose } = require("mongoose");
const profile = require("./profile");

const userDocument = new User({
    login: "pedroperez7",
    password: "pedrop123"
});

userDocument.save(checkResponse)

function checkResponse(err, res) {
    if (err)
        console.log(err);
    else {
        console.log("Document saved");
    }
}

const profileDocument = new Profile({
    name: "pedro",
    surname: "perez",
    dateOfBirth: "1995-05-12",
    comments: "blonde",
    rol: "User"
})


profileDocument.save(checkResponse)

function checkResponse(err, res) {
    if (err)
        console.log(err);
    else {
        console.log("Document saved");
    }
}

const credentialDocument = new Credential({
    address: "calle del anade 18",
    phone: 549421631,
    email: "pedrop@correo.es"
})

credentialDocument.save(checkResponse)

function checkResponse(err, res) {
    if (err)
        console.log(err);
    else {
        console.log("Document saved");
    }
}