//Gladiator Robots Game
//Game States
// win - player robot defeats all enemy robots
// *fight all enemy robots
// *defeat each enemy robot
// lose - player robot's health drops to zero or lower

var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;
var playerWins = 0;
var playerLosses = 0;



var enemyNames = ["Roborto", 'Amy Android', 'Robo Trumble'];
var enemyHealth = 50;
var enemyAttack = 12;

var shop = () => {
    //show player money and shop options: refill health, upgrade attack, leave shop
    var shopAction = window.alert(`You have ${playerMoney} money. Heath is: ${playerHealth}. Attack is: ${playerHealth}. Do you want to 'refill' health, 'upgrade' attack or 'leave' the shop?`)
    //if refill 
    
    //if upgrade
    //if leave
    //if invalid start over
}

//Fight function - checks all players have positive health, asks if player wants to skip or fight, fight robot until player or enemy health drops below zero
var fight = function (enemyName) {
    //check health of player and robot are above zero
    while (enemyHealth > 0 && playerHealth > 0) {
        //does player want to skip or fight
        var promptFight = window.prompt('Would you like to FIGHT or SKIP this battle?');
        promptFight = promptFight.toLowerCase();
        //player skips
        if (promptFight === 'skip' && playerMoney >= 10) {
            //confirm skip
            let confirmSkip = window.confirm("Are you sure you want to skip? You'll lose 10 money");
            if (confirmSkip) {
                playerMoney -= 10;
                window.alert(`${playerName} has skipped. ${playerName}'s money is now ${playerMoney}.`);
                console.log(`playerMoney: ${playerMoney}`);
                break;
            }
        }
        if(promptFight === 'skip' && playerMoney < 10){
            window.alert('Not enough money to skip');
            //does player want to shop
            var goToShop = window.prompt('Do you want to shop?');
            //if yes, call shop function
            if (goToShop ==='yes'){
                goToShop();
            }
        
        }

        //Subtract the value of `playerAttack` from the value of `enemyHealth` and use that result to update the value in the `enemyHealth` variable
        enemyHealth -= playerAttack;
        console.log(`${playerName} attacked ${enemyName}. ${enemyName} now has ${enemyHealth} health remainging.`);
        //check enemy health
        if (enemyHealth <= 0) {
            window.alert(`${enemyName} has died.`);
            playerMoney += 20;
            var goToShop = window.prompt('Do you want to shop?');
            //if yes, call shop function
            if (goToShop ==='yes'){
                goToShop();
            }
        } else {
            window.alert(`${enemyName} still has ${enemyHealth} health left.`);
        }
        // Subtract the value of `enemyAttack` from the value of `playerHealth` and use that result to update the value in the `playerHealth` variable.
        playerHealth -= enemyAttack;
        console.log(`${enemyName} attacked ${playerName}. ${playerName} now has ${playerHealth} health remaining.`);
        //check player health
        if (playerHealth <= 0) {
            window.alert(`${playerName} has died.`);
        } else {
            window.alert(`${playerName} still has ${playerHealth} health left.`);
        }
    }

};


// starts a new game 
const playGame = () => {
    //round opening alert
    for (let i = 0; i < enemyNames.length; i++) {
        if (playerHealth > 0) {
            // debugger;
            window.alert("Welcome to Robot Gladiators! Round: " + (i + 1));
            // reset enemy health to 50
            enemyHealth = 50;
            //call fight function with enemy robot
            fight(enemyNames[i]);
        }
    }
    endGame();
}

//when game is over do players want to restart or not
var endGame = () => {
    if(playerHealth > 0){
        window.alert('Congratulations You Won!')
        playerWins++;
    }
    if(playerHealth <=0 ){
        window.alert('You lost your robot in battle. Game Over')
        playerLosses++;
    }
    //alerts players stats
    window.alert(`Wins: ${playerWins} Losses: ${playerLosses}`)
    //play again?
    var playAgain = window.confirm('Do you want to play again?');
    //restart game
    if(playAgain){
        // i = 0;
        playerHealth = 100;
        enemyHealth=50;
        playerMoney = 10;
        playGame();
    //thanks for playing
    } else {
        window.alert ('Thanks for playing!');
    }
}

playGame();




