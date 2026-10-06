const express = require("express");
const app = express();

app.use(express.json());

function generatetoken(){
    let options = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
    let token = "";
    for (let i = 0; i < 32; i++) {
        // use a simple function here
        token += options[Math.floor(Math.random() * options.length)];
    }
    return token;
}

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
        let token = generatetoken();
        users[i].token = token;
        ok = 5;
        res.json({
           users
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
app.get("/me", function(req, res){
 const t = req.header("token");
 let ok = 1; 
  for(let i =0; i<users.length; i++){
    if(users[i].token == t){
        ok = 5;
        res.json({
          username : users[i].username
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

app.listen(3001, ()=>{
    console.log("server is running on port : 3001");
});


