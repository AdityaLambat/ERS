const mongoose = require("mongoose");

mongoose.connect("mongodb+srv://MongoDBCluster:MongoDBCluster@cluster0.sxgacl0.mongodb.net/ERS",{
  useNewUrlParser: true,
  useUnifiedTopology: true,
});




const db = mongoose.connection; // db store the connection

// cheacking the connection
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", function () {
  console.log("DATABASE connection is Established");
});

// exporting the connection.
module.exports = db;
