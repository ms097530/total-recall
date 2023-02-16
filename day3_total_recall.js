// ---- Section 1 ----
class Hamster
{
    constructor(name)
    {
        this.owner = ''
        this.name = name
        this.price = 15
    }

    wheelRun()
    {
        console.log('squeak squeak')
    }

    eatFood()
    {
        console.log('nibble nibble')
    }

    getPrice()
    {
        return this.price
    }
}

class Person
{
    constructor(name)
    {
        this.name = name
        this.age = 0
        this.height = 0
        this.weight = 0
        this.mood = 0
        this.hamsters = []
        this.bankAccount = 0
    }

    getName() { return this.name }
    getAge() { return this.age }
    getWeight() { return this.weight }
    greet()
    {
        console.log('Hello, my name is ' + this.name)
    }
    eat()
    {
        this.weight++
        this.mood++
    }
    exercise()
    {
        this.weight--
    }
    ageUp()
    {
        this.age++
        this.height++
        this.weight++
        this.bankAccount += 10
        this.mood--
    }
    buyHamster(hamster)
    {
        this.hamsters.push(hamster)
        this.mood += 10
        this.bankAccount -= hamster.getPrice()
    }
}

// Create story with Person
let timmy = new Person('Timmy')

for (let i = 1; i <= 5; ++i)
{
    timmy.ageUp()
    timmy.eat()
    timmy.exercise()
}

for (let i = 1; i <= 9; ++i)
    timmy.ageUp()

let gus = new Hamster('Gus')
gus.owner = timmy.getName()
timmy.buyHamster(gus)

for (let i = 1; i <= 15; ++i)
    timmy.ageUp()

for (let i = 1; i <= 2; ++i)
{
    timmy.eat()
    timmy.exercise()
}
console.log(timmy)

// Chef Make Dinners
class Dinner
{
    constructor(appetizer, entree, dessert)
    {
        this.appetizer = appetizer
        this.entree = entree
        this.dessert = dessert
    }
}

class Chef
{
    constructor(name)
    {
        this.name = name
        this.dinners = []
    }

    makeDinner(appetizer, entree, dessert)
    {
        let newDinner = new Dinner(appetizer, entree, dessert)
        this.dinners.push(newDinner)
        return newDinner
    }
}

let chef = new Chef('Bob Dob')
let din = chef.makeDinner('mozzarella sticks', 'cheeseburger', 'apple pie')
console.log(chef)
console.log(din)







