var mongo = require('mongodb');
var MongoClient = require('mongodb').MongoClient;

var url = "mongodb://localhost:27017/Jomoflash";
MongoClient.connect(url, function(err, db) {
if (err) throw err;
console.log("Database created by Jomoflash");
db.close();
});
