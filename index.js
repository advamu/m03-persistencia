const express = require("express");
const { disconnect } = require("mongoose");
const { getConnection } = require("./dbConnection");
const app = express();
const port = 3000;
const bodyParser = require('body-parser')
const { body, validationResult } = require('express-validator');

app.use(express.json())

const User = require("./model/user.model");
const userRouter  = require("./route/user.route")
const loginRouter = require("./route/auth.route")
const authMiddleware = require("./middleware/auth.middleware")

app.use("/user", authMiddleware, userRouter)
app.use("/auth", loginRouter)

app.get("/", async (req, res) => {
  const connection = await getConnection();
  const dbRes = await User.find({});
  console.log(dbRes);
  return res.send("Hello human");
});

app.post("/user", async (req, res) => {
console.log(req.body)

const user = await User.create({
  username: req.body.username,
  password: req.body.password
})
return res.send(user)
})

app.get("/user", async (req, res) => {
  console.log(req.body)
  
const user = await User.findOne({
  username: req.body.username,
}) 
return res.send(user)
})

app.delete("/user", async (req, res) => {
  console.log(req.body)

const user = await User.deleteOne({
  username: req.body.username,
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