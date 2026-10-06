// const promiseone = new Promise((resolve , reject)=>{
    
//             console.log("okokokok")

//     setTimeout(function(){
//         console.log("kkkkkkkk");
//         resolve("gfdfghkgftydghgf");
//     }, 1000)
    
// })
// promiseone.then((data)=>{
//     console.log("so pronmise 1 finally complete");
// })

// const p = new Promise((resolve,reject)=>{
//     let flag = !true;
//     if(flag){
//         resolve("hgfhgfghfg")
//     }
//     else{
//         reject("errrrrrrrrr")
//     }
// })
// p.then((data)=>{
//     console.log(data)
// }).catch((err)=>{
//     console.log(err)
// })



new Promise((resolve,reject)=>{
    let flag2 = true;
    if(flag2){
        resolve({username : "ariv lamba", email : "amex,example@gmail.com"})
    }
    else{
        reject("errrrrrrrrr")
    }
}).then((ariv)=>{
    console.log(ariv.email);
    console.log("ariv");
}).catch((err)=>{
    console.log()
})

// multiple then kaise use kar sakte h in promise's 

// new Promise((resolve,reject)=>{
//     let flag2 = true;
//     if(flag2){
//         resolve({username : "ariv lamba", email : "amex,example@gmail.com"})
//     }
//     else{
//         reject("errrrrrrrrr")
//     }
// }).then((ariv)=>{
//     console.log(ariv.username);
//     return ariv.email;
//     console.log("ariv");
// }).then((email)=>{
//     console.log(email);
// }).catch((err)=>{
//     console.log()
// }).finally(()=>{
//     console.log("finally promise got either resolved or rejected");
// })


// now we will learn something new ->

const promisefive = new Promise((resolve, reject)=>{
      let flag2 = true;
    if(flag2){
        resolve({username : "ariv lamba", email : "amex,example@gmail.com"})
    }
    else{
        reject("Error : something is wrong");
    }
})

// async function ok(){
//     try{
//         const response = await promisefive;
//         console.log(response);
//     }catch(error){
//         console.log(error);
//     }
// }
// ok();


/* try to replace async code with old then catch function. */
// promisefive.then((response)=>{
    
// }).then((response)=>{
//       console.log(response);
// }).catch((err)=>{
//      console.log(err);
// })


// promise 6 // now try something else 

    async function alluserdata(){
        try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
       const data = await response.json();
       console.log(data);
        } catch (error) {
            console.log("error is : ", error);
        }
    }
    alluserdata();
