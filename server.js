const express = require('express');
const app = express();
const mongoose = require('mongoose');
const db = mongoose.connection;

// Middleware
app.use(express.urlencoded({ extended: false }));// extended: false - does not allow nested objects in query strings
app.use(express.json());// returns middleware that only parses JSON

app.use( express.static( 'public' ));

// Controllers
const videosController = require('./controllers/videos.js')
app.use ('/videos', videosController);

// Routes
app.get('/', (req,res)=>{
    res.send("Test")
});

// Enviroment Variables
const mongoURI = process.env.MONGODB_URI || 'mongodb://localhost/videosapp';
const PORT = process.env.PORT || 3000;

// Connect to Mongo
mongoose.connect (mongoURI, { useMongoClient: true});

// Error / success
db.on( 'error', ( err ) => console.log( err.message + ' is Mongod not running?' ));
db.on( 'connected', () => console.log( 'mongo connected: ', mongoURI ));
db.on( 'disconnected', () => console.log( 'mongo disconnected' ));

// Open the connection to mongo
db.on( 'open' , ()=>{});

// Listener
app.listen(3000, function(){
    console.log('listening...');
});
