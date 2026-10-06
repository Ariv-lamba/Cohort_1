const express = require("express");
const app = express();
const cors = require("cors");

app.use(cors());
app.get("/sum", function(request, response){
    
    const a = Number(request.query.a);
    const b = Number(request.query.b);
    // we get wrong answer here because jscode treat it like a string , so how can i fix it 
    response.json({
       ans: a+b});
})

app.get("/multiply", function(request, response){
   
     const a = Number(request.query.a);
    const b = Number(request.query.b);
   response.json({
       ans: a*b});
})


app.listen(3006, () => {
    console.log("Server running on port 3006");
});