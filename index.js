const express = require("express")
const app = express();

const port = 3000;

app.get("/", (req, res) => {
    //res.send("Hello, World!");
    res.sendFile(__dirname + "/public/home.html");
});
app.get("/test", (req, res) => {
    res.sendFile(__dirname + "/public/test.html");
});

app.listen(port, ()=> {
    console.log(`Web is running on Port: ${port}`)
});