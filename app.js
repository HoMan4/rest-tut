const express = require("express");
const app = express();
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
require("dotenv/config");

app.use(bodyParser.json());



// import routes
const postsRoute = require("./routes/posts");

app.use("/posts", postsRoute);

//Routes
app.get("/", (req, res) => {
    res.send("we are on home");
});
//connect to db
mongoose.connect(
    process.env.DB_CONN, 
    { useNewUrlParser: true },
    () => console.log("connected to DB!"));



app.listen(3000);
