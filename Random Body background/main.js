let btn = document.querySelector("#btn");

btn.addEventListener("click" , randomBg);

function randomBg(){
    //logic 
    document.body.style.backgroundColor = "#" + Math.random().toString(16).slice(2 , 8);

}

//