const express = require("express");
const { disconnect } = require("mongoose");
const { getConnection } = require("./dbConnection");
const app = express();
const port = 3000;
const bodyParser = require('body-parser')

app.use(express.json())

const User = require("./model/user.model");

app.get("/", async (req, res) => {
  const connection = await getConnection();
  const dbRes = await User.find({});

  console.log(dbRes);
  return res.send("Hello World!");
});

app.post("/user", async (req, res) => {
console.log(req.body)

const user = await User.create({
  username: req.body.username,
  password: req.body.password,
})

return res.send(user)
})

app.get("/user", async (req, res) => {
  console.log(req.body)
  
const user = await User.findOne({
  username: req.body.username,
  password: req.body.password,
})
  
return res.send(user)
})

app.delete("/user", async (req, res) => {
  console.log(req.body)

const user = await User.deleteOne({
  username: req.body.username,
  password: req.body.password,
})
    
return res.send(user)
})

app.listen(port, async () => {
  await getConnection();
  console.log(`Example app listening on port ${port}`);
});

process.on("SIGINT", function () {
  disconnect().then(() => {
    server.close(function () {
      console.log("closed connection");
      process.exit(0);
    });
  });
});