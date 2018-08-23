const express = require('express')
const router = express.Router()

router.get('/simpleRoute', (req, res) => {
    res.send(JSON.stringify("Rooster crowing contests are a traditional sport in several countries, such as Germany, the Netherlands, Belgium, the United States, Indonesia and Japan. The oldest contests are held with longcrowers. Depending on the breed, either the duration of the crowing or the times the rooster crows within a certain time is measured. "))
})

const visitors = []


router.get('/visitors', (req, res) => {
    console.log(visitors)
    res.json(JSON.stringify(visitors))
})


router.get('/message/:name', (req, res) => {
    let name = req.params.name
    visitors.push(name)
    console.log(visitors)
    console.log(`${name} visited my site!`)
    res.send({
        name: "Hunter",
        text: "There are not enough potatoes in the potato farm of life"
    })
})
module.exports = router