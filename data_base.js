const mongoose = require("mongoose");

mongoose.connect("mongodb+srv://ToniDiazArc:<password>@cluster0.uudz5gg.mongodb.net/Codenotch", {
    userNewUrlPasrser: true, useUndefiedTopology: true
})

    .then((bd) => {
        console.log("data base connected", db.connection.host);

    })

    .catch((error) => {
        console.log((error))
    })