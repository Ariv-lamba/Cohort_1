const express = require("express");
const jwt = require("jsonwebtoken");
const JWT_SECRET = "muskiichuskiiiscutegudiya";
const app = express();

app.use(express.json());

let users = [];

app.post("/signup", function(req, res) {
  const usern = req.body.username;
  const pass = req.body.password;
  users.push({
    username: usern,
    password: pass
  });
  res.json({ users });
});

app.post("/signin", function(req, res) {
  const username = req.body.username;
  const password = req.body.password;

  const user = users.find(u => u.username === username && u.password === password);

  if (user) {

    const token = jwt.sign(
        { username: user.username 
        },  JWT_SECRET);

    user.token = token;

    res.json({ token });
    console.log(users);

  } else {
    res.status(403).send({ message: "Invalid username or password" });
  }
});

app.get("/me", auth , function(req, res) {
  const t = req.header("token");
  const userdetails = jwt.verify(t, JWT_SECRET);
  const uname = userdetails.username;

  const ok = users.find(u => u.username === uname);

  if (ok) {
    res.json({ 
        username: ok.username 
    });
  } 
  else {
    res.status(401).send({ message: "Unauthorized" });
  }
});

app.listen(3002, () => {
  console.log("server is running on port : 3002");
});