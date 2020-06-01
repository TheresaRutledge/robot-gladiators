//Gladiator Robots Game

//player enters name
var playerName = window.prompt("What is your robot's name?");

/*
//starting player health and attack levels
var playerHealth = 100;
var playerAttack=10;

console.log(`playerName: ${playerName}, playerAttack: ${playerAttack}, playerHealth: ${playerHealth}`);


var enemyName = 'Roborto';
var enemyHealth = 50;
var enemyAttack = 12;
*/

//player robot setup
const player = {
    name: playerName,
    health: 100,
    attack: 10,
    money: 10
}

//enemy robot setup
const enemy = {
    name: 'Roborto',
    health: 50,
    attack: 12
}

console.log(`playerName: ${player.name}, playerAttack: ${player.attack}, playerHealth: ${player.health}`);


//function to check that healthlevel is above zero. Requires robots to be objects

var checkHealth = (robot) => {
    if (robot.health <= 0) {
        window.alert(`${robot.name} has died!`);
    } else {
        window.alert(`${robot.name} still has ${robot.health} health left.`);
    }
}

var skipTurn = () => {
    player.money -= 2;
    window.alert(`${player.name} has skipped. ${player.name}'s money is now ${player.money}.`);
}
var areYouSure = () => {
    let confirmSkip = window.confirm("Are you sure you want to skip? You'll lose 2 money");
    // sure = sure.toLowerCase();
    if (!confirmSkip) {
        window.alert('You have chosen to fight!');
        fight();
    } else {
        skipTurn();
    }
}

//does the player want to fight or skip. If they skip they will lose 2 money
var toFight = () => {
    var promptFight = window.prompt('Would you like to FIGHT or SKIP this round?');
    promptFight = promptFight.toLowerCase();
    if (promptFight === 'fight') {
        fight();
    }
    else if (promptFight === 'skip') {
        areYouSure();
    } else {
        window.alert('Invalid Entry');
        toFight();
    }
}

//fight function
var fight = () => {
    //subtract playerAttack value from enemyAttack and store result in enemyAttack
    enemy.health -= player.attack;
    //log message to confirm enemyhealth updated
    console.log(`${player.name} attacked ${enemy.name}. ${enemy.name} now has ${enemy.health} health remainging.`);
    checkHealth(enemy);
    //subtract enemyHealth from playerHealth and store result in playerHealth
    player.health -= enemy.attack;
    //log results to ensure playerHealth updated
    console.log(`${enemy.name} attacked ${player.name}. ${player.name} now has ${player.health} health remaining.`);
    checkHealth(player);
}


//play the game
var playGame = () => {
    //Alert users they are starting the round
    window.alert('Welcome to Robot Gladiators!');
    //does player want to fight or skip
    toFight();
};

playGame();