const express = require('express')
const app = express()

// var myLogger = function (req, res, next) {
//     console.log('LOGGED');
//     next();
// };

// var toLower = function (req, res, next) {
//     console.log('ayyyy');
//     next();
// }

// app.use(function (req, res, next) {
//     req.requestTime = new Date().toString();
//     next();
//   });
  
//   app.get('/', function (req, res) {
//     var responseText = 'Requested at: ' + req.requestTime + '. Like a boss! ';
//     res.send(responseText);
//   });

app.use(express.static(__dirname + '/public'));

app.use(function(err, req, res, next) {
    console.error(err.stack);
    res.status(500)
    res.send('Something broke!');
    // res.status(404).send('damn gurl, this link dont exist')
  });  

app.get('/', function (req, res) {
    res.sendFile(__dirname + '/public/test.html')
  });

app.get('/', function (req, res) {
  res.send('This is from the root directory')
});

// app.use(function(req, res, next){
//     res.status(404);
  
//     // respond with html page
//     if (req.accepts('html')) {
//       res.send('404'); //write cool 404 html here
//       return;
//     }
// });



app.listen(1212, () => {
    console.log('surver is surviving at http://localhost:1212')
});

