const express = require("express");
const app = express();

app.use(express.json());

let users = [];
app.post("/signup", function(req, res){
  const usern = req.body.username;
  const pass = req.body.password;
  users.push(
    {
        username : usern,
        password : pass
    }
  );
  res.json({
    users
  });
});

app.post("/signin", function(req, res){
  const usern = req.body.username;
  const pass = req.body.password;
  let ok = 1; 
  for(let i =0; i<users.length; i++){
    if(users[i].username == usern && users[i].password == pass){
        ok = 5;
        res.json({
           msg : "valid user"
        });
        break;
    }
  }
  // if not found then send response that invalid user 
  if(ok == 1){
    res.json({
        msg : "invalid user"
    });
  }
});

app.listen(3000, ()=>{
    console.log("server is running on port : 3000");
});


