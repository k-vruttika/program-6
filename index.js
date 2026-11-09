const express = require("express");
const app = express();
const PORT = 3002;

app.get ('/', (req,res) => {
res.send("Hello from Dockerhub pipeline");
});

app.listen ( PORT, () => {
console.log("Server running at port 3000");
});

