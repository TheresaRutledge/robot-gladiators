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
    attack:10
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
if(robot.health<=0){
window.alert(`${robot.name} has died!`);
} else {
    window.alert(`${robot.name} still has ${robot.health} health left.`);
    }
}


//fight function, alerts players that the fight has begun
var fight = () => {
    //Alert users they are starting the round
    window.alert('Welcome to Robot Gladiators!');
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
};

fight();