const express = require('express')
const app = express()
const fs = require('fs')
const bodyParser = require('body-parser')

data = { name : "Hadas", job : "dancer" }
dataJSON = JSON.stringify(data)

app.use(express.static(__dirname + '/public'));
app.use(express.static(__dirname+ '../../../../node_modules'))
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false}));

// fs.writeFile("test.txt", dataJSON, (err) => {
//     if(err) throw err;
//     else console.log('ur file was saved ur welcom')
// })

app.listen(3000, () => {
    console.log('surving you at port http://localhost:3000')
})

app.get('/file', (req, res) => {
    fs.readFile("test.txt", 'utf8', (err, data) => {
        if (err) throw err;
        res.send(data)
    })
})
app.post('/file', (req, res) => {
    console.log(req.body)   
    fs.writeFile("newtest.txt", (JSON.stringify(req.body)), (err, data) => {
        if (err) throw err;
        else console.log("cool we got yo data yo")
    })
})

// fs.readFile("test.txt", 'utf8', (err, data) => {
//     if (err) throw err;
//     console.log(data)
// })
