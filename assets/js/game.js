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



var enemyNames = ["Roborto", 'Amy Android', 'Robo Trumble'];
var enemyHealth = 50;
var enemyAttack = 12;


var fight = function (enemyName) {
    //check health of player and robot are above zero
    while (enemyHealth > 0 && playerHealth > 0) {
        //does player want to skip or fight
        var promptFight = window.prompt('Would you like to FIGHT or SKIP this battle?');
        promptFight = promptFight.toLowerCase();
        //invalid skip entry
        //player skips
        if (promptFight === 'skip') {
            //confirm skip
            let confirmSkip = window.confirm("Are you sure you want to skip? You'll lose 10 money");
            if (confirmSkip) {
                playerMoney -= 10;
                window.alert(`${playerName} has skipped. ${playerName}'s money is now ${playerMoney}.`);
                console.log(`playerMoney: ${playerMoney}`);
                break;
            }
        }
        //Subtract the value of `playerAttack` from the value of `enemyHealth` and use that result to update the value in the `enemyHealth` variable
        enemyHealth -= playerAttack;
        console.log(`${playerName} attacked ${enemyName}. ${enemyName} now has ${enemyHealth} health remainging.`);
        //check enemy health
        if (enemyHealth <= 0) {
            window.alert(`${enemyName} has died.`);
            playerMoney += 20;
            //leave loop since enemy is dead
            break;
        } else {
            window.alert(`${enemyName} still has ${enemyHealth} health left.`);
        }
        // Subtract the value of `enemyAttack` from the value of `playerHealth` and use that result to update the value in the `playerHealth` variable.
        playerHealth -= enemyAttack;
        console.log(`${enemyName} attacked ${playerName}. ${playerName} now has ${playerHealth} health remaining.`);
        //check player health
        if (playerHealth <= 0) {
            window.alert(`${playerName} has died.`);
            window.alert('You have lost your robot in battle! Game Over!');
            //leave loop since player died
            break;
        } else {
            window.alert(`${playerName} still has ${playerHealth} health left.`);
        }
    }

};

//round opening alert
    for (let i = 0; i < enemyNames.length; i++) {
        if(playerHealth > 0){
        // debugger;
        window.alert("Welcome to Robot Gladiators! Round: " + (i + 1));
        // reset enemy health to 50
        enemyHealth = 50;
        //call fight function with enemy robot
        fight(enemyNames[i]);
    }
}; 
