// link to lab: https://perscholas.instructure.com/courses/1297/pages/week-4-day-2-lecture-slash-lab-slash-hw-js-total-recall?module_item_id=776628

// Example of What your JS File in VS Code should look like

const H = 'heading'
const SH = 'subheading'

function printHeading(text, type)
{
    if (type === H)
        console.log(`%c-------- ${text} --------`, 'color: yellow; font-size: 1.5rem;')
    if (type === SH)
        console.log(`%c---- ${text} ----`, 'color: rgba(230, 150, 30); font-size: 1.25rem;')
}


function printAnswer(questionNum, answer)
{
    console.log(`${questionNum}. ${answer}`)
}

/*
    Remember!!! Once you’ve completed a problem,
    COMMENT OUT YOUR WORK before moving on to the next one.
    This makes it easier to read and debug the current
    Solution you are working on.
*/


// I. Variables & Data Types
printHeading('I - Variables & Data Types', H)
// A. Q + A
printHeading('Q + A', SH)
printAnswer(1, 'using "let", "var", or "const')
printAnswer(2, 'var_name = new_val')
printAnswer(3, 'let new_var = old_var')
printAnswer(4, '"Declaring" a variable only reserves space in memory for the variable. No value is assigned.\n"Assigning" means associating a given value with a variable (location in memory).\n"Defining" means that a variable is initialized.')
printAnswer(5, 'Pseudocoding is writing out the logic for a problem in rough English to get an idea of how to solve a problem. It helps structure your thoughts without being bogged down by programming syntax.')
printAnswer(6, 'Most of your time should be spent thinking about how to solve the problem. Once you have a solution, it is only a matter of writing the actual code (theoretically).')
// B. Strings
printHeading('Strings', SH)
let firstVariable = 'Hello World'
firstVariable = 9029
let secondVariable = firstVariable
secondVariable = 'New string'
printAnswer(6, `firstVariable is ${firstVariable}`)
let yourName = 'Mike Schultz'
printAnswer(7, `Hello, my name is ${yourName}.`)
// C. Booleans
printHeading('Booleans', SH)
const a = 4;
const b = 53;
const c = 57;
const d = 16;
const e = 'Kevin';

printAnswer(1, a < b)
printAnswer(2, c > d)
printAnswer(3, 'Name' === 'Name')
// FOR THE NEXT TWO, USE ONLY && OR ||
printAnswer(4, true || false)
printAnswer(5, false || false || false || false || false || true)
printAnswer(6, false === false)
printAnswer(7, e === 'Kevin')
printAnswer(8, a + b === c)
printAnswer(9, a * a === d)
printAnswer(10, 48 == '48')
// D. The Farm
printHeading('The Farm', SH)
let animal = 'cow'
if (animal === 'cow')
    console.log('mooooo')

animal = 'goat'
if (animal !== 'cow')
    console.log('Hey! You\'re not a cow.')
// E. Driver's Ed
//_____________________________________________________________
printHeading('Driver\'s Ed', SH)
let age = 69
if (age >= 16)
    console.log('Here are the keys!')
else
    console.log('Sorry, you\'re too young.')





// II. Loops
printHeading('II - Loops', H)
// A. The Basics
printHeading('The Basics', SH)
for (let i = 0; i <= 10; ++i)
    console.log(i)
// for (let i = 10; i <= 400; ++i)
//     console.log(i)
// for (let i = 12; i <= 4000; i += 3)
//     console.log(i)

// B. Get even
printHeading('Get even', SH)
for (let i = 1; i <= 100; ++i)
{
    let output = i
    if (i % 2 === 0)
        output += '<-- is an even number'
    // console.log(output)
}
// C. Give me Five
printHeading('Give me Five', SH)
for (let i = 0; i <= 100; ++i)
{
    let output = `I found a ${i}.`
    if (i % 5 === 0)
        output += ' High five!'
    if (i % 3 === 0)
        output += ' Three is a crowd.'

    // console.log(output)
}
// D. Savings account
//_____________________________________________________________
printHeading('Savings account', SH)
let bank_account = 0
for (let i = 1; i <= 10; ++i)
    bank_account += i
printAnswer(1, bank_account)

bank_account = 0
for (let i = 1; i <= 100; ++i)
    bank_account += i
bank_account *= 2
printAnswer(2, bank_account)








// III. Arrays & Control Flow
printHeading('III - Arrays & Control Flow', H)
// A. Talk about it:
printHeading('Talk about it', SH)
printAnswer(1, 'things inside an array are array items')
printAnswer(2, 'yes, array contents stay in order')
printAnswer(3, 'an array can model containers, like a home could be thought of as a container for people (and other things)')
// B. Easy Does It
printHeading('Easy Does It', SH)
let quotes = ['"Float like a butterfly, sting like a bee."', '"Omae wa mou shindeiru."', '"NANI?!"']
printAnswer(1, quotes)
// C. Accessing elements
printHeading('Accessing elements', SH)
const randomThings = [1, 10, "Hello", true]
printAnswer(1, 'randomThings[0]')
printAnswer(2, 'randomThings[2] = \'World\'')
randomThings[2] = 'World'
printAnswer(3, randomThings)
// D. Change values
printHeading('Change values', SH)
const ourClass = ["Salty", "Zoom", "Sardine", "Slack", "Github"]
printAnswer(1, 'ourClass[2]')
printAnswer(2, 'ourClass[4] = \'Octocat\'')
ourClass[4] = 'Octocat'
ourClass.push('Cloud City')
printAnswer(3, ourClass)
// E. Mix It Up
const myArray = [5, 10, 500, 20]
console.log('starting array: ', myArray)
myArray.push('Aegon', 'WAAAAGH')
printAnswer(1, myArray)
myArray.shift()
printAnswer(2, myArray)
myArray.unshift('Bob Marley')
printAnswer(3, myArray)
myArray.pop()
printAnswer(4, myArray)
myArray.reverse()
printAnswer(5, `${myArray} - the array was reversed in place; the method alters the array it is called on`)
// F. Biggie Smalls
printHeading('Biggie Smalls', SH)
let num = 0
if (num < 100)
    console.log('little number')
else
    console.log('big number')
// G. Monkey in the Middle
printHeading('Monkey in the Middle', SH)
let monkeyNum = 6
if (monkeyNum < 5)
{
    console.log('little number')
}
else if (monkeyNum > 10)
{
    console.log('big number')
}
else
{
    console.log('monkey')
}
// H. What's in Your Closet?
//_____________________________________________________________
printHeading('What\'s in Your Closet?', SH)
const kristynsCloset = [
    "left shoe",
    "cowboy boots",
    "right sock",
    "Per Scholas hoodie",
    "green pants",
    "yellow knit hat",
    "marshmallow peeps"
];

// Thom's closet is more complicated. Check out this nested data structure!!
const thomsCloset = [
    [
        // These are Thom's shirts
        "grey button-up",
        "dark grey button-up",
        "light blue button-up",
        "blue button-up",
    ],
    [
        // These are Thom's pants
        "grey jeans",
        "jeans",
        "PJs"
    ],
    [
        // Thom's accessories
        "wool mittens",
        "wool scarf",
        "raybans"
    ]
];

printAnswer(1, `Kristyn is rocking that ${kristynsCloset[2]} today!`)
kristynsCloset.splice(-1, 0, 'raybans')
printAnswer(2, kristynsCloset)
kristynsCloset[5] = 'stained knit hat'
printAnswer(3, kristynsCloset)
printAnswer(7, `Thom's outfit: ${thomsCloset[0][0]}, ${thomsCloset[1][2]}, and ${thomsCloset[2][2]}.`)
thomsCloset[1][2] = 'Footie Pajamas'
printAnswer(8, `Thom's shirts: ${thomsCloset[0]}.\nThom's pants: ${thomsCloset[1]}.\nThom's accessories: ${thomsCloset[2]}.`)



// IV. Functions
printHeading('IV - Functions', H)
// A.
printHeading('printGreeting', SH)
function printGreeting(name)
{
    return 'Hello there, ' + name
}
printAnswer(1, printGreeting('Slimer'))
// B.
printHeading('printCool', SH)
function printCool(name)
{
    console.log(name + ' is cool')
}
printCool('Captain Reynolds')
// C.
printHeading('calculateCube', SH)
function calculateCube(side)
{
    console.log(side ** 3)
}
calculateCube(5)
// D.
printHeading('isVowel', SH)
function isVowel(char)
{
    let vowels = ['a', 'e', 'i', 'o', 'u']
    if (vowels.includes(char.toLowerCase()))
        return true
    return false
}
printAnswer(1, `A is a vowel? ${isVowel('A')}`)
printAnswer(2, `B is a vowel? ${isVowel('b')}`)
// E.
printHeading('getTwoLengths', SH)
function getTwoLengths(str1, str2)
{
    return [str1.length, str2.length]
}
let strLengths = getTwoLengths('Hank', 'Hippopopalous')
printAnswer(1, `length of Hank: ${strLengths[0]}  length of Hippopopalous: ${strLengths[1]}`)
// F.
printHeading('getMultipleLenghts', SH)
function getMultipleLenghts(strArr)
{
    let lengthArr = []

    strArr.forEach(str =>
    {
        lengthArr.push(str.length)
    })
    return lengthArr
}
printAnswer(1, getMultipleLenghts(['hello', 'omae wa mou shindeiru', 'nani', 'baka na!', 'hippopotamus']))
// G.
printHeading('maxOfThree', SH)
function maxOfThree(num1, num2, num3)
{
    if (num1 > num2 && num1 > num3)
    {
        return num1
    }
    else if (num2 > num1 && num2 > num3)
    {
        return num2
    }
    else
    {
        return num3
    }
}
printAnswer(1, `max of 1,2,3: ${maxOfThree(1, 2, 3)}`)
printAnswer(2, `max of 4,6,4: ${maxOfThree(4, 6, 4)}`)
printAnswer(3, `max of 69,13,69: ${maxOfThree(69, 13, 69)}`)
printAnswer(4, `max of 6,9,1: ${maxOfThree(6, 9, 1)}`)
// H.
//_____________________________________________________________
printHeading('printLongestWord', SH)
function printLongestWord(strArr)
{
    let longestWordIndex = -1
    let longestWordLength = 0

    strArr.forEach((str, i) =>
    {
        if (str.length > longestWordLength)
        {
            longestWordIndex = i
            longestWordLength = str.length
        }
    })

    return strArr[longestWordIndex]
}
printAnswer(1, printLongestWord(["BoJack", "Princess", "Diane", "a", "Max", "Peanutbutter", "big", "Todd"]))





// V. Objects
printHeading('Objects', H)
// A.
printHeading('Make a user object', SH)
let user = {
    name: 'Bob Dob',
    email: 'bobdobIzDaGreatest!!@gmail.com',
    age: 31,
    purchased: []
}
console.log(user)
// B.
printHeading('Update the user', SH)
user.email = 'bobdobBoringCorpoEmail@gmail.com'
user.age++
console.log(user)
// C.
printHeading('Adding keys and values', SH)
user.location = 'Nunyabidness'
console.log(user)
// D.
printHeading('Shopaholic!', SH)
user.purchased.push('carbohydrates')
user.purchased.push('peace of mind')
user.purchased.push('Merino jodhpurs')
printAnswer(1, user.purchased[2])
// E.
printHeading('Object-within-object', SH)
user.friend = {
    name: 'Dob Bobbins',
    age: 30,
    location: 'Alsonunyabidness',
    purchased: []
}
printAnswer(2, user.friend.name)
printAnswer(3, user.friend.location)
user.friend.age = 55
user.friend.purchased.push('The One Ring')
user.friend.purchased.push('A latte')
printAnswer(7, user.friend.purchased[1])
// F.
printHeading('Loops', SH)
console.log('User purchased items: ')
for (let item of user.purchased)
{
    console.log(item)
}
console.log('Friend\'s purchased items:')
for (let item of user.friend.purchased)
{
    console.log(item)
}
// G.
//_____________________________________________________________
printHeading('Functions can operate on objects', SH)
function updateUser()
{
    user.age++
    user.name = user.name.toUpperCase()
}
updateUser()
console.log(user)

function oldAndLoud(person)
{
    person.age++
    person.name = person.name.toUpperCase()
}
oldAndLoud(user.friend)
console.log(user.friend)
// Extra



// Resources to help you along the way:

// MDN JavaScript => Here is a video showing you how to navigate through the documentation once you click on the link.

//     Functions - Eloquent JavaScript

// Array Methods - W3Schools

// JS Modules - W3Schools

// Loops & Iterations
