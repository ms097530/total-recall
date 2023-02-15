function printDivider(text)
{
    console.log(`%c------ ${text} ------`, 'color: yellow; font-size: 1.5rem;')
}

////////////////////////////////
// * Easy Going
////////////////////////////////
printDivider('Easy Going')
for (let i = 1; i <= 20; ++i)
    console.log(i)

////////////////////////////////
// * Get Even
////////////////////////////////
printDivider('Get Even')
for (let i = 0; i <= 200; i += 2)
{
    console.log(i)
}

////////////////////////////////
// * Fizz Buzz
////////////////////////////////
printDivider('Fizz Buzz')
for (let i = 1; i <= 100; ++i)
{
    let outputStr = i.toString() + ' '
    if (i % 3 === 0)
        outputStr += 'Fizz'
    if (i % 5 === 0)
        outputStr += 'Buzz'

    console.log(outputStr)
}

////////////////////////////////
// * Wild Wild Life
////////////////////////////////
printDivider('Wild Wild Life')
const wolfy = ["Wolfy", "wolf", 16, "Yukon Territory"]
const sharky = ["Sharky", "shark", 20, "Left Coast"]
const plantee = ["Plantee", "plant", 5000, "Mordor"]
const porgee = ["Porgee", "Porg", 186, "Ahch-To"]
const dart = ["D'Art", "Demogorgan Dog", 2, "Upside Down"]

// 1
plantee[2]++
console.log('1. ' + plantee)
// 2
wolfy[3] = 'Gotham City'
console.log('2. ' + wolfy)
// 3
dart.push('Hawkins')
console.log('3. ' + dart)
// 4
wolfy.splice(0, 1, 'Gameboy')
console.log('4. ' + wolfy)

////////////////////////////////
// * Yell at the Ninja Turtles
////////////////////////////////
printDivider('Yell at the Ninja Turtles')
let ninjaTurtles = ['Donatello', 'Leonardo', 'Raphael', 'Michaelangelo']
for (let turtle of ninjaTurtles)
    console.log(turtle.toUpperCase())

////////////////////////////////
// * Methods, Revisited
////////////////////////////////


////////////////////////////////
// * Where is Waldo
////////////////////////////////


////////////////////////////////
//  * Excited Kitten
////////////////////////////////


////////////////////////////////
//  * Find the Median
////////////////////////////////