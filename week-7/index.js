const express = require("express")
const app = express();
const jwt = require('jsonwebtoken');
const mongoose = require("mongoose");
const JWT_SECRET = "muskiichuskiiiscutegudiya";

mongoose.connect("mongodb+srv://abcd_user:R2POUexhF@cluster-01.8i8c12z.mongodb.net/todo-app-data");
const {usermodel , todomodel} = require("./db");
// import from db.js file 
// now this usermodel give me high level function to change data in db
app.use(express.json());
app.post("/signup", async function(req, res){
    const username = req.body.username;  // i am considering username as email 
    const password = req.body.password;
    const name = req.body.name;


     await usermodel.create({
        username : username,
        password : password, 
        name : nameclea

     });
     res.status(200).json({
        message : " you are successfully signed up"
     })

});
app.post("/signin", async function(req, res){
    const username = req.body.username;
    const password = req.body.password;

    // get input form user now , find in db , using findone
    const resp = await usermodel.findOne({
        username : username, 
        password : password,
    });

    if(resp){
        const token = jwt.sign({
          id : resp._id.toString()
        }, JWT_SECRET);

        res.json({
            token
        });

    }else{
        res.status(403).json({
            message : " invalid credentials"
        });
    }

});

app.post("/todo", function(req, res){

});
app.get("/todos", function(req, res){

});

app.listen(3000, ()=>{
    console.log("express is running on port 3000");
});
