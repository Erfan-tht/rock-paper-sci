let finalResultText = document.querySelector('#finaltResult')
let rounResultText = document.querySelector('#firstResult')
let paper = document.querySelector('#Paper')
let rock = document.querySelector('#Rock')
let scissors = document.querySelector('#Scissors')
let buttons = document.querySelector('#Buttons-Parent');
let newChoice = 'me'
buttons.addEventListener('click', (event) => {
    
    let target = event.target;

    switch(target.id) {
        case 'Rock':
            newChoice = 'Rock'
            break;
        case 'Paper':
            newChoice = 'Paper'
            break;
        case 'Scissors':
            newChoice = 'Scissors'
            break;
    }
    finalResultText.textContent = ""
    game()
});



function getCopmputerChoice(){
    let choices = ["Rock","Paper","Scissors"]
    let RandomNumber = Math.floor(Math.random()*3)
    let finalres = choices[RandomNumber];
    console.log(finalres)
    return finalres
} 
function getUserChoices(){
    
    let userchoice =`${newChoice}`
    userchoice = userchoice.toLowerCase();
    let splitedUserChoice = userchoice.split('')
    let FisrtLetter = splitedUserChoice[0].toUpperCase()
    splitedUserChoice.shift()
    splitedUserChoice.unshift(FisrtLetter)
    let joined = splitedUserChoice.join('')
    console.log(joined)
    return joined;
};
let ComputerScore = 0 ;
let PlayerScore = 0 ;



function playRound(playerSelection,computerSelection ){

   if (playerSelection === computerSelection){
    rounResultText.innerText = `Tieeeee !!!! ${playerSelection} = ${computerSelection} `
    console.log(`Tieeeee !!!! ${playerSelection} = ${computerSelection} `)
   } else if (playerSelection === "Rock" && computerSelection === "Paper"){
    ComputerScore+=1
    rounResultText.innerText = `You lose! Paper beats Rock My-Score:${ComputerScore} Your-Score:${PlayerScore}`
    console.log(`You lose! Paper beats Rock My-Score:${ComputerScore} Your-Score:${PlayerScore}` )
   } else if (playerSelection === "Paper" && computerSelection === "Scissors"){
    ComputerScore+=1
    rounResultText.innerText = `You lose! Scissore  beats Paper My-Score:${ComputerScore} Your-Score:${PlayerScore}`
    console.log(`You lose! Scissore  beats Paper My-Score:${ComputerScore} Your-Score:${PlayerScore}`)
   } else if (playerSelection === "Scissors" && computerSelection === "Rock"){
    ComputerScore+=1
    rounResultText.innerText = `You lose! Rock beats Scissore My-Score:${ComputerScore} Your-Score:${PlayerScore}`
    console.log(`You lose! Rock beats Scissore My-Score:${ComputerScore} Your-Score:${PlayerScore}`)
   } else if (playerSelection === "Scissors" && computerSelection === "Paper"){
    PlayerScore+=1
    rounResultText.innerText = `You win! Scissore beats Paper  My-Score:${ComputerScore} Your-Score:${PlayerScore}`
    console.log(`You win! Scissore beats Paper  My-Score:${ComputerScore} Your-Score:${PlayerScore}`)
   } else if (playerSelection === "Paper" && computerSelection === "Rock"){
    PlayerScore+=1
    rounResultText.innerText = `You win! Paper beats Rock My-Score:${ComputerScore} Your-Score:${PlayerScore}`
    console.log(`You win! Paper beats Rock My-Score:${ComputerScore} Your-Score:${PlayerScore}` )
   }else if (playerSelection === "Rock" && computerSelection === "Scissors"){
    PlayerScore+=1
    rounResultText.innerText = `You win! Rock beats Scissore My-Score:${ComputerScore} Your-Score:${PlayerScore}`
    console.log (`You win! Rock beats Scissore My-Score:${ComputerScore} Your-Score:${PlayerScore}`)
   } else {
    rounResultText.innerText = 'i dont know you probably entered something else !!!'
    console.log ('i dont know you probably entered something else !!!')
   };
}
function game(){
    for (i=1 ; i <= i++ ; i++){
        let playerSelection = getUserChoices ();
        let computerSelection = getCopmputerChoice ();
        playRound(playerSelection,computerSelection );
        if (PlayerScore == 5 || ComputerScore == 5){
            if (PlayerScore > ComputerScore) {
                finalResultText.innerText = `ok You won !!!  My-Score:${ComputerScore}  Your-Score:${PlayerScore} `
                rounResultText.textContent = ""
                console.log(`ok You won !!!  My-Score:${ComputerScore}  Your-Score:${PlayerScore} `) 
                ComputerScore = 0 ;
                 PlayerScore = 0

            }else if (PlayerScore < ComputerScore) {
                finalResultText.innerText = `You Loser !!!  My-Score:${ComputerScore}  Your-Score:${PlayerScore} `
                rounResultText.textContent = ""
                console.log(`You Loser !!!  My-Score:${ComputerScore}  Your-Score:${PlayerScore} ` )
                ComputerScore = 0 ;
                PlayerScore = 0
               }   else {
                finalResultText.innerText = `Its a Tie, but you know im better!!!! `
                rounResultText.textContent = ""
                console.log("Its a Tie, but you know im better!!!!")
               ComputerScore = 0 ;
                PlayerScore = 0};
        
         };
         
         break ;
    
          
            
        } 
  
    }

