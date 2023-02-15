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
printDivider('Methods, Revisited')
const favMovies = ['Jaws', 'The Fellowship of the Ring', 'Howl\'s Moving Castle', 'Django Unchained', 'Cloud Atlas', 'The Usual Suspects', 'Toy Story', 'Conan the Barbarian', 'Titanic', 'Harry Potter', 'Fried Green Tomatoes', 'Volver', 'Oculus', 'Seven', 'Black Panther', 'Harry Potter', 'Imitation of Life', 'Snatch', 'Fast and Furious']

console.log('index of Titanic: ', favMovies.findIndex(movie => movie.toLowerCase() === 'Titanic'.toLowerCase()))

// 1
favMovies.sort()
console.log('1. ' + 'Using the sort() method mutates the array it is called on, sorting it by the default comparison function if none is provided.')
// 2
let poppedMovie = favMovies.pop()
console.log('2. poppedMovie: ' + poppedMovie + '\n' + favMovies)
// 3
favMovies.push('Guardians of the Galaxy')
console.log('3. ' + favMovies)
// 4
favMovies.reverse()
console.log('4. ' + favMovies)
// 5
let shiftedMovie = favMovies.shift()
console.log('5. shiftedMovie: ' + shiftedMovie)
// 6
favMovies.unshift('The Count of Monte Cristo')
console.log('6. ' + 'The unshift() method adds a new value to the front of the array it is called on and returns the new length of the array.')
// 7 - unclear what question is asking
// interpreting as "splice" "Django" out, and add "Avatar" to the array in the same method
let djangoIndex = favMovies.findIndex(movie => movie.toLowerCase() === 'Django Unchained'.toLowerCase())
favMovies.splice(djangoIndex, 1, 'Avatar')
console.log('7. ' + favMovies)
// 8
let lastHalfIndex = Math.ceil(favMovies.length / 2) // last half is determined to be smaller if length is odd
let lastHalfMovies = favMovies.slice(lastHalfIndex)
console.log('8. ' + 'The slice() method just takes a snapshot of the array; it does not alter the contents.')
// 9
console.log('9. ' + lastHalfMovies + '\n' + 'The slice() method is returning a SHALLOW COPY of the remainder of the contents from the provided start index to the end of the array (since no end index was provided).')
// 10
console.log('10. ' + favMovies)
// 11
let fandfIndex = favMovies.findIndex(movie => movie.toLowerCase === 'Fast and Furious'.toLowerCase())
console.log('11. ' + fandfIndex + '\n' + 'The findIndex() method returns -1 to indicate that a value could not be found.')
// 12
console.log('12. ' + 'The const keyword works because all it is doing is disallowing reassignment of the favMovies variable. The value of the variable can still be manipulated, so long as the manipulation isn\'t reassignment.')

////////////////////////////////
// * Where is Waldo
////////////////////////////////
printDivider('Where is Waldo')
const whereIsWaldo = [
    ["Timmy", "Frank"],
    "Eggbert",
    ["Lucinda", "Jacc", "Neff", "Snoop"],
    ["Petunia", ["Baked Goods", "Waldo"]]
]
whereIsWaldo.splice(1, 1)
console.log('remove Eggbert: ', whereIsWaldo)

whereIsWaldo[1][2] = 'No One'
console.log('change Neff: ', whereIsWaldo)

console.log('found Waldo: ', whereIsWaldo[2][1][1])
////////////////////////////////
//  * Excited Kitten
////////////////////////////////


////////////////////////////////
//  * Find the Median
////////////////////////////////