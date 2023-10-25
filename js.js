function getCopmputerChoice (){
    let choices = ["Rock","Paper","Scissors"]
    let RandomNumber = Math.floor(Math.random()*3)
    let finalres = choices[RandomNumber];
    return finalres
} 
function getUserChoices (){
    let userchoice = window.prompt('Enter Rock or paper or scissors !')
    userchoice = userchoice.toLowerCase();
    let splitedUserChoice = userchoice.split('')
    let FisrtLetter = splitedUserChoice[0].toUpperCase()
    splitedUserChoice.shift()
    splitedUserChoice.unshift(FisrtLetter)
    return splitedUserChoice
};

const playerSelection = getUserChoices ()
const computerSelection = getCopmputerChoice ()
let ComputerScore = 0
let PlayerScore = 0
function playRound (playerSelection,computerSelection ){
    
   if (playerSelection === computerSelection){
    return ('Tieeeee !!!!')
   } else if (playerSelection === "Rock" && computerSelection === "Paper"){
    ComputerScore++
    return ("You lose! Paper beats Rock" && ComputerScore )
   } else if (playerSelection === "Paper" && computerSelection === "Scissors"){
    ComputerScore++
    return ("You lose! Scissore  beats Paper" && ComputerScore )
   } else if (playerSelection === "Scissors" && computerSelection === "Rock"){
    ComputerScore++
    return ("You lose! Rock beats Scissore" && ComputerScore)
   } else if (playerSelection === "Scissors" && computerSelection === "Paper"){
    PlayerScore++
    return ("You win! Scissore beats Paper " && PlayerScore)
   } else if (playerSelection === "Paper" && computerSelection === "Rock"){
    PlayerScore++
    return ("You win! Paper beats Rock" &&  PlayerScore )
   }else if (playerSelection === "Rock" && computerSelection === "Scissors"){
    PlayerScore++
    return ("You win! Rock beats Scissore" &&  PlayerScore)
   } else {
    return 'i dont know'
   }
}
function game(){
    for (i=1 ; i<5 ; i++){
        playRound(playerSelection,computerSelection );
    
    if (PlayerScore > ComputerScore) {
        console.log("You Won !!!")
    }else if (PlayerScore < ComputerScore) {
        console.log("You Lost !!!")
       }   else {console.log("Its a Tie")};
}
}
game()