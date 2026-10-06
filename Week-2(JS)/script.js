/*

let n = document.getElementById("hello");
n.textContent = "yghgggg";
console.log(n);


const ele = document.querySelector('h1');
console.log(ele);

const ele2 = document.querySelectorAll('h4');
console.log(ele2);

const ele3 = document.querySelectorAll('h4')[1];
console.log(ele3);

const ele4 = document.getElementsByClassName('ok')[1];
console.log(ele4);

*/

const play = document.getElementById("hello");
console.log(play.innerHTML);  
play.style.color = "red";
play.style.backgroundColor = "yellow";

play.textContent = " krr diya na sab change abb btaa";

/*

innerHTML  -> ye pura element deta h , like puri heading if headin is and element , so we can change html using this attribute , 
textContent -> this will give us inner text only , like we can edit text only. 

*/
/*
let btn = document.getElementById('clickk');
let count = 0;

btn.addEventListener("click", ()=>{
    count++;
    if(count%2==0){
        btn.style.backgroundColor = "green";
    }
    else{
        btn.style.backgroundColor = "red";

    }
});
*/
// btn bnana to aa gya h mujhe 
console.log("ariv lamba");
