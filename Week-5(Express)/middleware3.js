const express = require("express");
const app = express();

let reqcount =0;

// so this is our middlewear which will first increment the total number of request then 
// print them and then sent request to next route handler 
function countreq(req, res, next){
    reqcount++;
    console.log("total no of request = " + reqcount);
    
    if(req.path == "/sum"){
        res.json({
           message : "i ended the request early",
        })
    }else{
        req.name = "sonu";
        next();

    }
}

function finalsum(request, response, next){
    console.log("request reached the sum handler")
    const a = Number(request.query.a);
    const b = Number(request.query.b);
    // we get wrong answer here because jscode treat it like a string , so how can i fix it 
    response.json({
       ans: a+b});
}

function finalmultiply(request, response){
    console.log(request.name);
    console.log("request reached the multiply handler")
    const a = Number(request.query.a);
    const b = Number(request.query.b);
   response.json({
       ans: a*b});
}

app.use(countreq); 
app.get("/sum", finalsum);
app.get("/multiply", finalmultiply);

app.listen(3004, () => {
    console.log("Server running on port 3004");
});