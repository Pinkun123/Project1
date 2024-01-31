let gamefq=[];
let userfq=[];
let started=false;
let level=0;
let h2=document.querySelector("h2");
let btns=["red","orange","blue","skyblue"];
document.addEventListener("keypress",function(){
     if(started == false){ // if game not started
        console.log("game is started");
        started=true;  // update
     }
     levelUp();
});
function Flash(btn){
    let h2=document.querySelector("h2");
    h2.innerText=`level ${level}`;
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");
    },250);
}
function userFlash(btn){
    let h2=document.querySelector("h2");
    h2.innerText=`level ${level}`;
    btn.classList.add("userFlash");
    setTimeout(function(){
        btn.classList.remove("userFlash");
    },250);
}

function levelUp(){
    // gamefq=[];
    userfq=[];
    level++;
    let ranidx=Math.floor(Math.random()*4);
    let rancolor=btns[ranidx];
    let ranbtn=document.querySelector(`.${rancolor}`);
    // console.log(ranidx);
    // console.log(rancolor);
    // console.log(ranbtn);
     gamefq.push(rancolor);
    console.log(gamefq);
    Flash(ranbtn);
}
function checkAns(idx){
    //  let idx=level-1;
     let h2=document.querySelector("h2");
     if(gamefq[idx] === userfq[idx]){
        if(gamefq.length == userfq.length){
            setTimeout(levelUp,1000);
        }
     }
     else{
       h2.innerText=`Game is over . start press to any key!.`;
        reset();
     }
}
function btnPress(){
    // console.log(this);
    let btn=this;
    userFlash(btn);
    usercolor=btn.getAttribute("id");
    userfq.push(usercolor);
    
    checkAns(userfq.length-1);
}

let allBtns=document.querySelectorAll(".btn");
for(btn of allBtns){
    btn.addEventListener("click",btnPress);
}
function reset(){
    started=false;
    gamefq=[];
    userfq=[];
    level=0;
}