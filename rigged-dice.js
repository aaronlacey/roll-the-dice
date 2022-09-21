/* ## `rigged-dice.js`

Create a new file, `rigged-dice.js`, which prompts the user for a rigged number using a 6-sided die. 
The dice should roll the rigged number twice as frequently as the other numbers! */

const prompt = require('prompt-sync')({ sigint: true })

let diceRoll = prompt("Welcome User do you feel lucky? ")
    if(diceRoll === "yes"){
        console.log("Let's Roll!");
}   while(diceRoll !== "yes")
            diceRoll = (prompt( "Come on, give it a try: "));
diceRoll = Math.ceil(Math.random()*6)
    if(diceRoll === "yes"){
        console.log("Let's Roll!")
}   if(diceRoll >= 5 * 0.32)
    console.log(diceRoll);

