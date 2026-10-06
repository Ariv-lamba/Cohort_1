
// import fs from 'fs';

// const filepath = process.argv[2];  
// // if we gave command like node index.js /users/ariv/desktop/abcd.txt then 
// // process.argv[0] -> mean node 
// // process.argv[1] -> means index.js 
// // process.agrv[2]. -> mean /users/ariv/desktop/abcd.txt
// fs.readFile(filepath , 'utf-8', (err, data)=>{
//     // console.log(process.agrv);

//      if (err) {
//         console.log("Error reading file");
//         console.log(err);
//         return;
//     }
//     let count = 0;
//     for(let i = 0; i<data.length; i++){
//         if(data[i] == " "){
//             count++;
//         }
//     }

//     // can also use trim() inbuild string function which will trim the string into words and return count of total words.
//     console.log(count+1);

// });







// import fs from "fs";

// fs.readFile("output.txt", "utf-8", (err, data) => {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log(data);
//   }
// });

// fs.appendFile("output.txt","    ariv.  lamba.   ",(err)=>{
//     console.log(err)
// })


// fs.writeFile("abcd.txt","aribcjb",(err)=>{
//     console.log(err)
// })

/*


import { Command } from "commander";
import fs from "fs";

const program = new Command();

program
    .name("counter")
    .description("CLI to do file based tasks")
    .version("0.8.1");

program
    .command("count")
    .description("Count the words in a file")
    .argument("<file>", "File to count words")
    .action((file) => {
        fs.readFile(file, "utf-8", (err, data) => {
            if (err) {
                console.error(err);
                return;
            }

            let count = 0;

            for (let i = 0; i < data.length; i++) {
                if (data[i] === " ") {
                    count++;
                }
            }

            console.log("Words:", count + 1);
        });
    });

program.parse();

*/

// now lets do it like that to have multiple commands 


import { Command } from "commander";
import fs from "fs";

const program = new Command();

program
    .name("counter")
    .description("CLI to perform file based tasks")
    .version("1.0.0");

// ---------------- Count Words ----------------

program
    .command("count-words")
    .description("Count total words in a file")
    .argument("<file>", "File to count words")
    .action((file) => {

        fs.readFile(file, "utf-8", (err, data) => {

            if (err) {
                console.log(err);
                return;
            }

            const words = data.trim().split(/\s+/);

            console.log("Total Words :", words.length);

        });

    });


// ---------------- Count Sentences ----------------

program
    .command("count-sentences")
    .description("Count total sentences in a file")
    .argument("<file>", "File to count sentences")
    .action((file) => {

        fs.readFile(file, "utf-8", (err, data) => {

            if (err) {
                console.log(err);
                return;
            }

            const sentences = data.match(/[.!?]+/g);

            console.log("Total Sentences :", sentences ? sentences.length : 0);

        });

    });


// ---------------- Count Lines ----------------

program
    .command("count-lines")
    .description("Count total lines in a file")
    .argument("<file>", "File to count lines")
    .action((file) => {

        fs.readFile(file, "utf-8", (err, data) => {

            if (err) {
                console.log(err);
                return;
            }

            const lines = data.split("\n");

            console.log("Total Lines :", lines.length);

        });

    });


// ---------------- Count Characters ----------------

program
    .command("count-characters")
    .description("Count total characters in a file")
    .argument("<file>", "File to count characters")
    .action((file) => {

        fs.readFile(file, "utf-8", (err, data) => {

            if (err) {
                console.log(err);
                return;
            }

            console.log("Total Characters :", data.length);

        });

    });


// ---------------- Count Paragraphs ----------------

program
    .command("count-paragraphs")
    .description("Count total paragraphs in a file")
    .argument("<file>", "File to count paragraphs")
    .action((file) => {

        fs.readFile(file, "utf-8", (err, data) => {

            if (err) {
                console.log(err);
                return;
            }

            const paragraphs = data.trim().split(/\n\s*\n/);

            console.log("Total Paragraphs :", paragraphs.length);

        });

    });

program.parse();