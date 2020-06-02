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



var enemyNames = ["Roborto", 'Amy Android','Robo Trumble'];
var enemyHealth = 50;
var enemyAttack = 12;


var fight = function (enemyName) {
    //alert users they are starting the round
    window.alert("Welcome to Robot Gladiators!");
    //does player want to skip or fight
    var promptFight = window.prompt('Would you like to FIGHT or SKIP this battle?');
    promptFight = promptFight.toLowerCase();
    //player skips
    if (promptFight === 'skip') {
        //confirm skip
        let confirmSkip = window.confirm("Are you sure you want to skip? You'll lose 2 money");
        if (confirmSkip) {
            playerMoney -= 2;
            window.alert(`${playerName} has skipped. ${playerName}'s money is now ${playerMoney}.`);
        } else {
            fight();
        }
    }
    else if (promptFight === 'fight') {
        //Subtract the value of `playerAttack` from the value of `enemyHealth` and use that result to update the value in the `enemyHealth` variable
        enemyHealth -= playerAttack;
        // Log a resulting message to the console so we know that it worked.
        console.log(`${playerName} attacked ${enemyName}. ${enemyName} now has ${enemyHealth} health remainging.`);
        //check enemy health
        if (enemyHealth <= 0) {
            window.alert(`${enemyName} has died.`);
        } else {
            window.alert(`${enemyName} still has ${enemyHealth} health left.`);
        };
        // Subtract the value of `enemyAttack` from the value of `playerHealth` and use that result to update the value in the `playerHealth` variable.
        playerHealth -= enemyAttack;
        // Log a resulting message to the console so we know that it worked.
        console.log(`${enemyName} attacked ${playerName}. ${playerName} now has ${playerHealth} health remaining.`);
        //check player health
        if (playerHealth <= 0) {
            window.alert(`${playerName} has died.`);
        } else {
            window.alert(`${playerName} still has ${playerHealth} health left.`);
        }
    }
    else {
        window.alert('Invalid Entry');
    }
};

for (let i=0; i<enemyNames.length; i++){
    fight(enemyNames[i]);
}