const express = require('express');
const app = express();

// route management , like here we have only 1 route which is for '/'
app.get('/', function(req, res){
    res.send("<b>hello world </b>");
})


//lets say i want to add a route handler for create_todo
app.get('/create_todo', function(req, res){
    res.send('todo_added');
})

app.get('/ok', function(req, res){
    res.json({
        name : "ariv Lamba",
        age : 25,
        role : " ai developer"
    })
})


app.post('/pp', function(req, res){
    res.send('now save this as post ');
})
app.listen(3000);
