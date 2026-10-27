// all the database logic 
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ObjectId = mongoose.ObjectId;
const userss = new Schema({
    username : String,
    password : String,
    name : String
});
// give a basic schema for our userss object type 

const todoss = new Schema({
    description : String, 
    done : Boolean, 
    userID : ObjectId
});

const usermodel = mongoose.model('users', userss);
const todomodel = mongoose.model('todos', todoss);
// here users is my collection name where i want to push the stored data in userss.
// similarly todos is collection name here , 

module.exports ={
    usermodel : usermodel,
    todomodel : todomodel
}
// we are exporting usermodel/ todomodel so that we can make changes in 
// our store data using backend code. 