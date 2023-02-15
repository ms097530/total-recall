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


////////////////////////////////
// * Yell at the Ninja Turtles
////////////////////////////////


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