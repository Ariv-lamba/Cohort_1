// create todo app - which do crud functionality const express = require("express");
const express = require("express");
const fs = require("fs");
const jwt = require("jsonwebtoken");
const JWT_SECRET = "muskiichuskiiiscutegudiya";
const app = express();

app.use(express.json());

/*
async function readjsondata() {
  try{
    const rawdata = await readfile("db.json", 'utf-8');
    const jsondata = JSON.parse(rawdata);
    // console.log(jsondata);
    return jsondata;
  }
  catch(err){
    console.log(err);
  }
}
  */

let users = []; // iski jagah i have to use db.json file as database 

function logger(req, res, next){
    console.log("request method is "+ req.method);
    next();
}
app.use(logger);

app.get("/", function(req, res){
  res.sendFile(__dirname + "/front.html");
})

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

function auth(req, res, next){
  
    const token = req.header("token");
    console.log("Token received by backend:", token);

    const t = jwt.verify(token , JWT_SECRET); // now t is token , must contain username

    if(t.username){
        req.username = t.username,
        next();
    }else{
        res.status(404).json({
        msg : "user have not ever been logged in"
      })
    } 
}
// why this middleware auth is created ?
// because lets suppose we have 10 different other requests like /me 
// example - /mycourse , /syllabus, /week1 ,if we don't use auth middleware ,then 
// with each request we have to write the same code to check if the user is valid or not
// first 4 lines of JWT.js file  -> get endpoint function. 
app.use(auth);
app.get("/me" , function(req, res) {

    let founduser = null;
    for(let i =0; i<users.length; i++){
        if(users[i].username == req.username){
            founduser = users[i];
        }
    }
   // if(founduser) // no need to check if it is a valid user because we already validate it using 
   // authentication 
    res.json({
        username : founduser.username,
        password : founduser.password
    })
});

// to get all the posts in the file 
app.get("/todos", async function(req, res){ // you can make this function async 
  const data = await readjsondata();
  res.json(data);
    // read the data from db.json file and send it to frontend
});
app.post("/post", function(req, res){
  // write the data to db.json file and send it to frontend

});
app.put("/put", function(req, res){
  // update the data in db.json file and send it to frontend

});
app.delete("/delete", function(req, res){
  // delete the data from db.json file and send it to frontend

});

// i should i have to add a logout endpoint to delete a particular user from the users array ?
// no need to do it , i already add a function for logout that erase the token of curr user 

app.listen(3002, () => {
  console.log("server is running on port : 3002");
});