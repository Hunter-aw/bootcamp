// Get Dependencies
const express = require('express')
const path = require('path')
const http = require('http')
const bodyParser = require('body-parser')

// Initialize Express
const app = express()

//Get our API Routes
const api = require('./server/routes/api')

app.use(function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    next();
   });

// Parsers for POST data
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false}))

// Point to static path to dist
app.use(express.static(path.join(__dirname, 'dist')))
app.use(express.static(path.join(__dirname, '../../node_modules')))

// Set Api Routes
app.use('/', api)

//Catch all other routes and return the index file
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'dist/index.html'))
})

//Get port and store in Express
const port = process.env.PORT || '3000'
app.set('port', port)

const server = http.createServer(app);

server.listen(3000, () => {
    console.log('your server is sprinting on http://localhost:3000')
}) 