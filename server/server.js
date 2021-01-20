const express = require('express');
const app = express();
const parser = require('body-parser');
const MongoClient = require('mongodb').MongoClient;
const createRouter = require('./helpers/create_router.js');
const cors = require("cors");

app.use(cors());
app.use(parser.json());

MongoClient.connect('mongodb://localhost:27017')
  .then((client) => { 
      const db = client.db('hotel');
      const bookingsCollection = db.collection('bookings')
      const bookingsRouter = createRouter(bookingsCollection);
      app.use('/api/bookings', bookingsRouter);
  })
  .catch(console.error); 

app.get('/', function (req, res) {
    res.json({message: 'Hello World!'});
  });

app.listen(3000, function () {
    console.log('App running on port 3000');
  });