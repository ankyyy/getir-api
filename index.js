const express = require('express'),
    bodyParser = require('body-parser'),
    // session = require('express-session'),
    cors = require('cors');
    // passport = require('passport'),
    // errorhandler = require('errorhandler'),
require('./database')
const handlers = require('./handler')


const app = express()
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
const port = 3000

app.post('/records', async (req, res) => {
  try{
    const result = await handlers.getRecords(req.body)
    res.send(result)

  } catch(e){
    res.status(500).send('Internal server error')
  }
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})