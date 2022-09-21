/* ## `custom-roll.js`

Create a new file, `custom-roll.js`, that prompts the user for how many sides the dice should have, 
then simulates a roll of a dice with that many sides.

*/

const prompt = require('prompt-sync')({ sigint: true })

let numSides = prompt("Welcome User. How many sided die do you wish to use: ");
if (numSides === "6") {
    console.log("You chose a d6")
    {
        numSides = Math.ceil(Math.random() * 6);
        console.log(numSides);
    }

} else if (numSides === "20") {
} console.log("You chose a d20")
numSides = Math.ceil(Math.random() * 20);
{
    console.log(numSides);
}