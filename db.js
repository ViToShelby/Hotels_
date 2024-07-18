const mongoose = require('mongoose')

//define the mongoDB connection URL

const mongoURL = 'mongodb://localhost:27017/mydatabase'

mongoose.connect(mongoURL, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})


//Get the default connection 
// Mongoose maintains a default connection object representing the MongoDB connection.
const db = mongoose.connection;


// define event listners for database connection
db.on('connected', ()=>{
    console.log('Connected to MongoDB server')
})

db.on('error', (err)=>{
    console.error('MongoDB connection error', err)
});

db.on('disconnected', ()=>{
    console.log("MongoDB disconnected")
})

 //export database connection

 module.exports = db;