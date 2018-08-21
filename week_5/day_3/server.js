const express = require ('express')
const bodyParser = require('body-parser');
var request = require('request');
const paths = require("./path_params")
const query = require("./query_param")
const app = express()

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.listen(3000, () => console.log('Example app listening on port 3000!'))

app.use('/', paths)
app.use('/', query)

request('http://api.openweathermap.org/data/2.5/weather?q=London&units=metric&APPID=c6320192c1fe5796cee67590a23adc57', function (error, response, weather) {
  if (!error && response.statusCode == 200) {
    // let units = weather.query.units
    console.log((weather)) // Shows the HTML for the EA homepage. 
  } else {
      console.log(error)
  }
})

