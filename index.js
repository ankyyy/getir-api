const express = require('express'),
  bodyParser = require('body-parser'),
  cors = require('cors');
// errorhandler = require('errorhandler'),

require('dotenv').config()
require('./database')

const router = require('./router')

const port = process.env.PORT || 3000

const app = express()
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(router);
app.get('/', (req, res) => {
  res.send('welcome')
})


app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`)
})