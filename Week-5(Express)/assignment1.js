
const express = require("express");
const app = express();

let reqcount =0;

// problem statement is to log the method , url and timestamp  
function countreq(req, res, next){
    reqcount++;
    console.log("total no of request = " + reqcount);
    console.log("method =" +req.method);
    console.log("url =" +req.url);
    console.log("Middleware called at:", new Date().toLocaleString());
    next();
}

function finalsum(request, response){
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


app.use(countreq);  // ok so we use , app.use(middlewear) - so that for next all request we 
// don't need to define middleware name in everyget request 

app.get("/sum", finalsum);

app.get("/multiply", finalmultiply);

app.get("/divide", finaldivide);

app.get("/subtract", finalsub )

app.get("/modulus/:aa/:bb",  finalmod);

app.listen(3005, () => {
    console.log("Server running on port 3005");
});


// here we have learnt about the topics like why " use " is used with app.. and basic syntax of middlewear 