const express = require('express');
const router = express.Router();
const MongoClient = require('mongodb').MongoClient


//data_poster:postsensordata
const db = "mongodb://scdatalake.duckdns.org:27017";
// mongoose code, NOT NEEDED SINCE WE USE 'mongodb' package instead.
// mongoose.Promise = global.Promise;
// mongoose.connect(db, { useNewUrlParser: true, useUnifiedTopology: true }, function(err){
//   if(err){
//     console.log("Error connecting to DB!");
//   }
// });

router.get('/', function(req, res){
  console.log("Get request for last 10 readings");
  //res.send('api works');

  MongoClient.connect(db, {
    useUnifiedTopology: true,
    useNewUrlParser: true
  }, (err, client) => {
    if (err) return console.error(err)
    console.log('Connected to Database')
    var dbo = client.db("smartcityDB");
    dbo.collection("readings").find().limit(10).sort({$natural:-1}).toArray(function(err, result) {
      if (err) throw err;
      //console.log(result);
      res.json(result.reverse()); // reverse order for charting purposes
      client.close();
    });
  });
});

router.post('/sensor/thp', function(req, res){
  // Request Expectation:
  // {
  //   "timestamp": [some date],
  //   "device_id": [device id],
  //   "temp": #,
  //   "humidity": #,
  //   "gas": #,
  //   "pressure": #
  // }
  //console.log(req.body);

  MongoClient.connect(db, {
    useUnifiedTopology: true,
    useNewUrlParser: true
  }, (err, client) => {
    if (err) return console.error(err)
    console.log("Inserting into Database...");
    var dbo = client.db("smartcityDB");
    dbo.collection("readings").insertOne(req.body, function (err, result) {
      if (err){
        res.send('ERROR');
        return console.error(err);
      }
      else
        res.send("Success");

      client.close();
    });
  });
  //res.send("POST received");
});

module.exports = router;
