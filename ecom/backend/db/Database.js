const mongoose = require("mongoose");

const connectDatabase = () => {
    mongoose.connect(process.env.DB_URL, {
        userNewUrlParser:true,
        userUnifiedTopology: true,
    }).then((data) => {
        console.log(`mongodb connected with server: ${data.connection.host}`)
    })
}

module.exports = connectDatabase;