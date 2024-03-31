const express = require('express')
const app = express()
const PORT = 8000

let characters = {
    'snake': {
        'age': 42,
        'birthName': 'David',
        'favoriteWeapon': 'SOCOM'
    },
    'meryl': {
        'age': 37,
        'birthName': 'Meryl Silverburgh',
        'favoriteWeapon': 'Desert Eagle'
    },
    'otacon': {
        'age': 38,
        'birthName': 'Hal Emmerich',
        'favoriteWeapon': 'Anime'
    },
    'liquid': {
        'age': 33,
        'birthName': 'Eli',
        'favoriteWeapon': 'DNA'
    }
}

app.listen(process.env.PORT || PORT, () => {
    console.log(`Running on ${PORT}, you better go catch it!`)
})

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html')
})

app.get('/api/:character', (req, res) => {
    const charName = req.params.character
    if (characters[charName]){
        res.json(characters[charName])
    } else res.json(characters['liquid'])
})