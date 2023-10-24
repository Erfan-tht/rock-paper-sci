function getCopmputerChoice (){
    let choices = ["Rock","Paper","Scissors"]
    let RandomNumber = Math.floor(Math.random()*3)
    let finalres = choices[RandomNumber];
    return finalres
} 
function getUserChoices (){
    userchoice = window.prompt('Enter Rock or paper or scissors !')
    userchoice.toLowerCase();
    console.log(userchoice)
    splitedUserChoice = userchoice.split('')
    FisrtLetter = splitedUserChoice[0].toUpperCase()
    console.log(FisrtLetter)
    splitedUserChoice.shift()
    splitedUserChoice.unshift(FisrtLetter)
    return splitedUserChoice
}

const playerSelection = getUserChoices ()
const computerSelection = getCopmputerChoice ()
console.log(playerSelection,computerSelection)
//function playRound (playerSelection,computerSelection ){
   
//playRound (playerSelection,computerSelection )
