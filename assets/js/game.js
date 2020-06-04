//Gladiator Robots Game
//Game States
// win - player robot defeats all enemy robots
// *fight all enemy robots
// *defeat each enemy robot
// lose - player robot's health drops to zero or lower


//does player want to fight or skip
const fightOrSkip = () => {
    var promptFight = window.prompt('Would you like to FIGHT or SKIP this battle?');
    promptFight = promptFight.toLowerCase();
    switch (promptFight) {
        case 'skip':
            if (player.money < 10) {
                alert('Not enough money to skip. You must fight');
                return false;
            } else {
                let confirm = window.confirm(`Are you sure you want to skip? You'll lose 10 dollars.`);
                if (confirm) {
                    player.money -= 10;
                    window.alert(`${player.name} has skipped. ${player.name}'s money is now ${player.money}.`);
                    console.log(`player money: ${player.money}`);
                    return true;
                } else {
                    return false;
                }
            }
            break;
        case 'fight':
            return false;
            break;
        default:
            alert('Invalid entry');
            return fightOrSkip();
    }
}

//Fight function - checks all players have positive health, asks if player wants to skip or fight, fight robot until player or enemy health drops below zero
var fight = function (enemy) {
    //check health of player and robot are above zero and play until one is not
    while (enemy.health > 0 && player.health > 0) {
        if (fightOrSkip()){
            break;
        }
        //Subtract the value of `player.attack` from the value of `enemyHealth` and use that result to update the value in the `enemyHealth` variable
        var damage = randomNumber(player.attack - 3, player.attack);
        enemy.health = Math.max(0, enemy.health - damage);
        console.log(`${player.name} attacked ${enemy.name} with ${damage}. ${enemy.name} now has ${enemy.health} health remaining.`);
        //check enemy health
        if (enemy.health <= 0) {
            window.alert(`${enemy.name} has died.`);
            player.money += 20;
            break;
        } else {
            window.alert(`${enemy.name} still has ${enemy.health} health left.`);
        }
        // Subtract the value of `enemyAttack` from the value of `player.health` and use that result to update the value in the `player.health` variable.
        damage = randomNumber(enemy.attack - 3, enemy.attack);
        player.health = Math.max(0, player.health - damage);
        console.log(`${enemy.name} attacked ${player.name} with ${damage}. ${player.name} now has ${player.health} health remaining.`);
        //check player health
        if (player.health <= 0) {
            window.alert(`${player.name} has died.`);
        } else {
            window.alert(`${player.name} still has ${player.health} health left.`);
        }
    }

};

//create random number between the min and max passed to function
var randomNumber = (min, max) => {
    var value = Math.floor(Math.random() * (max - min + 1) + min);
    return value;
}

// starts a new game 
const playGame = () => {
    //games runs for each robot in enemies object
    for (let i = 0; i < enemies.length; i++) {
        var enemyObj = enemies[i];
        //player must have positive health to continue game
        if (player.health > 0) {
            // debugger;
            window.alert("Welcome to Robot Gladiators! Round: " + (i + 1));
            // reset enemy health to 50
            enemyObj.health = randomNumber(40, 60);
            //does player want to fight or skip
            fight(enemyObj);
            if (i < enemies.length && player.health > 0) {
                var goToShop = window.confirm('Do you want to shop?');
                //if yes, call shop function
                if (goToShop) {
                    shop();
                }
            }
        }
    }
    //if player health has dropped to zero the game is over
    endGame();
}

//the game ends when the player has beat all robots or runs out of health
var endGame = () => {
    //player health is still positive
    if (player.health > 0) {
        window.alert('Congratulations You Won!')
        player.wins++;
    }
    // player health is 0
    if (player.health <= 0) {
        window.alert('You lost your robot in battle. Game Over')
        player.losses++;
    }
    //alerts players stats
    window.alert(`Wins: ${player.wins} Losses: ${player.losses}`)
    //play again?
    var playAgain = window.confirm('Do you want to play again?');
    //restart game
    if (playAgain) {
        player.reset();
        playGame();
        //thanks for playing
    } else {
        window.alert('Thanks for playing!');
    }
}

var shop = () => {
    console.log('entered the shop');
    //show player money and shop options: refill health, upgrade attack, leave shop
    var shopAction = window.prompt(`You have ${player.money} dollars. Health is: ${player.health}. Attack is: ${player.health}. Do you want to 1. REFILL health for 7, 2. UPGRADE attack for 7 or 3. LEAVE the shop?`);
    shopAction = parseInt(shopAction);
    switch (shopAction) {
        case 1:
            player.refillHealth();
            break;
        case 2:
            player.upgradeAttack();
            break;
        case 3:
            window.alert('Leaving store.');
            break;
        default:
            window.alert('You did not pick a valid option. Try again.');
            shop();
            break;
    }
}

//asks for player robot's name until valid entry in inputted
const getPlayerName = () => {
    name = prompt("What is your robot's name?");
    while (!name) {
        getPlayerName();
    }
    console.log(`Your robots name is ${name}`);
    return name;
}

//Player Object
var player = {
    name: getPlayerName(),
    health: 100,
    attack: 10,
    money: 10,
    wins: 0,
    losses: 0,
    reset: function () {
        this.health = 100;
        this.attack = 10;
        this.money = 10;
    },
    refillHealth: function () {
        if (this.money < 7) {
            window.alert(`You don't have enough money.`);
        } else {
            alert(`Refilling player's health by 20 for 7 dollars.`);
            this.health += 20;
            this.money -= 7;
        }
    },
    upgradeAttack: function () {
        if (this.money < 7) {
            window.alert(`You don't have enough money.`);
        } else {
            alert(`Upgrading player's attack by 6 for 7 dollars.`);
            this.attack += 6;
            this.money - +7;
        }
    }
}

//Enemy Object
var enemies = [
    {
        name: 'Roborto',
        attack: randomNumber(10, 14)
    },
    {
        name: 'Amy Android',
        attack: randomNumber(10, 14)
    },
    {
        name: 'Robo Trumble',
        attack: randomNumber(10, 14)
    }
]
playGame();




