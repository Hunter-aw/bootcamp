const express = require ('express')

const paths = express.Router()

paths.get('/names/:name', (req, res) => {
    res.send('Hello ' + req.params.name)
})


module.exports = paths