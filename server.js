const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: false}));
app.use(bodyParser.json());

app.get("/", (req, res) => {
    res.sendFile(__dirname + "index/html");
});

app.post("/login", (req, res) => {
    console.log(req.body);
})

app.listen(process.env.PORT || 8080, () => {
    console.log("server is running");
});