function getCopmputerChoice(){
    let choices = ["Rock","Paper","Scissors"]
    let RandomNumber = Math.floor(Math.random()*3)
    let finalres = choices[RandomNumber];
    return finalres
} 
function getUserChoices(){
    let userchoice = window.prompt('Enter Rock or paper or scissors !')
    userchoice = userchoice.toLowerCase();
    let splitedUserChoice = userchoice.split('')
    let FisrtLetter = splitedUserChoice[0].toUpperCase()
    splitedUserChoice.shift()
    splitedUserChoice.unshift(FisrtLetter)
    splitedUserChoice.join('')
    console.log(splitedUserChoice)
    return splitedUserChoice
};

let playerSelection = getUserChoices()
let computerSelection = getCopmputerChoice()
let ComputerScore = 0
let PlayerScore = 0
function playRound(playerSelection,computerSelection ){
     console.log (playerSelection,computerSelection)}
    playRound(playerSelection,computerSelection)
   /*if (playerSelection === computerSelection){
    console.log('Tieeeee !!!!')
   } else if (playerSelection === "Rock" && computerSelection === "Paper"){
    ComputerScore+=1
    console.log("You lose! Paper beats Rock" && ComputerScore )
   } else if (playerSelection === "Paper" && computerSelection === "Scissors"){
    ComputerScore+=1
    console.log("You lose! Scissore  beats Paper" && ComputerScore )
   } else if (playerSelection === "Scissors" && computerSelection === "Rock"){
    ComputerScore+=1
    console.log("You lose! Rock beats Scissore" && ComputerScore)
   } else if (playerSelection === "Scissors" && computerSelection === "Paper"){
    PlayerScore+=1
    console.log("You win! Scissore beats Paper " && PlayerScore)
   } else if (playerSelection === "Paper" && computerSelection === "Rock"){
    PlayerScore+=1
    console.log("You win! Paper beats Rock" &&  PlayerScore )
   }else if (playerSelection === "Rock" && computerSelection === "Scissors"){
    PlayerScore+=1
    console.log ("You win! Rock beats Scissore" &&  PlayerScore)
   } else {
    console.log ('i dont know')
   }
}
function game(){
    for (i=1 ; i<5 ; i++){
        let playerSelection = getUserChoices ()
        let computerSelection = getCopmputerChoice ()
        playRound(playerSelection,computerSelection );
        console.log(PlayerScore)
    }
    if (PlayerScore > ComputerScore) {
        console.log("You Won !!!")
    }else if (PlayerScore < ComputerScore) {
        console.log("You Lost !!!")
       }   else {console.log("Its a Tie")};

}
game()*/
