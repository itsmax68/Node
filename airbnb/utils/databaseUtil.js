// const mongo = require('mongodb');

// const MongoClient = mongo.MongoClient;

// const MONGO_URL = "mongodb+srv://manavkalathiya828_db_user:7d8HrTkoy1qyEGxX@cluster-airbnb.gctjbod.mongodb.net/?appName=Cluster-airbnb";

// let _db;

// const mongoConnect= (callback) => {
//   MongoClient.connect(MONGO_URL).then(client => {
//     callback();
//     _db = client.db('airbnb');
//   }).catch(err =>{
//     console.log('error while connecting to mongo :',err);
//   });
// }

// const getDB = () =>{
//   if(!_db) {
//     throw new Error('Mongo not connected');
//   }
//   return _db;
// }

// exports.mongoConnect = mongoConnect;
// exports.getDB = getDB;
