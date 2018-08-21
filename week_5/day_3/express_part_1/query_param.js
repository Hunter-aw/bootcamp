const express = require ('express')

const query = express.Router()

query.get('/books', function(req, res) {
    var genretosearch = req.query.genre;
    var authortosearch = req.query.author;
    //let's pretend we have a function that queries our database and returns what it finds
    res.send("you want to see " + genretosearch + " by " + authortosearch)
});

query.get('/names', (req, res) => {
    let name = req.query.name;
    res.send("Hello " + name)
    console.log(req)
})

query.get('/person', (req, res) => {
    let firstName = req.query.first;
    let lastName = req.query.last;
    res.send(`Hello ${firstName} ${lastName}`)
})

query.post('/users', function(req, res) {
    console.log(req.body); //the data on a new book
    res.send("From server route");
});
  
module.exports = query