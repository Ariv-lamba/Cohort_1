const element2 = document.getElementById('id');
element2.innerText= " new words";
 function change_word(){
        const element2 = document.getElementById('id');
        element2.innerText= " new words";
    } 

  const counter = document.getElementById('ops');
    let okkkk = 1;
    setInterval(() => {
       counter.innerHTML = okkkk;
       okkkk++;
    }, 1000); 