//Gladiator Robots Game
//Game States
// win - player robot defeats all enemy robots
// *fight all enemy robots
// *defeat each enemy robot
// lose - player robot's health drops to zero or lower


//Fight function - checks all players have positive health, asks if player wants to skip or fight, fight robot until player or enemy health drops below zero
var fight = function (enemy) {
    //check health of player and robot are above zero
    while (enemy.health > 0 && player.health > 0) {
        //does player want to skip or fight
        var promptFight = window.prompt('Would you like to FIGHT or SKIP this battle?');
        promptFight = promptFight.toLowerCase();
        //player skips
        if (promptFight === 'skip' && player.money >= 10) {
            //confirm skip
            let confirmSkip = window.confirm("Are you sure you want to skip? You'll lose 10 money");
            if (confirmSkip) {
                player.money -= 10;
                window.alert(`${player.name} has skipped. ${player.name}'s money is now ${player.money}.`);
                console.log(`player money: ${player.money}`);
                break;
            }
        }
        if (promptFight === 'skip' && player.money < 10) {
            window.alert('Not enough money to skip');
            //does player want to shop
            var goToShop = window.confirm('Do you want to shop?');
            //if yes, call shop function
            if (goToShop) {
                shop();
            }

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
            //call fight function with enemy robot
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
    player health is 0
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
    var shopAction = window.prompt(`You have ${player.money} dollars. Health is: ${player.health}. Attack is: ${player.health}. Do you want to REFILL health for 7, UPGRADE attack for 7 or LEAVE the shop?`);
    shopAction = shopAction.toLowerCase();
    switch (shopAction) {
        case 'refill':
            player.refillHealth();
            break;
        case 'upgrade':
            player.upgradeAttack();
            break;
        case 'leave':
            window.alert('Leaving store.');
            break;
        default:
            window.alert('You did not pick a valid option. Try again.');
            shop();
            break;
    }
}

var player = {
    name: window.prompt("What is your robot's name?"),
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




