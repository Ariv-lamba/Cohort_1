/*

// so this is our middlewear which will first increment the total number of request then 
// print themand then sent request to next route handler 
function countreq(req, res, next){
    reqcount++;
    console.log("total no of request = " + reqcount);
    next();
}

function finalsum(request, response){
    
    const a = Number(request.query.a);
    const b = Number(request.query.b);
    // we get wrong answer here because jscode treat it like a string , so how can i fix it 
    response.json({
       ans: a+b});
}

app.get("/sum", countreq, finalsum);
*/


const express = require("express");
const app = express();

let reqcount =0;

// so this is our middlewear which will first increment the total number of request then 
// print themand then sent request to next route handler 
function countreq(req, res, next){
    reqcount++;
    console.log("total no of request = " + reqcount);
    next();
}

function finalsum(request, response, next){
    
    const a = Number(request.query.a);
    const b = Number(request.query.b);
    // we get wrong answer here because jscode treat it like a string , so how can i fix it 
    response.json({
       ans: a+b});
}

function finalmultiply(request, response){
   
     const a = Number(request.query.a);
    const b = Number(request.query.b);
   response.json({
       ans: a*b});
}

function finaldivide(request, response){
    
    const a = Number(request.query.a);
    const b = Number(request.query.b);
    response.json({
       ans: a/b});
}

function finalsub(request, response){
    
     const a = Number(request.query.a);
    const b = Number(request.query.b);
    response.json({
       ans: a-b});
}

function finalmod(request, response)
{
     
    const a= Number(request.params.aa);
    const b = Number(request.params.bb);
    response.json({
        ans : a%b});
}



app.get("/sum", finalsum);

app.get("/multiply", countreq,  finalmultiply);

app.use(countreq);  // ok so we use , app.use(middlewear) - so that for next all request we 
// don't need to define middleware name in everyget request 

app.get("/divide", finaldivide);

app.get("/subtract", finalsub )

app.get("/modulus/:aa/:bb",  finalmod);

app.listen(3003, () => {
    console.log("Server running on port 3003");
});


// here we have learnt about the topics like why " use " is used with app. and basic syntax of middlewear 