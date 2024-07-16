let userScore=0;
let compScore=0;

const choices=document.querySelectorAll(".choice")
const genCompChoice=()=>{
    const options=["rock","paper","scissors"];
    const randIdx=Math.floor(Math.random()*3);
    return options[randIdx];
}
let msg=document.querySelector("#msg");
const userScorePara=document.querySelector("#user-score");
const compScorePara=document.querySelector("#comp-score");
const drawGame=()=>{
    console.log("game was draw,Play again");
    msg.innerText="Draw"
}

const showWinner=(userWin,compChoice,userChoice)=>{
    if(userWin){
        console.log("you Win!");
        userScore++;
        userScorePara.innerText=userScore;
        msg.innerText=`you Win! Your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor="green";
    }else{
        compScore++;
        compScorePara.innerText=compScore;
        console.log("you lose");
        msg.innerText=`you lose ${compChoice} beats your ${userChoice}`;
        msg.style.backgroundColor="red";
    }
}
const playGame=(userChoice)=>{
    let userWin={};
    console.log("user choice=",userChoice);
    //Generate computer choice
    const compChoice=genCompChoice();
    console.log("comp choice=",compChoice);
    if(userChoice===compChoice){
        drawGame();
    }else{
        let userWin=true;
        if(userChoice==="rock"){
            userWin=compChoice==="paper"? false:true;
        }else if(userChoice==="paper"){
            userWin=compChoice==="scissors"? false:true;
        }else{
            userWin=compChoice==="rock"? false:true;
        }
        showWinner(userWin,compChoice,userChoice);
    }
}
choices.forEach((choice)=>{
    // console.log(choice);
    choice.addEventListener("click",()=>{
        const userChoice=choice.getAttribute("id");
        // console.log("choice was clicked",userChoice);
        playGame(userChoice);
    })
});
