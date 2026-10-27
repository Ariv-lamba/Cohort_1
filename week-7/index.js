const express = require("express")
const app = express();

const {usermodel , todomodel} = require(",/db");
// import from db.js file 
// now this usermodel give me high level function to change data in db
app.post("/signup", async function(req, res){
    username = req.body.username;
    password = req.body.password;


    // await usermodel.create{

    // }

});
app.post("/signin", function(req, res){

});

app.post("/todo", function(req, res){

});
app.get("/todos", function(req, res){

});

app.listen(3000, ()=>{
    console.log("express is running on port 3000");
});