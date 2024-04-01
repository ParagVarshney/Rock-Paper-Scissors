// // let mode=document.querySelector("#mode");
// // let body=document.querySelector("body");
// // let currmode="light";
// // mode.addEventListener("click",()=>{
// //     // console.log("you are tying change mode");
// //     if(currmode==="light"){
// //         currmode="dark";
// //         body.classList.add("dark");
// //         body.classList.remove("light");

// //     }
// //     else{
// //         currmode="light";
// //         body.classList.add("light");
// //         body.classList.remove("dark");
// //     }
// //     console.log(currmode);
// // })
// let btn=document.getElementById("mode");
// console.log(btn);

// let var1="#";
// let var2="0123456789ABCDEF";

// let change1 =()=>{
//     var1="#";
//     for(let i=0;i<6;i++){
//      var1=var1+var2[Math.floor(Math.random()*16)];
//     }
//     return var1;
// };
// function change(){
//     document.body.style.backgroundColor=change1();
// }
// btn.addEventListener("click",change);
let userscore=0;
let compscore=0;
const choices=document.querySelectorAll(".choice");
const msg=document.getElementById("msg-con");
const user=document.getElementById("user");
const comp=document.getElementById("comp");
const showwinner=(userwin,userchoice,compchoice)=>{
    
    if(userwin){
        console.log("you win!");
        userscore++;
        msg.innerText=`you win ! your choice ${userchoice} beats computer choice ${compchoice}`;
        msg.style.backgroundColor="green";
        user.innerText=userscore;
    }else{
        console.log("you lost");
        compscore++;
        msg.innerText=`you lose ! computer choice ${compchoice} beats your choice ${userchoice}`;
        msg.style.backgroundColor="red";
        comp.innerText=compscore;
    }
}
const gencompchoice=()=>{
    let choices=["rock","paper","scissors"];
   const id= Math.floor(Math.random()*3);
   return choices[id];
}
const playgame=((userchoice)=>{
    console.log(userchoice);
    //generte comp choice
    const compchoice=gencompchoice();
    console.log(compchoice);
    if(userchoice===compchoice){
        console.log("game was draw");
        msg.innerText="game was draw!  try again";
        msg.style.backgroundColor="black";
    }
    else {
        let userwin=true;
        if(userchoice==="rock"){
           userwin= compchoice==="paper"?false:true;
        }else if(userchoice==="paper"){
            userwin=compchoice==="scissors"?false:true;
        }else{
            userwin=compchoice==="rock"?false:true;
        }
        showwinner(userwin,userchoice,compchoice);
    }
    
    
})
choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        const userchoice=choice.getAttribute("id");
        console.log("clicked",userchoice);
        playgame(userchoice);
    })
})