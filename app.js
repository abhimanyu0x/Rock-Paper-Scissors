let userScore=0;
let compScore=0;
const choices =  document.querySelectorAll(".choice");
const msg=document.querySelector("#msg");
const userScorePara=document.querySelector("#user-score");
const compScorePara=document.querySelector("#comp-score");
const genComputerChoice=()=>{
    const options = ["rock","paper","scissors"];
    const randomIndex=Math.floor(Math.random()*3);// gen between 0 to 1. so we mul it with "n" to get a range  of 0 to n-1.
    return options[randomIndex];
};
const drawGame = () =>{
    msg.innerText="Game Draw. Play Again!!"
    msg.style.backgroundColor='#081b31';
};
const showWinner=(userWin,userChoice,compChoice)=>{
    if(userWin){
        userScore++;
        userScorePara.innerText=userScore;
        msg.innerText=`You Win. Your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor="green";
    }else{
        compScore++;
        compScorePara.innerText=userScore;
        msg.innerText=`You lose. ${compChoice} beats ${userChoice}`;
        msg.style.backgroundColor="red";
    }
};
const playGame = (userChoice) =>{
    //Generate computer choice for the game
    const compChoice=genComputerChoice();
    if(userChoice===compChoice){
        drawGame();
    }else{
        let userWin=true;
        if(userChoice==="rock"){
            userWin=compChoice==="paper"?false:true;
        }else if(userWin==="paper"){
            userWin=compChoice==="scissors"?false:true;
        }else{
            userWin=compChoice==="rock"?false:true;
        }
        showWinner(userWin,userChoice,compChoice);
    }
};
choices.forEach((choice) => {
    choice.addEventListener("click",()=>{
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    });
});