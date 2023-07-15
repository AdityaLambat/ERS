const mongoose = require("mongoose");

mongoose.connect("mongodb+srv://adityalmbt:5VsfeMx5qNTbXS6W@cluster0.yb3tex6.mongodb.net/ERS",{
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
