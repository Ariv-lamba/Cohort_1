const express = require("express");
const app = express();

// Hospital patient array

const pat = [
    {
        name: "ariv",
        kidney: [
            {
                id: 1,
                healthy: true,
                percentage: 73
            },
            {
                id: 2,
                healthy: true,
                percentage: 87
            },
            {
                id: 3,
                healthy: false,
                percentage: 0
            }
        ]
    },

    {
        name: "sonu",
        kidney: [
            {
                id: 1,
                healthy: true,
                percentage: 99
            },
            {
                id: 2,
                healthy: false,
                percentage: 17
            },
            {
                id: 3,
                healthy: true,
                percentage: 90
            },
            {
                id: 4,
                healthy: true,
                percentage: 95
            }
        ]
    }
];
app.put("/", function(req, res){

    for(let i = 0; i < pat.length; i++){

        if(pat[i].name == "sonu"){

            for(let j = 0; j < pat[i].kidney.length; j++){

                if(pat[i].kidney[j].id == 2){

                    pat[i].kidney[j].healthy = true;
                    pat[i].kidney[j].percentage = 80;
                }
            }
        }
    }

    res.json(pat);
});

app.delete("/", function(req, res){

    for(let i = 0; i < pat.length; i++){

        if(pat[i].name == "sonu"){

            for(let j = 0; j < pat[i].kidney.length; j++){

                if(pat[i].kidney[j].id == 3){

                    pat[i].kidney.splice(j, 1);
                    break;
                }
            }
        }
    }

    res.json(pat);
});

app.get("/", function (req, res) {

    let n = pat.length;
    let result = [];

    for (let i = 0; i < n; i++) {

        let nameop = pat[i].name;
        let pk = pat[i].kidney.length;

        // Count healthy kidneys
        let hpk = pat[i].kidney.filter(x => x.healthy == true).length;

        // Store only healthy kidneys
        let arr = pat[i].kidney.filter(x => x.healthy);

        let sum = 0;
        let count = 0;

        for (let j = 0; j < arr.length; j++) {

            if (arr[j].healthy) {
                sum += arr[j].percentage;
                count++;
            }
        }

        let avg_h_of_kidney = count == 0 ? 0 : sum / count;

        result.push({
            nameop,
            pk,
            hpk,
            avg_h_of_kidney
        });
    }
    // must remember that get request can send data atmost 1 time , if we try to send data 
     //more than 1 time then it will give us error 
    res.json(result);

});

// now i will try to insert the detail of new patient -> pat 

app.post("/", function(req, res){
    pat.push({
        name : "monu",
        kidney : [{
            id : 1,
            healthy : true,
            percentage : 66
        },
        {
            id : 2,
            healthy : true,
            percentage : 72
        }]
    })
    res.json(pat);
})







app.get("/check_pats",(req,res)=>{
    res.json(pat);
});
app.listen(3000, () => {
    console.log("Server running on port 3000");
});

