// Object
const randomFortune = {
    planet: ["Jupiter", "Saturn", "Mercury", "Mars", "Venus", "Neptune", "Uranus"],
    blessing: ["immesurable riches", "unbelievably good luck", "unexpected calamities", "regularity and normalcy", "luck love", "just pure darkness"],
    condition: ["stay at home all day", "go out and meet a friend", "go for a walk anywhere", "invite someone over", "take a long, long nap", "go out shopping", "call a family member or friend"]
}

let fortuneTell = [];

// random number generator

const randomNumber = num => Math.floor(Math.random() * num);


//Iterator
for(let piece in randomFortune) {
    let tellIndex = randomNumber(randomFortune[piece].length)

    switch(piece) {
        case 'planet':
            fortuneTell.push(`Your planet right now is ${randomFortune[piece][tellIndex]}.`)
            break
        case 'blessing':
            fortuneTell.push(`And it bestows you with a blessing or curse of ${randomFortune[piece][tellIndex]}.`)
            break
        case 'condition': 
            fortuneTell.push(`As a consequence, it is conditional that you ${randomFortune[piece][tellIndex]}.`)
            break
        default:
            fortuneTell.push('the future is blurry today, no fortune can be told today.')
        }
    }

    const appendFortune = arr => {
        const appendTell = arr.join('\n')
        console.log(appendTell)
    }

    appendFortune(fortuneTell);